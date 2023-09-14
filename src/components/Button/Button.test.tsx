import React from 'react';
import Button from './Button';
import {render, fireEvent} from '@testing-library/react-native';

test('Correctly renders the component', () => {
  const {getByText} = render(<Button title="Mi Botón" />);
  const buttonElement = getByText('Mi Botón');
  expect(buttonElement).toBeTruthy();
});

test('Fire OnPress function', () => {
  const mockOnPress = jest.fn();
  const {getByText} = render(<Button title="Mi Botón" onPress={mockOnPress} />);
  const buttonElement = getByText('Mi Botón');

  fireEvent.press(buttonElement);

  expect(mockOnPress).toHaveBeenCalledTimes(1);
});
