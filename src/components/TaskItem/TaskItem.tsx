import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskItem = ({description}: {description: string}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
});

export default TaskItem;
