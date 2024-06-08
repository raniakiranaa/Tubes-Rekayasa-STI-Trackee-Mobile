import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const ResultScreen = ({ navigation }) => {
  const productDetails = {
    id: '#PA001',
    name: 'Indomie Varian Mie Goreng',
    shelfNumber: '123',
    rowNumber: '1',
    columnNumber: '1',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back-icon.png')} style={{ width: 25, height: 25, position: 'absolute', left: 0 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Locate Product</Text>
      </View>
      <Text style={styles.subtitle}>Result</Text>
      <Text style={styles.description}>Take a glance where your product is located amidst the chaotic warehouse!</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}><Text style={styles.resultLabel}>Product ID :</Text> {productDetails.id}</Text>
        <Text style={styles.resultText}><Text style={styles.resultLabel}>Product Name :</Text> {productDetails.name}</Text>
        <Text style={styles.resultText}><Text style={styles.resultLabel}>Shelf Number :</Text> {productDetails.shelfNumber}</Text>
        <Text style={styles.resultText}><Text style={styles.resultLabel}>Row Number :</Text> {productDetails.rowNumber}</Text>
        <Text style={styles.resultText}><Text style={styles.resultLabel}>Column Number :</Text> {productDetails.columnNumber}</Text>
      </View>
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
});

export default ResultScreen;
