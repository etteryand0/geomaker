import React, {useState} from 'react';

import styles from '../styles';
import { 
  View
} from 'react-native';

import Map from '../Map/Map.jsx';
import Footer from '../Footer.jsx';
import ActionModal from '../ActionModal.jsx';

export default function HomeScreen() {
  const [route, setRoute] = useState(0);
  const [modal, setModal] = useState(false);
  const [metersCoefficient, setMetersCoefficient] = useState('300');
  const [points, setPoints] = useState([]);

  return (
    <View style={styles.home}>
      <Map route={route} setModal={setModal} metersCoefficient={metersCoefficient}
        points={points} setPoints={setPoints}
      />
      <ActionModal modal={modal} setModal={setModal} 
        metersCoefficient={metersCoefficient} setMetersCoefficient={setMetersCoefficient}
      />
      <View style={styles.footerWrap}>
          <Footer setRoute={setRoute} setPoints={setPoints} />
      </View>
    </View>
  );
}