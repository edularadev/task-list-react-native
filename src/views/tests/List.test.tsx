import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import List from '../List';

jest.mock('@tanstack/react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    isFetching: false,
    isError: false,
    data: [
      {id: 1, name: 'John', avatar: 'https://example.com/john.jpg'},
      {id: 2, name: 'Alice', avatar: 'https://example.com/alice.jpg'},
    ],
  }),
}));

describe('List', () => {
  test('Correctly renders the contact list', async () => {
    const {getByText} = render(<List />);

    await waitFor(() => {
      const john = getByText('John');
      const alice = getByText('Alice');

      expect(john).toBeTruthy();
      expect(alice).toBeTruthy();
    });
  });
});
