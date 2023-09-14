import React from 'react';
import ListItem from './ListItem';
import {render} from '@testing-library/react-native';

describe('ListItem', () => {
  test('Renders component with image', () => {
    const listItemData = {
      name: 'John Doe',
      avatarUrl: 'https://example.com/avatar.jpg',
    };

    const {getByText, getByTestId} = render(<ListItem {...listItemData} />);

    const nameElement = getByText(listItemData.name);
    const avatarImage = getByTestId('avatar-image');

    expect(nameElement).toBeTruthy();
    expect(avatarImage).toBeTruthy();
  });

  test('Renders component without image', () => {
    const listItemData = {
      name: 'Jane Smith',
    };

    const {getByText, queryByTestId} = render(<ListItem {...listItemData} />);

    const nameElement = getByText(listItemData.name);
    const avatarImage = queryByTestId('empty-avatar-image');

    expect(nameElement).toBeTruthy();
    expect(avatarImage).toBeTruthy();
  });
});
