import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumsListComponent from './AlbumsListComponent';
import { useSelector } from 'react-redux';

export default function AllAlbumsComponent() {
  const spotifyList = useSelector((state) => state.home.spotifyAlbum);
  return (
    <View style={styles.container}>
      <AlbumsListComponent title='Your Spotify Playlist' albums={spotifyList} />
      <AlbumsListComponent title='Your Musicfy Playlist' albums={spotifyList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 'horizontal',
  },
});
