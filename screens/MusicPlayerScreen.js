import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Modal,
  Pressable,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectList,
  setIndex,
  togglePlay,
  playNext,
  playPrev,
} from '../store/playerSlice';
import { Ionicons } from '@expo/vector-icons';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi();

export default function MusicPlayerScreen() {
  const [tracksUris, setTracksUris] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const selectedList = useSelector((state) => state.player.selectedList);
  const playIndex = useSelector((state) => state.player.playIndex);

  spotifyApi.setAccessToken(token);

  useEffect(() => {
    if (!token || !selectedList) return;
    spotifyApi
      .getAlbum(selectedList.id)
      .then((data) =>
        setTracksUris(data.body.tracks.items.map((track) => track.uri))
      );
  }, [selectedList]);

  useEffect(() => {
    if (!token || !selectedList || tracksUris.length === 0) return;
    dispatch(setIndex(0));
    spotifyApi
      .play({
        uris: [tracksUris[playIndex]],
      })
      .then(
        function (data) {
          console.log('Artist albums', data);
        },
        function (err) {
          console.error(err);
        }
      );
  }, [selectedList, tracksUris]);

  const play = () => {
    dispatch(togglePlay());
    spotifyApi.play().then(
      function (data) {
        console.log('Artist albums', data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  };
  const pause = () => {
    dispatch(togglePlay());
    spotifyApi.pause().then(
      function (data) {
        console.log('Artist albums', data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  };
  return (
    <View style={styles.playerContainer}>
      {!token || !selectedList ? (
        <Text style={{ color: '#ffffff' }}>No playlist selected</Text>
      ) : (
        <>
          <Text>Now Playing: </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: '1%',
            }}
          >
            <Pressable
              onPress={pause}
              style={{
                display: isPlaying ? 'flex' : 'none',
                paddingHorizontal: '10%',
                paddingTop: '5%',
              }}
            >
              <Ionicons name='pause-circle' size={100} color='white' />
            </Pressable>
            <Pressable
              onPress={play}
              style={{
                display: isPlaying ? 'none' : 'flex',
                paddingHorizontal: '10%',
                paddingTop: '5%',
                // marginTop: Dimensions.get('window').height < 700 ? '10%' : '6%',
              }}
            >
              <Ionicons name='play-circle-sharp' size={100} color='white' />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  musicProgress: {
    backgroundColor: 'grey',
    marginLeft: '12%',
    marginRight: '12%',
    borderRadius: 30,
  },
});
