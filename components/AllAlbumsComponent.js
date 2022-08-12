import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumsListComponent from './AlbumsListComponent';
import { useSelector, useDispatch } from 'react-redux';
import { setMusicfyAlbum } from '../store/homeSlice';

export default function AllAlbumsComponent() {
  const spotifyList = useSelector((state) => state.home.spotifyAlbum);
  const musicfyAlbum = useSelector((state) => state.home.musicfyAlbum);

  //make axios request to the server everytime user adds a track to playlist

  return (
    <View style={styles.container}>
      <AlbumsListComponent title='Your Spotify Playlist' albums={spotifyList} />
      {musicfyAlbum.length > 0 && (
        <AlbumsListComponent
          title='Your Musicfy Playlist'
          albums={musicfyAlbum}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 'horizontal',
  },
});
