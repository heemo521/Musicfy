import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function SearchListItem({ music }) {
  const testServer = async () => {
    const localUrl = '127.0.0.1:8080/create';
    const response = await axios(localUrl);
  };
  console.log('start!!!!!!!!');
  console.log(music.name);
  // {
  //   "album_type": "album",
  //   "artists": Array [
  //     Object {
  //       "external_urls": Object {
  //         "spotify": "https://open.spotify.com/artist/03r4iKL2g2442PT9n2UKsx",
  //       },
  //       "href": "https://api.spotify.com/v1/artists/03r4iKL2g2442PT9n2UKsx",
  //       "id": "03r4iKL2g2442PT9n2UKsx",
  //       "name": "Beastie Boys",
  //       "type": "artist",
  //       "uri": "spotify:artist:03r4iKL2g2442PT9n2UKsx",
  //     },
  //   ],
  //   "external_urls": Object {
  //     "spotify": "https://open.spotify.com/album/6eGYLONkDMja0MNtZWnRRB",
  //   },
  //   "href": "https://api.spotify.com/v1/albums/6eGYLONkDMja0MNtZWnRRB",
  //   "id": "6eGYLONkDMja0MNtZWnRRB",
  //   "images": Array [
  //     Object {
  //       "height": 640,
  //       "url": "https://i.scdn.co/image/ab67616d0000b273ab1d7b56d97842315dd0fdaa",
  //       "width": 640,
  //     },
  //     Object {
  //       "height": 300,
  //       "url": "https://i.scdn.co/image/ab67616d00001e02ab1d7b56d97842315dd0fdaa",
  //       "width": 300,
  //     },
  //     Object {
  //       "height": 64,
  //       "url": "https://i.scdn.co/image/ab67616d00004851ab1d7b56d97842315dd0fdaa",
  //       "width": 64,
  //     },
  //   ],
  //   "name": "Hello Nasty (Deluxe Version/Remastered 2009)",
  //   "release_date": "1998-07-14",
  //   "release_date_precision": "day",
  //   "total_tracks": 43,
  //   "type": "album",
  //   "uri": "spotify:album:6eGYLONkDMja0MNtZWnRRB",
  // }
  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={testServer}>
        <View style={styles.item}>
          <Image
            style={styles.albumImage}
            source={{
              uri: music.images[2].url,
            }}
          />
          <View style={styles.textCtn}>
            <View>
              <Text style={styles.name}>{music.name}</Text>
              <Text style={styles.artist}>{music.artists[0].name}</Text>
            </View>
            {/* <Pressable>
              <Ionicons
                style={styles.icons}
                name='heart-circle-outline'
                size={24}
                color='white'
              />
            </Pressable> */}
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 8,
    width: '100%',
  },
  textCtn: {
    flexDirection: 'row',
    width: '100%',
    // alignItems: 'strectch',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#ffffff',
    marginLeft: 12,
    fontSize: 14,
    overflow: 'hidden',
  },
  artist: {
    color: '#ffffff',
    marginLeft: 12,
    fontSize: 10,
  },
  albumImage: { width: 50, height: 50 },
  icons: {
    alignSelf: 'end',
  },
});
