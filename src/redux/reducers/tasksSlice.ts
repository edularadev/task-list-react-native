import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TasksState {
  value: string[];
}

const initialState: TasksState = {
  value: ['Task Element 1', 'Task Element 2'],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
  },
});

export const {setTasks} = tasksSlice.actions;

export default tasksSlice.reducer;
