import React from 'react';
import {IListItem} from '../../interfaces/listItem';
import {View, Text, Image, StyleSheet} from 'react-native';

const ListItem = ({name, avatarUrl}: IListItem) => {
  return (
    <View style={styles.itemContainer}>
      {avatarUrl ? (
        <Image
          source={{uri: avatarUrl}}
          style={styles.avatar}
          testID="avatar-image"
        />
      ) : (
        <View
          style={[styles.avatar, styles.avatarEmpty]}
          testID="empty-avatar-image"
        />
      )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarEmpty: {
    borderColor: '#32CD32',
    borderWidth: 2,
  },
  name: {
    marginLeft: 16,
    fontSize: 16,
    color: 'black',
  },
});

export default ListItem;
