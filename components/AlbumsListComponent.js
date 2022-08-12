import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import AlbumComponent from './AlbumComponent';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from '../store/playerSlice';

export default function AlbumsListComponent({ albums, title }) {
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => (
    <AlbumComponent album={item} index={index} />
  );
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
