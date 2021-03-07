import React, {useState, useEffect} from 'react';

import styles from '../styles';
import * as Location from 'expo-location';

import { 
    View, 
    Text, 
} from 'react-native';

import worldLink from './worldLink';
import calculateRoute from './calculateRoute';

import MapView, { Marker, Callout, Polyline } from 'react-native-maps';

export default function Map() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [points, setPoints] = useState([]);
    const [features, setFeatures] = useState([]);
    
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
      <MapView style={styles.map} 
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0421,
          }}>
            <Marker draggable 
              coordinate={location}
              onDragEnd={(e) => {setLocation(e.nativeEvent.coordinate)}}
            >
              <Callout style={{width:100}} onPress={() => {
                const mapCoordinates = worldLink(location);
                setPoints(mapCoordinates);
                calculateRoute(mapCoordinates).then(setFeatures);
              }}>
                <View>
                  <Text style={{fontSize: 12}}>Нажми на меня!</Text>
                </View>
              </Callout>
            </Marker>
            { 
              points.map((coord, index) => {
                return <Marker key={index} coordinate={coord} />
              }) 
            }
            {
              features.map((polyline, index) => {
                return <Polyline key={index} coordinates={polyline} strokeColor="#F00" fillColor="rgba(255,0,0,0.5)" strokeWidth={8} />
              })
            }
        </MapView>
    );
}