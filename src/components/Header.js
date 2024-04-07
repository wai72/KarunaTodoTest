
//import liraries
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style/HeaderStyles.css';


Ionicons.loadFont();
const ICON_SIZE = 26;

// create a component
const Header = ({style, onPressHeader}) => {
  return (
    <View style={styles.container}>
        <Text style={{alignSelf: 'center', justifyContent: 'center'}}> My Todo List </Text>
    </View>
  );
};

//make this component available to the app
export default Header;
