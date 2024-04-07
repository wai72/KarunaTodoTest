
import {Platform, Dimensions} from 'react-native';

const isIOS = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

export const configs = {
  width,
  height,
  isIOS,
  
  colors: {
    // gray scale
    primary: '#6a1b9a',
    primaryLight: '#9c4dcc',
    primaryTint: '#38006b',
    white: '#FFFFFF',
    lightGray2: '#DFDFE1',
    lightGray: '#ABABB0',
    green: '#091',
    black: '#000000',
  },
};
