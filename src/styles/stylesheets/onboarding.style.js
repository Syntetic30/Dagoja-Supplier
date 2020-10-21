import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: colors.GREY2_COLOR,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        paddingTop: 30,
        color: colors.GREY_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
    },
    flex: {
        flex: 1,
    },
    next: {
        color: colors.THEME_COLOR,
        paddingRight: 5,
        paddingTop: 9,
        fontSize: 18,
    },
    done: {
        color: colors.THEME_COLOR,
        paddingRight: 5,
        paddingTop: 9,
        fontSize: 18,
    },
    image: {
        marginTop: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '45%',
        width: '85%',
    },
    dot: {
        backgroundColor: colors.THEME_COLOR,
        width: 10,
    },
});
