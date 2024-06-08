import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { supabase } from '../supabaseClient';

const ResultScreen = () => {
  const router = useRouter();
  const { productId, productName } = useLocalSearchParams();
  const [productDetails, setProductDetails] = useState({
    itemId: '',
    productName: '',
    shelfNumber: '',
    rowNumber: '',
    columnNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getItemLocation();
  }, []);

  const getItemLocation = async () => {
    try {
      const productCategory = await getProductCategory(productId);
      const rackId = await getRackId(productCategory);
      const itemId = await getItemId(productId);
      
      const { data, error } = await supabase
        .from('rack_loc')
        .select('rack_id, loc_x, loc_y, item_id')
        .eq('rack_id', rackId)
        .eq('item_id', itemId)
        .limit(1)
        .single();

      if (error || !data) {
        setErrorMessage('Product location not found. Please check the Product ID and Name.');
        Alert.alert('Error', 'Product location not found. Please check the Product ID and Name.');
      } else {
        setProductDetails({
          itemId: data.item_id,
          productName: productName,
          shelfNumber: data.rack_id,
          rowNumber: data.loc_x,
          columnNumber: data.loc_y, // Assuming column number is not part of the data returned
        });
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const getProductCategory = async (productId) => {
    const { data, error } = await supabase
      .from('product')
      .select('category')
      .eq('product_id', productId)
      .single();

    if (error || !data) {
      throw new Error('Product category not found.');
    }
    return data.category;
  };

  const getRackId = async (category) => {
    const { data, error } = await supabase
      .from('rack')
      .select('rack_id')
      .eq('category', category)
      .single();

    if (error || !data) {
      throw new Error('Rack ID not found.');
    }
    return data.rack_id;
  };

  const getItemId = async (productId) => {
    const { data, error } = await supabase
      .from('item')
      .select('item_id')
      .eq('product_id', productId)
      .order('exp_date', { ascending: true })
      .limit(1)
      .single();

    if (error || !data) {
      throw new Error('Item ID not found.');
    }
    return data.item_id;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('product')}>
          <Image source={require('../../assets/back-icon.png')} style={{ width: 25, height: 25, position: 'absolute', left: 0 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Locate Product</Text>
      </View>
      <Text style={styles.subtitle}>Result</Text>
      <Text style={styles.description}>Take a glance where your product is located amidst the chaotic warehouse!</Text>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}><Text style={styles.resultLabel}>Item ID :</Text> {productDetails.itemId}</Text>
          <Text style={styles.resultText}><Text style={styles.resultLabel}>Product Name :</Text> {productDetails.productName
          }</Text>
          <Text style={styles.resultText}><Text style={styles.resultLabel}>Shelf Number :</Text> {productDetails.shelfNumber}</Text>
          <Text style={styles.resultText}><Text style={styles.resultLabel}>Row Number :</Text> {productDetails.rowNumber}</Text>
          <Text style={styles.resultText}><Text style={styles.resultLabel}>Column Number :</Text> {productDetails.columnNumber}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 46,
    marginBottom: 32,
  },
  backButton: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#54433A',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: '#8C8C8C',
    marginBottom: 24,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 14,
    marginBottom: 16,
  },
  resultLabel: {
    fontWeight: 'bold',
    color: '#54433A',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    fontSize: 14,
  },
});

export default ResultScreen;
