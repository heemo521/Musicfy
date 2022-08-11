import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import SearchListItem from './SearchListItem';

export default function SearchList({ data }) {
  const query = useSelector((state) => state.search.query);
  const renderItem = ({ item }) => <SearchListItem music={item} />;
  return (
    <>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(music) => music.artists.id}
        />
      )}
      {data.length === 0 && query.length > 0 && (
        <Text>No matching results</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
