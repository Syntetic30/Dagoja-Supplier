import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: colors.GREY4_COLOR,
    },
    // contentWrapper: {
    //     flexDirection: 'column',
    //     marginLeft: 20,
    //     marginRight: 20,
    // },

    homeSection: {
        backgroundColor: colors.WHITE_COLOR,
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    homeListSection: {
    },
    homeTopContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: -15,
        marginLeft: -15,
    },
    homeInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 10,
    },
    homeImageContainer: {
        marginRight: 15,
        paddingLeft: 0,
    },
    homeImage: {
        height: 35,
        width: 35,
        borderRadius: 35 / 2,
        borderColor: colors.GREY_COLOR,
        borderWidth: 0.5,
    },
    imageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    homeBorder: {
        height: 50,
        width: 320,
        borderColor: colors.GREY5_COLOR,
        borderWidth: 0.5,
    },
    homeProducts: {
        height: 35,
        width: 35,
        borderRadius: 15 / 2,
        borderColor: colors.GREY_COLOR,
        borderWidth: 0.5,
    },
    homeHeaderImage: {
        height: 50,
        width: 150,
        borderRadius: 15 / 2,
        borderColor: colors.WHITE_COLOR,
        borderWidth: 0.5,
    },
    // homeNameContainer: {
    //     paddingTop: 0,
    //     paddingRight: 0,
    //     paddingBottom: 0,
    //     paddingLeft: 0,
    // },
    homeNameText: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.BLACK_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
    homePriceText: {
        fontSize: fonts.FONT_SIZE_11,
        color: colors.THEME_COLOR,
        fontFamily: 'Montserrat-SemiBold',
        marginLeft: 180,
        marginTop: -15,
    },
    homePrice1Text: {
        fontSize: fonts.FONT_SIZE_11,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginTop: 5,
    },
    homeType: {
        fontSize: fonts.FONT_SIZE_10,
        color: colors.GREY4_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginLeft: 200,
        marginTop: -25,
    },
    homeTypeText: {
        fontSize: fonts.FONT_SIZE_11,
        color: colors.GREY4_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginTop: -5,
    },
    homeName: {
        fontSize: fonts.FONT_SIZE_12,
        color: colors.GREY2_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginTop: -15,
    },
    homeName1Text: {
        fontSize: fonts.FONT_SIZE_12,
        color: colors.GREY2_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 240,
        marginTop: -15,

    },
    homeNumberText: {
        fontSize: fonts.FONT_SIZE_16,
        color: colors.BLACK_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginTop: 5,
    },
    homeNumber1Text: {
        fontSize: fonts.FONT_SIZE_16,
        color: colors.BLACK_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 290,
        marginTop: -25,
    },
    homeNumber2Text: {
        fontSize: fonts.FONT_SIZE_12,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginTop: -10,
    },
    homeNumber3Text: {
        fontSize: fonts.FONT_SIZE_12,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 300,
        marginTop: -15,
    },

    homeListTitleContainer: {
        marginTop: 10,
        marginBottom: 5,
    },
    homeListTitleText: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-SemiBold',
    },
    homeListSmallTitleText: {
        fontSize: fonts.FONT_SIZE_10,
        color: colors.GREY2_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginTop: 5,
    },
    homeListSmallText: {
        fontSize: fonts.FONT_SIZE_10,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginTop: 5,
        paddingLeft: 250,
        marginBottom: 10,
    },
    homeListItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 10,
        // paddingBottom: 10,
    },
    homeListWrapper: {
        backgroundColor: colors.WHITE_COLOR,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 25,
        paddingTop: 5,
    },
    homeListItemIconContainer: {
        paddingRight: 15,
    },
    homeListItemTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        // borderColor: colors.GREY_COLOR,
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },
    homeListItemTitleTextContainer: {
        flex: 1,
    },
    // homeListItemTitleText: {
    //     fontSize: fonts.FONT_SIZE_12,
    //     color: colors.BLACK_COLOR,
    //     fontFamily: 'OpenSans-Regular',
    // },

    // versionContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     marginBottom: 10,
    // },
    // versionText: {
    //     fontSize: fonts.FONT_SIZE_11,
    //     color: colors.GREY_COLOR,
    //     fontFamily: 'OpenSans-Regular',
    // },
});
