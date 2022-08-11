import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumComponent from './AlbumComponent';
import { useSelector } from 'react-redux';

export default function AlbumsListCOmponent({ albums, title }) {
  const renderItem = ({ item }) => <AlbumComponent album={item} />;
  return (
    <View style={styles.albumsContainer}>
      <Text style={styles.albumsTitle}>{title}</Text>
      {albums.length > 0 && (
        <FlatList
          horizontal={true}
          data={albums}
          renderItem={renderItem}
          keyExtractor={(album) => album.id}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {},
  albumsTitle: {
    color: '#ffffff',
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
