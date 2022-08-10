import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AlbumComponent({ album }) {
  console.log(album.images);
  return (
    <View style={styles.albumContainer}>
      <Image
        style={styles.albumImage}
        source={{
          uri: album.images[1].url,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    paddingTop: 50,
  },
  albumImage: {
    width: 300,
    height: 300,
  },
});
