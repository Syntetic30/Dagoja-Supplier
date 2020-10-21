import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    productAddStyle: {
        backgroundColor: colors.WHITE_COLOR,
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 0.4,
        borderBottomColor: colors.GREY2_COLOR,
        width: 320,
        left: 18,
    },
    productEditTitleText: {
        fontSize: fonts.FONT_SIZE_13,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Regular',
        left: 20,
        top: 15,
    },
    ImageEdit: {
        left: 10, height: 100, width: 100, marginTop: 10,
    },
    textlogin: {
        position: 'absolute', bottom: 20, color: colors.WHITE_COLOR, alignSelf: 'center',
    },
    rp: {
        position: 'absolute', color: colors.BLACK_COLOR, left: 20, top: 38,
    },
    button: {
        backgroundColor: colors.THEME_COLOR,
        justifyContent: 'center',
        width: 320,
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        left: 19,
        marginTop: 10,
        marginBottom: 10,
    },
});
