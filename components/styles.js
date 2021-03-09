import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
    },
    map: {
        height: "100%",
        width: width,
    },
    footer: {
        flexGrow: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    footerWrap: {
        position: 'absolute',
        flex: 1,
        bottom: 30,
        height: 120,
        left: 15,
    },
    routeOption: {
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: 30,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 260,
    },
    routeInfo: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: "60%",
        left: 10,
    },
    routeDescription: {
        fontSize: 12,
    },
    routePreview: {
        width: "40%",
        backgroundColor: 'black',
        height: "100%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    modalWrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        elevation: 5,
    },
    modalInput: {
        borderWidth: 1,
        width: 200,
        height: 30,
        borderRadius: 10,
        textAlign: 'center',
    }
});