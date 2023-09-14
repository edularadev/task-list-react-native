import React from 'react';
import TaskItem from './TaskItem';
import {render} from '@testing-library/react-native';

describe('TaskItem', () => {
  test('Renders component correctly', () => {
    const description = 'Example Task';

    const {getByText} = render(<TaskItem description={description} />);

    const descriptionElement = getByText(description);

    expect(descriptionElement).toBeTruthy();
  });
});
