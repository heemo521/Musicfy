import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  FlatList,
  View,
  Modal,
} from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsLoggedIn } from '../store/loginSlice';
import LoginScreen from '../components/LoginScreen';
import AlbumsListComponent from '../components/AlbumsListComponent';
import AllAlbumsComponent from '../components/AllAlbumsComponent';
import {
  setFirstName,
  setLastName,
  setEmail,
  setId,
  setSpotifyAlbum,
} from '../store/homeSlice';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi();

export default function Home({ navigation }) {
  spotifyApi.setAccessToken(token);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.home.firstName);

  useEffect(() => {
    if (!token) return;

    getUserProfile().then((response) => {
      const { display_name, email, id } = response.data;
      const [firstN, lastN] = display_name.split(' ');
      dispatch(setFirstName(firstN));
      dispatch(setLastName(lastN));
      dispatch(setEmail(email));
      dispatch(setId(id));
    });

    getUserAlbums().then((response) => {
      Object.keys(response.data?.items[0].album);
      const albumData = response.data?.items.map(({ album }) => ({
        images: album.images,
        name: album.name,
        id: album.id,
      }));
      dispatch(setSpotifyAlbum(albumData));
    });
  }, [token]);

  const getUserProfile = () => {
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/me`,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    return axios(options).catch((error) => {
      console.error(error);
    });
  };
  const getUserAlbums = () => {
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/me/albums`,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    return axios(options).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Welcome! {firstName}</Text>
        <View styles={styles.albumContainer}>
          <AllAlbumsComponent />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 22,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 22,
    color: '#ffffff',
  },
  albumContainer: {
    flex: 1,
    color: '#ffffff',
  },
  searchContainer: {
    width: '100%',
  },
});
