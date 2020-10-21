import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.THEME_COLOR,
        justifyContent: 'center',
        marginTop: 43,
        marginBottom: 20,
        width: 320,
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
    },
    forgot: {
        color: colors.THEME_COLOR,
        textAlign: 'center',
        fontSize: 13,
        marginTop: 8,
    },
    header: {
        color: colors.GREY3_COLOR,
        fontSize: 30,
        paddingLeft: 5,
    },
    header1: {
        color: colors.GREY3_COLOR,
        fontSize: 30,
        paddingLeft: 5,
    },
    headers: {
        color: colors.THEME_COLOR,
        paddingLeft: 5,
        marginBottom: 30,
    },
    login: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE_COLOR,
    },
    textlogin: { position: 'absolute', bottom: 55, color: colors.WHITE_COLOR },
    icon: { position: 'absolute', bottom: 10, right: 10 },
});
