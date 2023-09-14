import React from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getContacts} from '../api/getContacts';
import {useQuery} from '@tanstack/react-query';
import ListItem from '../components/ListItem/ListItem';

const List = () => {
  const {isLoading, isFetching, isError, data} = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  if (isLoading || isFetching) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem name={item.name} avatarUrl={item.avatar} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default List;
