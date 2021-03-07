import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    map: {
        height: "90%",
        width: width,
    },
    footer: {
        flex: 1,
        height: "10%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
});