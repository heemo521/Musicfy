import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useAuthRequest, ResponseType } from 'expo-auth-session';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setIsLoggedIn } from '../store/loginSlice';
// import { MMKV } from 'react-native-mmkv';

// export const storage = new MMKV();

export default function Login() {
  const dispatch = useDispatch();

  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '0f80f6a6841641588ce2b706f061e616',
      clientSecret: '1a5fb28f3db94e1586857d0e4c5d3abf',
      scopes: [
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-top-read',
        'user-modify-playback-state',
        'streaming',
        'user-read-email',
        'user-read-private',
        'user-library-read',
      ],
      usePKCE: false,
      redirectUri: 'exp://192.168.1.33:19000',
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      dispatch(setToken(access_token));
      dispatch(setIsLoggedIn(true));
    } else if (response?.type !== 'success') {
      dispatch(setIsLoggedIn(false));
    }
  }, [response]);

  return (
    <View style={styles.loginContainer}>
      <Pressable style={styles.loginButton} onPress={() => promptAsync()}>
        <View>
          <Text>Login with Spotify</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
});
