import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { setQuery, toggleModal } from '../store/homeSlice';

export default function Search() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.home.modal);

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Search</Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <TextInput placeholder='Artists, songs, or podcasts' />
        <Pressable onPress={() => {}}>
          <Text>clear</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
