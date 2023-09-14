import React from 'react';
import Tasks from '../Tasks';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {render, fireEvent} from '@testing-library/react-native';

describe('Tasks Component', () => {
  it('renders without crashing', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    );

    const newTaskButton = getByText('New Task');
    expect(newTaskButton).toBeDefined();
  });

  it('adds a new task when "Add" button is clicked', () => {
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    );

    const newTaskButton = getByText('New Task');
    fireEvent.press(newTaskButton);

    const input = getByTestId('NewTaskInput');
    fireEvent.changeText(input, 'New Test Task');

    const addButton = getByText('Add');
    fireEvent.press(addButton);

    const state = store.getState();
    expect(state.tasks.value).toContain('New Test Task');
  });
});
