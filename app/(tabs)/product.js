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
} from 'react-native';

const ProductScreen = ({ navigation }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/back-icon.png')} style={{ width: 25, height: 25, position: 'absolute', left: 0 }} />
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
        
        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Product Name"
          value={productName}
          onChangeText={setProductName}
        />

        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableOpacity style={styles.locateButton} onPress={() => {/* handle locate product action */}}>
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
  locateButton: {
    backgroundColor: '#54433A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
