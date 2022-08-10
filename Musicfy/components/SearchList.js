import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import SearchListItem from './SearchListItem';

export default function SearchList({ data }) {
  const renderItem = ({ item }) => <SearchListItem music={item} />;
  return (
    <View>
      {data.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(music) => music.artists.id}
        />
      )}
      {data.length === 0 && <Text>No matching results</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
