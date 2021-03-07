import React from 'react';

import styles from '../styles';
import { 
  View, Text, 
  Button
} from 'react-native';

import Map from '../Map/Map.jsx';

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.home}>
        <Map />
      </View>
    );
  }