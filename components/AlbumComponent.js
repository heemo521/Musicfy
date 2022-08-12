import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectList, setIndex, setPlay } from '../store/playerSlice';
import axios from 'axios';

export default function AlbumComponent({ album, index }) {
  // useEffect(() => {
  //   getAlbum().then((response) => console.log(response));
  // });
  // console.log(album);
  // const getAlbum = () => {
  //   return axios(`https://api.spotify.com/v1/albums/${album.id}`).catch((err) =>
  //     (err)
  //   );
  // };

  const dispatch = useDispatch();
  const updatePlayer = () => {
    dispatch(selectList(album));
    dispatch(setPlay());
  };

  return (
    <View style={styles.albumContainer}>
      <Pressable onPress={updatePlayer}>
        <Image
          style={styles.albumImage}
          source={{
            uri: album.images[1].url,
          }}
        />
        <Text style={styles.albumText}>{album.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  albumContainer: {
    marginRight: 20,
    width: 150,
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
