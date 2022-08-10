import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumComponent from './AlbumComponent';
import { useSelector } from 'react-redux';

export default function AlbumsListCOmponent({ album }) {
  const albums = useSelector((state) => state.home.albums);
  const renderItem = ({ item }) => <AlbumComponent album={item} />;
  return (
    <View>
      {albums.length > 0 && (
        <FlatList
          data={albums}
          renderItem={renderItem}
          keyExtractor={(album) => album.id}
        />
      )}
      {albums.length === 0 && <Text>No matching results</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
