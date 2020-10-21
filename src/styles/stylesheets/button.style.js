import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        // marginBottom: 10,
    },
    btnText: {
        color: colors.WHITE_COLOR,
        fontSize: fonts.FONT_SIZE_16,
        fontFamily: 'OpenSans-SemiBold',
    },
    btnRegister: {
        backgroundColor: colors.ORANGE_COLOR,
    },
    btnTextRegister: {
        color: colors.WHITE_COLOR,
        fontSize: fonts.FONT_SIZE_16,
        fontFamily: 'OpenSans-SemiBold',
    },
    btnLogin: {
        backgroundColor: colors.THEME_COLOR,
        justifyContent: 'center',
        marginTop: 43,
        marginBottom: 20,
        width: 320,
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
    },
    btnTextLogin: {
        color: colors.WHITE_COLOR,
        fontSize: fonts.FONT_SIZE_16,
        fontFamily: 'OpenSans-SemiBold',
    },
    btnNext: {
        backgroundColor: colors.THEME_COLOR,
    },
    btnTextNext: {
        color: colors.WHITE_COLOR,
        fontSize: fonts.FONT_SIZE_16,
        fontFamily: 'OpenSans-SemiBold',
    },

    // Social Btn
    btnSocialGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btnSocial: {
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 0.5,
        flexDirection: 'row',
        marginBottom: 10,
    },
    btnSocialFacebook: {
        backgroundColor: colors.BLUE2_COLOR,
        borderColor: colors.BLUE2_COLOR,
    },
    btnSocialGoogle: {
        backgroundColor: colors.WHITE_COLOR,
        borderColor: colors.GREY_COLOR,
    },

    btnSocialIcon: {
        alignItems: 'center',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    btnSocialIconFacebook: {
        backgroundColor: colors.BLUE3_COLOR,
    },
    btnSocialIconGoogle: {
        backgroundColor: colors.WHITE_COLOR,
        borderColor: colors.GREY_COLOR,
        borderRightWidth: 0.5,
    },

    btnSocialTextContainer: {
        alignItems: 'center',
        flex: 6,
    },
    btnSocialTextFacebook: {
        color: colors.WHITE_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
    btnSocialTextGoogle: {
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
});
