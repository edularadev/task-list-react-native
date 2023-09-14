import React, {useState} from 'react';
import Button from '../components/Button/Button';
import TaskItem from '../components/TaskItem/TaskItem';
import {setTasks} from '../redux/reducers/tasksSlice';
import {useAppSelector, useAppDispatch} from '../redux/hooks';
import CustomModal from '../components/CustomModal/CustomModal';
import {View, FlatList, TextInput, StyleSheet} from 'react-native';

const Tasks = () => {
  const dispatch = useAppDispatch();
  const [taskText, setTaskText] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const tasksData = useAppSelector(state => state.tasks.value);

  const addTask = () => {
    if (!taskText.length) {
      return;
    }
    const newTasks = [...tasksData, taskText];
    dispatch(setTasks(newTasks));
    setOpenModal(false);
  };

  return (
    <View>
      <CustomModal setModalVisible={setOpenModal} modalVisible={openModal}>
        <TextInput
          style={styles.input}
          onChangeText={setTaskText}
          value={taskText}
          placeholder="New Task Name"
          placeholderTextColor="#3E4752"
          testID="NewTaskInput"
        />
        <Button title="Add" onPress={addTask} />
      </CustomModal>
      <Button title="New Task" onPress={() => setOpenModal(true)} />
      <FlatList
        data={tasksData}
        renderItem={({item}) => <TaskItem description={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    color: '#3E4752',
  },
});

export default Tasks;
