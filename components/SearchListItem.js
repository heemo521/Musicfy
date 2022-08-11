import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import axios from 'axios';
export default function SearchListItem({ music }) {
  // return <Text>{JSON.stringify(Object.keys(music))}</Text>;
  console.log(music.album.name);

  const testServer = async () => {
    const localUrl = '127.0.0.1:8080/test';
    const response = await axios(localUrl);
    console.log(response.data);
  };

  return (
    <View>
      {/* <Pressable onPress={testServer}> */}
      <Text style={styles.text}>{music.album.name}</Text>
      <Text style={styles.text}>{music.artists.name}</Text>
      {/* </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
});
