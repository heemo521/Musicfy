import React, { useEffect } from 'react';
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
import { setQuery, toggleModal, setData } from '../store/searchSlice';
import axios from 'axios';
import SearchList from '../components/SearchList';

export default function Search() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.search.modal);
  const query = useSelector((state) => state.search.query);
  const data = useSelector((state) => state.search.data);
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    if (query.length === 0) {
      dispatch(setData([]));
    }
  }, [query]);
  const searchHandler = (query) => {
    if (query.length === 0) return;
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${query}&type=track&market=ES`,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    axios(options)
      .then((response) => {
        // console.log(response.data.tracks);
        // console.log(JSON.stringify(Object.keys(response.data.tracks.items[0])));
        dispatch(setData(response.data.tracks.items));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const queryHandler = (query) => {
    dispatch(setQuery(query));
    searchHandler(query);
  };

  const clearSearchBar = () => {
    dispatch(setQuery(''));
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          placeholder='Artists, songs, or podcasts'
          placeholderTextColor='#ffffff'
          value={query}
          onChangeText={queryHandler}
        />
        {query.length > 0 && (
          <Pressable onPress={clearSearchBar}>
            <Text style={styles.clear}>clear</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.searchList}>
        <Text styles={styles.clear}>List of search results</Text>
        <SearchList data={data} />
      </View>
    </View>
  );
  ``;
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 22,
    // backgroundColor: '#000000',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  search: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ffffff',
    backgroundColor: '#cccccc',
  },
  searchList: {
    color: '#ffffff',
  },
  clear: {
    color: '#ffffff',
  },
});
