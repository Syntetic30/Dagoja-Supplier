import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btnSocial: {
        alignItems: 'center',
        height: 40,
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
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
    },

    btnSocialTextContainer: {
        alignItems: 'center',
        flex: 6,
    },
    btnSocialTextFacebook: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.WHITE_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
    btnSocialTextGoogle: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
});
