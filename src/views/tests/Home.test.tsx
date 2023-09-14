import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import Home from '../Home';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Home', () => {
  test('Correctly renders the component', () => {
    const {getByText} = render(<Home />);
    const tasksButton = getByText('Tasks');
    const listButton = getByText('List');

    expect(tasksButton).toBeTruthy();
    expect(listButton).toBeTruthy();
  });

  test('Navigate to Tasks View when button is pressed', async () => {
    const {getByText} = render(<Home />);
    const tasksButton = getByText('Tasks');

    expect(tasksButton).toBeTruthy();
    fireEvent.press(tasksButton);
    const newScreen = await screen.findByText('Tasks');
    expect(newScreen).toBeTruthy();
  });

  test('Navigate to List View when button is pressed', async () => {
    const {getByText} = render(<Home />);
    const listButton = getByText('List');

    expect(listButton).toBeTruthy();
    fireEvent.press(listButton);

    const newScreen = await screen.findByText('List');
    expect(newScreen).toBeTruthy();
  });
});
