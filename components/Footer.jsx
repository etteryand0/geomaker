import React from 'react';

import styles from './styles';
import { 
  View, 
  Text
} from 'react-native';

export default function Header({ navigation }) {
    return (
      <View style={styles.footer}>
        <View style={{backgroundColor:"gray", width:50, height: 50}} />
        <View style={{backgroundColor:"gray", width:50, height: 50}} />
        <View style={{backgroundColor:"gray", width:50, height: 50}} />
      </View>
    );
  }