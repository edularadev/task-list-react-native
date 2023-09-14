import React from 'react';
import {ButtonProps} from '../../interfaces/button';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({title, customStyles, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles?.button]}
      onPress={onPress}
      testID="Button">
      <Text style={[styles.title, customStyles?.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C2DDFC',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginVertical: 10,
    minWidth: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#3E4752',
  },
});

export default Button;
