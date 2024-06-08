import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../supabaseClient';

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Check if user.email is defined before using it
        if (user.email) {
          setUsername(user.email.split('@')[0]);
        } else {
          console.error("User email is undefined");
        }
      }
    };

    fetchUser();
  }, []);

  const handleNavigateDashboard = () => {
    router.push('dashboard');
  };

  const handleNavigateProduct = () => {
    router.push('product');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/profile.png')}
          style={styles.profileImage} 
        />
        <View style={styles.welcomeText}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
      <Text style={styles.title}>Welcome to TRACKEE</Text>
      <Text style={styles.subtitle}>From chaos to control, we make inventory simple.</Text>
      
      <View style={styles.contentContainer}>
        <Image 
          source={require('../../assets/location.png')}
          style={styles.icon} 
        />
        <Text style={styles.description}>Locating products has never been more easy!</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('product')}>
          <Text style={styles.buttonText}>Locate Product</Text>
          <Image 
            source={require('../../assets/right-icon.png')}
            style={{ width: 16, height: 14.5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Image 
          source={require('../../assets/dashboard.png')}
          style={styles.icon} 
        />
        <Text style={styles.description}>Navigate through the data of your warehouse here!</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigateDashboard}>
          <Text style={styles.buttonText}>Dashboard</Text>
          <Image 
            source={require('../../assets/right-icon.png')}
            style={{ width: 16, height: 14.5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    padding: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 46,
    marginBottom: 24,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 12,
    fontWeight: '500',
    color: '#7F7F7F',
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#54433A',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#54433A',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F7F7F',
    marginBottom: 32,
  },
  contentContainer: {
    borderWidth: 0.7,
    borderColor: '#828282',
    borderRadius: 20,
    padding: 10,
    marginBottom: 32,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  description: {
    fontSize: 10,
    color: '#8C8C8C',
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#54433A',
    paddingVertical: 9,
    paddingHorizontal: 23,
    borderRadius: 16.5,
    marginBottom: 16,
  },
  icon: {
    height: 90,
    marginBottom: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export default Home;
