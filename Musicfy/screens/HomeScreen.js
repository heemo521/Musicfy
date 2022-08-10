import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  FlatList,
  View,
  Modal,
} from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsLoggedIn } from '../store/loginSlice';
import LoginScreen from '../components/LoginScreen';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.token);
  if (!token || !isLoggedIn) {
    return <LoginScreen />;
  }
  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <Text style={styles.title}>Welcome!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 32,
  },
  separator: {
    marginVertical: 70,
    height: 1,
    // width: '100%',
  },
  searchContainer: {
    width: '100%',
  },
});
