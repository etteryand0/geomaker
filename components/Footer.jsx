import React, { useState } from 'react';

import styles from './styles';
import { 
  View, 
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function Footer(props) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <RouteOption title="Кружка" description="Простенький рисунок кружки" src={require("../assets/routePreview/cup.jpeg")}
        onPress={() => {props.setRoute(0); props.setPoints([])}} />
      <RouteOption title="Чороон" description="Национальная якутская посуда" src={require("../assets/routePreview/choroon.jpeg")}
        onPress={() => {props.setRoute(1); props.setPoints([])}} />
      <RouteOption title="Треугольник" description="Обычный треугольник" src={require("../assets/routePreview/triangle.jpeg")}
        onPress={() => {props.setRoute(2); props.setPoints([])}} />
      <RouteOption title="Свой рисунок" description="Удерживайте точку на карте, чтобы нарисовать свой маршрут" src={require("../assets/routePreview/custom.jpeg")}
        onPress={() => {props.setRoute(3); props.setPoints([])}} />
    </ScrollView>
  );
}

function RouteOption(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.routeOption}>
      <Image source={props.src}  style={styles.routePreview} />
      <View style={styles.routeInfo}>
        <Text style={styles.routeDescription}>{props.title}</Text>
        <Text style={styles.routeDescription}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}