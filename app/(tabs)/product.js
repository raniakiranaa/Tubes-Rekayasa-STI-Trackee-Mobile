import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../supabaseClient'; // Ensure this import is correct based on your file structure

const ProductScreen = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleNavigateLocate = (productName, productId) => {
    router.push({
      pathname: 'result',
      params: { productName, productId },
    });
  };
  
  const handleLocateProduct = async () => {
    setErrorMessage('');

    const { data, error } = await supabase
      .from('product')
      .select('product_id, name')
      .eq('product_id', productId)
      .eq('name', productName)
      .single();

    if (error || !data) {
      setErrorMessage('Product not found. Please check the Product ID and Name.');
    } else {
      handleNavigateLocate(data.name, data.product_id);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('home')}>
            <Image source={require('../../assets/back-icon.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Locate Product</Text>
        </View>
        <Text style={styles.subtitle}>Locate Product</Text>
        <Text style={styles.description}>Find your product of choice simply through filling out the form below.</Text>
        
        <Text style={styles.label}>Product ID*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Product ID"
          value={productId}
          onChangeText={setProductId}
        />
        
        <Text style={styles.label}>Product Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          value={productName}
          onChangeText={setProductName}
        />

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableOpacity style={styles.locateButton} onPress={handleLocateProduct}>
            <Text style={styles.locateButtonText}>Locate Product</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{ translateY: -12.5 }],
    zIndex: 1,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#54433A',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
    fontSize: 16,
    backgroundColor: '#F8F8F8',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    fontSize: 14,
  },
  locateButton: {
    backgroundColor: '#54433A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  locateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ProductScreen;
