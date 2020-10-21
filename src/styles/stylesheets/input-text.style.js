import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    labelNormal: {
        position: 'absolute',
        left: 0,
        top: 13,
        fontSize: fonts.FONT_SIZE_16,
        color: colors.GREY2_COLOR,
    },
    labelFocus: {
        position: 'absolute',
        left: 0,
        top: -20,
        fontSize: fonts.FONT_SIZE_16,
        color: colors.GREY3_COLOR,
    },
    inputText: {
        // flex: 1,
        // height: 50,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 5,
        paddingLeft: 3,
        // marginBottom: 30,
        position: 'relative',
        borderBottomColor: colors.THEME_COLOR,
        borderBottomWidth: 0.5,
    },
    inputTextPassword: {
        // flex: 1,
        // height: 50,
        paddingTop: 10,
        paddingRight: 40,
        paddingBottom: 5,
        paddingLeft: 3,
        // marginBottom: 30,
        position: 'relative',
        borderBottomColor: colors.THEME_COLOR,
        borderBottomWidth: 0.5,
    },
    inputTextPasswordContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'relative',
    },
    inputTextPasswordIcon: {
        bottom: 10,
        padding: 10,
        position: 'absolute',
        right: 10,
    },
});
