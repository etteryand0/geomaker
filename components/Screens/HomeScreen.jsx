import React from 'react';

import styles from '../styles';
import { 
  View,
} from 'react-native';

import Map from '../Map/Map.jsx';
import Footer from '../Footer.jsx';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <Map />
      <Footer />
    </View>
  );
}