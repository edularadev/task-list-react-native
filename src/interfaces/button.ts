import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  title: string;
  customStyles?: {
    button?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
  };
  onPress?: () => void;
}
