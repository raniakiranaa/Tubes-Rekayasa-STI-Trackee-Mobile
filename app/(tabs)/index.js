import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { supabase } from '../supabaseClient'
// import * as WebBrowser from 'expo-web-browser';
// import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
      if (error) {
        Alert.alert('Error', error.message);
        console.log('Error:', error.message);
      } else {
        const userId = data.user.id;
        const username = email.split('@')[0];
  
        // Check if user exists in the user_profiles table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .single();
  
        if (userError) {
          // User does not exist, insert new user
          const { error: insertError } = await supabase
            .from('users')
            .insert([{ id: userId, email, username }]);
  
          if (insertError) {
            Alert.alert('Error', insertError.message);
            console.log('Insert Error:', insertError.message);
            return;
          }
        }
  
        router.push('home');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Catch Error:', error.message);
    }
  };  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/trackee_logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.login}>
            <Text style={styles.loginText}>Log In</Text>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
          <TextInput 
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
          <TextInput 
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#BCA79C',
    paddingVertical: 20,
    paddingBottom: 30,
    paddingTop: 95,
    borderBottomLeftRadius:50,
    borderBottomRightRadius: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  form: {
    flex: 2,
    width: '100%',
    top: 10,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#54433A',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  login: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  loginText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Login;