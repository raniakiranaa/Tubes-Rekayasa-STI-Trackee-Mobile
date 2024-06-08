import React from 'react';  
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { padding: 35, backgroundColor: "#445E6B", height: 55 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey"
      }}>
        <Tabs.Screen
          name="index" 
          options={{
            href: null,
            unmountOnBlur: true,
            tabBarStyle: {display: 'none'},
          }}
        />
        <Tabs.Screen
          name="home" 
          options={{
            href: null,
            unmountOnBlur: true,
            tabBarStyle: {display: 'none'},
          }}
        />
        <Tabs.Screen
          name="dashboard" 
          options={{
            href: null,
            unmountOnBlur: true,
            tabBarStyle: {display: 'none'},
          }}
        />
    </Tabs>
  );
}
