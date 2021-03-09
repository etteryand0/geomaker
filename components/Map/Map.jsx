import React, {useState, useEffect} from 'react';

import styles from '../styles';
import * as Location from 'expo-location';

import { 
    View, 
    Text, 
    Alert
} from 'react-native';

import worldLink from './worldLink';
import calculateRoute from './calculateRoute';

import MapView, { Marker, Callout, Polyline } from 'react-native-maps';

export default function Map(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
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
          onLongPress={(e) => { 
          e.persist()
          if (props.points.length === 0) {
            props.setPoints([e.nativeEvent.coordinate])
          } else {
            props.setPoints([...props.points, e.nativeEvent.coordinate])
          } }}
          onDoublePress={() => {
            const mapCoordinates = worldLink(location, props.route, props.metersCoefficient);
            let p = props.points.concat(mapCoordinates);
            if (props.points.length === 0) {
              props.setPoints(mapCoordinates)
            } else {
              props.setPoints(() => p);
            }
            calculateRoute(p).then(setFeatures);
          }}
          onPress={(e) => setLocation(e.nativeEvent.coordinate)}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0421,
          }}>
            <Marker draggable 
              coordinate={location}
              onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
              onPress={() => props.setModal(true)}
            >
              {/* <Callout style={{width:100}} onPress={() => {
                const mapCoordinates = worldLink(location);
                props.setPoints(mapCoordinates);
                calculateRoute(mapCoordinates).then(setFeatures);
              }}>
                <View>
                  <Text style={{fontSize: 12}}>Нажми на меня!</Text>
                </View>
              </Callout> */}
            </Marker>
            { 
              props.points.map((coord, index) => {
                if (index === 0 ) {
                  return null;
                }
                return <Marker key={index} coordinate={coord} pinColor="blue" />
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