import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 6,
        color: colors.GREY2_COLOR,
    },
    txt2: {
        flex: 1,
        color: colors.GREY2_COLOR,
    },
    txt1: {
        fontSize: 15,
        alignSelf: 'stretch',
        color: colors.GREY2_COLOR,
    },
    container: {
        marginHorizontal: 40,
        padding: 5,
        marginBottom: 30,
    },
    height: {
        height: 1000,
        backgroundColor: colors.WHITE_COLOR,
    },
    info: {
        borderWidth: 1,
        borderRadius: 20,
        position: 'absolute',
        left: 170,
        top: 150,
    },
});
