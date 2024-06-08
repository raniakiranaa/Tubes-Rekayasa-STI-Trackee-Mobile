import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';

const products = [
  { id: '#PA0001', name: 'Indomie Goreng 85g' },
  { id: '#PA0002', name: 'Indomie Soto 85g' },
  { id: '#PA0003', name: 'Indomie Ayam Bawang 85g' },
  { id: '#PA0004', name: 'Indomie Kari Ayam 85g' },
  { id: '#PA0005', name: 'Indomie Ayam Spesial 85g' },
  { id: '#PA0006', name: 'Indomie Soto Special 85g' },
  { id: '#PA0007', name: 'Indomie Soto Bandung 85g' },
  { id: '#PA0008', name: 'Indomie Ayam Jamur 85g' },
  { id: '#PA0009', name: 'Indomie Goreng Aceh 85g' },
];

const DashboardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productRow}>
      <Text style={styles.productId}>{item.id}</Text>
      <TouchableOpacity style={styles.productName} onPress={() => openModal(item)}>
        <Text style={styles.productNameText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('home')}>
          <Image source={require('../../assets/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <Text style={styles.subtitle}>Dashboard</Text>
      <Text style={styles.description}>Gain real-time insights into your inventory with our interactive dashboard.</Text>
      
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderId}>Product ID</Text>
        <Text style={styles.tableHeaderName}>Product Name</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('home')}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <Text style={styles.modalTitle}>Product Information</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Name:</Text> Indomie Varian Mie Goreng</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Brand:</Text> Indomie</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Category:</Text> FMCG</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Stock Item:</Text> 1000</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Earliest Exp. Date:</Text> 07 - 06 - 2025</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Latest Exp. Date:</Text> 07 - 06 - 2027</Text>
                <TouchableOpacity style={styles.dismissButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.dismissButtonText}>Dismiss</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    paddingRight: 25,
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BCA79C',
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableHeaderId: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#54433A',
  },
  tableHeaderName: {
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#54433A',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 2,
    elevation: 1,
  },
  productId: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'left',
    flex: 1,
  },
  productName: {
    textAlign: 'left',
    flex: 2,
  },
  productNameText: {
    fontSize: 15,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  homeButton: {
    backgroundColor: '#54433A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 26,
    paddingVertical: 32,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#54433A',
    marginBottom: 30,
    textAlign: 'center', 
  },
  modalText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#54433A',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  modalLabel: {
    fontWeight: 'bold',
  },
  dismissButton: {
    marginTop: 20,
    backgroundColor: '#54433A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dismissButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
