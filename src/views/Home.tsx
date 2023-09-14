import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../interfaces/home';

const Home = () => {
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Button title="Tasks" onPress={() => navigate('Tasks')} />
      <Button title="List" onPress={() => navigate('List')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Home;
