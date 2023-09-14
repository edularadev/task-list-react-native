import React from 'react';
import {Text} from 'react-native';
import CustomModal from './CustomModal';
import {render} from '@testing-library/react-native';

describe('CustomModal', () => {
  test('Correctly renders the component', () => {
    const {getByTestId} = render(
      <CustomModal modalVisible={true} setModalVisible={() => {}}>
        <Text testID="modal-content">Modal Content</Text>
      </CustomModal>,
    );

    const modalContent = getByTestId('modal-content');
    expect(modalContent).toBeTruthy();
  });

  test('Hide modal when modalVisible is false', () => {
    const {queryByTestId} = render(
      <CustomModal modalVisible={false} setModalVisible={() => {}}>
        <Text testID="modal-content">Modal Content</Text>
      </CustomModal>,
    );

    const modalContent = queryByTestId('modal-content');
    expect(modalContent).toBeNull();
  });
});
