import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

export default function SearchListItem({ music }) {
  // return <Text>{JSON.stringify(Object.keys(music))}</Text>;
  console.log(music.album.name);
  return (
    <View>
      <Text>{music.album.name}</Text>
      <Text>{music.artists.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
