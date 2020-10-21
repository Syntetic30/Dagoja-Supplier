import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    message: {
        backgroundColor: colors.WHITE_COLOR,
        padding: 5,
    },
    height: {
        height: 1000,
        backgroundColor: colors.WHITE_COLOR,
    },
    columns: {
        flexDirection: 'column',
    },
    container: {
        height: 70,
        marginHorizontal: 2,
        paddingHorizontal: 25,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: colors.GREY1_COLOR,
    },
    txt: {
        fontWeight: 'bold',
        paddingBottom: 3,
        color: colors.GREY4_COLOR,
        fontSize: 15,
    },
    txtdesk: {
        paddingTop: 3,
        color: colors.GREY2_COLOR,
        fontSize: 13,
        marginLeft: 0,
    },
});
