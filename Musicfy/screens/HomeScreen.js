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
import { setQuery, toggleModal } from '../store/homeSlice';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.home.modal);

  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <Text style={styles.title}>Welcome!</Text>
        {/* <View>
        <FlatList
          data={searchList}
          renderItem={(music) => <MusicListItem musicData={music} />}
        />
      </View> */}
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
