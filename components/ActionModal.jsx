import React from 'react';

import styles from './styles';
import { 
  View, Modal, Text, TextInput, Button
} from 'react-native';

export default function ActionModal(props) {
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modal}
        onRequestClose={() => props.setModal(false)}
      >
        <View style={styles.modalWrap}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Настройте метровый коэффициент</Text>
            <TextInput style={styles.modalInput} value={props.metersCoefficient} onChangeText={text => props.setMetersCoefficient(text.replace(/[^0-9]/g, ''))} />
            <Button style={styles.button} title="Готово" onPress={() => props.setModal(false)} />
          </View>
        </View>
      </Modal>
  );
}