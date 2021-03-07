import React, {useState, useEffect} from 'react';

import styles from '../styles';
import * as Location from 'expo-location';

import { 
    View, 
    Text, 
    Alert
} from 'react-native';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [points, setPoints] = useState([]);
    const [geojson, setGeojson] = useState({
      name: "GPSparrow",
      type: "FeatureCollection",
      features: []
    });
    
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        location = location.coords;
        setLocation(location);
      })();
    }, []);
  
    let text = "Waiting...";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    } else {
      return (<Text style={{flex:1,alignSelf:'center'}}>{text}</Text>);
    }

    return (
      <View>
        
      </View>
    );
}