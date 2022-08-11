import { StyleSheet, Text, View } from 'react-native';

export default function MusicPlayerScreen() {
  return (
    <View style={styles.playContainer}>
      <Text> Under construction: Music Player Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  playContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import TrackPlayer from 'react-native-track-player';

// const start = async () => {
//     // Set up the player
//     await TrackPlayer.setupPlayer();

//     // Add a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         url: require('track.mp3'),
//         title: 'Track Title',
//         artist: 'Track Artist',
//         artwork: require('track.png')
//     });

//     // Start playing it
//     await TrackPlayer.play();
// };
// start();
