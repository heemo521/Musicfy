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
      <Text style={styles.albumText}>{album.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    width: 150,
    paddingTop: 50,
  },
  albumImage: {
    width: '100%',
    height: 150,
  },
  albumText: {
    color: '#cccccc',
    fontSize: 12,
    marginTop: 10,
  },
});
