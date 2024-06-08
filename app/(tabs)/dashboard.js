// import React, { useState } from 'react';
// import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, Modal } from 'react-native';
// import { useRouter } from 'expo-router';

// const products = [
//   { id: '#PA0001', name: 'Indomie Goreng 85g' },
//   { id: '#PA0002', name: 'Indomie Soto 85g' },
//   { id: '#PA0003', name: 'Indomie Ayam Bawang 85g' },
//   { id: '#PA0004', name: 'Indomie Kari Ayam 85g' },
//   { id: '#PA0005', name: 'Indomie Ayam Spesial 85g' },
//   { id: '#PA0006', name: 'Indomie Soto Special 85g' },
//   { id: '#PA0007', name: 'Indomie Soto Bandung 85g' },
//   { id: '#PA0008', name: 'Indomie Ayam Jamur 85g' },
//   { id: '#PA0009', name: 'Indomie Goreng Aceh 85g' },
// ];

// const DashboardScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [productName, setProductName] = useState(null);
//   const [productBrand, setProductBrand] = useState(null);
//   const [productCategory, setProductCategory] = useState(null);
//   const [stock, setStock] = useState(null);
//   const [earliestExp, setEarliestExp] = useState(null);
//   const [latestExp, setLatestExp] = useState(null);
//   const router = useRouter();

//   const fetchProduct = async () => {
//     const { data, error } = await supabase
//       .from('product')
//       .select(`
//         *,
//         items:items(*)
//       `);

//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setModalVisible(true);
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.productRow}>
//       <Text style={styles.productId}>{item.id}</Text>
//       <TouchableOpacity style={styles.productName} onPress={() => openModal(item)}>
//         <Text style={styles.productNameText}>{item.name}</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => router.push('home')}>
//           <Image source={require('../../assets/back-icon.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Dashboard</Text>
//       </View>
//       <Text style={styles.subtitle}>Dashboard</Text>
//       <Text style={styles.description}>Gain real-time insights into your inventory with our interactive dashboard.</Text>
      
//       <View style={styles.tableHeader}>
//         <Text style={styles.tableHeaderId}>Product ID</Text>
//         <Text style={styles.tableHeaderName}>Product Name</Text>
//       </View>

//       <FlatList
//         data={products}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />

//       <TouchableOpacity style={styles.homeButton} onPress={() => router.push('home')}>
//         <Text style={styles.homeButtonText}>Back to Home</Text>
//       </TouchableOpacity>

//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             {selectedProduct && (
//               <>
//                 <Text style={styles.modalTitle}>Product Information</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Name:</Text> Indomie Varian Mie Goreng</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Brand:</Text> Indomie</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Category:</Text> FMCG</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Stock Item:</Text> 1000</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Earliest Exp. Date:</Text> 07 - 06 - 2025</Text>
//                 <Text style={styles.modalText}><Text style={styles.modalLabel}>Latest Exp. Date:</Text> 07 - 06 - 2027</Text>
//                 <TouchableOpacity style={styles.dismissButton} onPress={() => setModalVisible(false)}>
//                   <Text style={styles.dismissButtonText}>Dismiss</Text>
//                 </TouchableOpacity>
//               </>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 32,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 46,
//     marginBottom: 32,
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//   },
//   title: {
//     fontSize: 19,
//     fontWeight: '600',
//     textAlign: 'center',
//     paddingRight: 25,
//     flex: 1,
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#54433A',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 12,
//     color: '#8C8C8C',
//     marginBottom: 24,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#BCA79C',
//     paddingBottom: 5,
//     marginBottom: 10,
//   },
//   tableHeaderId: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#54433A',
//   },
//   tableHeaderName: {
//     flex: 2,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#54433A',
//   },
//   productRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 10,
//     marginHorizontal: 2,
//     elevation: 1,
//   },
//   productId: {
//     fontSize: 15,
//     fontWeight: '300',
//     textAlign: 'left',
//     flex: 1,
//   },
//   productName: {
//     textAlign: 'left',
//     flex: 2,
//   },
//   productNameText: {
//     fontSize: 15,
//     fontWeight: '300',
//     textDecorationLine: 'underline',
//   },
//   homeButton: {
//     backgroundColor: '#54433A',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   homeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 26,
//     paddingVertical: 32,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#54433A',
//     marginBottom: 30,
//     textAlign: 'center', 
//   },
//   modalText: {
//     fontSize: 12,
//     fontWeight: 'normal',
//     color: '#54433A',
//     marginBottom: 10,
//     textAlign: 'left',
//     width: '100%',
//   },
//   modalLabel: {
//     fontWeight: 'bold',
//   },
//   dismissButton: {
//     marginTop: 20,
//     backgroundColor: '#54433A',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   dismissButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default DashboardScreen;


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../supabaseClient';

const DashboardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('product')
        .select(`
          product_id,
          name,
          brand,
          category,
          item (
            exp_date
          )
        `);

      if (error) {
        console.error(error);
      } else {
        // Process data to get required fields
        const processedData = data.map(product => {
          const expDates = product.item.map(item => item.exp_date);
          return {
            product_id: product.product_id,
            product_name: product.name,
            category: product.category,
            brand: product.brand,
            stock: product.item.length, // Number of items as stock
            earliest_exp: getEarliestExp(expDates),
            latest_exp: getLatestExp(expDates),
          };
        });
        setProducts(processedData);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productRow}>
      <Text style={styles.productId}>{item.product_id}</Text>
      <TouchableOpacity style={styles.productName} onPress={() => openModal(item)}>
        <Text style={styles.productNameText}>{item.product_name}</Text>
      </TouchableOpacity>
    </View>
  );

  const getEarliestExp = (expDates) => {
    return expDates.length > 0
      ? expDates.reduce((earliest, current) =>
          new Date(current) < new Date(earliest) ? current : earliest
        )
      : 'N/A';
  };

  const getLatestExp = (expDates) => {
    return expDates.length > 0
      ? expDates.reduce((latest, current) =>
          new Date(current) > new Date(latest) ? current : latest
        )
      : 'N/A';
  };

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
        keyExtractor={(item) => item.product_id.toString()}
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
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Name:</Text> {selectedProduct.product_name}</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Brand:</Text> {selectedProduct.brand}</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Product Category:</Text> {selectedProduct.category}</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Stock Item:</Text> {selectedProduct.stock}</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Earliest Exp. Date:</Text> {selectedProduct.earliest_exp}</Text>
                <Text style={styles.modalText}><Text style={styles.modalLabel}>Latest Exp. Date:</Text> {selectedProduct.latest_exp}</Text>
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
