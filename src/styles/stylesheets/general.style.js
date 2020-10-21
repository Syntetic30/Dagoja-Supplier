import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    textLink: {
        color: colors.BLUE_COLOR,
    },
    hr: {
        borderColor: colors.GREY_COLOR,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    noItemContainer: {
        backgroundColor: colors.WHITE_COLOR,
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noItemImage: {
        width: windowWidth * 0.55,
        height: windowHeight * 0.3,
    },
    noItemText: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
    pageHeader: {
        backgroundColor: colors.WHITE_COLOR,
        shadowOpacity: 0,
        elevation: 0,
    },
    pageHeaderTitle: {
        fontWeight: 'normal',
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-Medium',
    },
    myShopIconContainer: {
        backgroundColor: colors.THEME_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        position: 'absolute',
        top: -20,
        borderColor: colors.WHITE_COLOR,
        borderWidth: 3,
    },
    text: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
});
