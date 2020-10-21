import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 0.4,
        borderBottomColor: colors.GREY2_COLOR,
        width: 320,
        left: 18,
    },
    profileEditTitleText: {
        fontSize: fonts.FONT_SIZE_13,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Regular',
        left: 20,
        top: 15,
    },
    profileListTitleText: {
        fontSize: fonts.FONT_SIZE_13,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Regular',
        left: 5,
    },
    profileListWrapper: {
        backgroundColor: colors.WHITE_COLOR,
        marginBottom: 10,
        paddingBottom: 5,
        width: 320,
        left: 18,
    },
    icon: {
        position: 'absolute', bottom: 10, right: 20,
    },
    profileSection: {
        backgroundColor: colors.WHITE_COLOR,
        width: 320,
        left: 18,
        marginBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    profileListSection: {
    },
    profileEditBottomWrapper: {
        backgroundColor: '#F9F9F9F9',
        paddingBottom: 3,
        marginLeft: 1,
        height: 60,
    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        height: 45,
        left: -20,
    },
    profileImageContainer: {
        marginRight: 15,
        paddingLeft: 0,
    },
    profileNameContainer: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
    },
    profileNameText: {
        fontSize: 14,
        color: colors.GREY3_COLOR,
        fontWeight: 'bold',
        marginTop: -20,
        // fontFamily: 'Montserrat-SemiBold',
    },
    profileTypeText: {
        fontSize: 12,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
    profileTypeText1: {
        fontSize: 12,
        marginTop: 25,
        left: -131,
        height: 20,
        color: colors.THEME_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
    profileListTitleContainer: {
        marginTop: 10,
        marginBottom: 5,
    },
    profileListItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -7,
        // paddingTop: 10,
        // paddingBottom: 10,
    },
    profileEditWrapper: {
        backgroundColor: '#F9F9F9F9',
        paddingBottom: 3,
        height: 10,
    },
    profileListItemIconContainer: {
        paddingRight: 15,
        left: 10,
    },
    profileListItemTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    profileListItemTitleTextContainer: {
        flex: 1,
    },
    profileListItemTitleText: {
        fontSize: fonts.FONT_SIZE_12,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Regular',
        left: 5,
    },
    // Profile edit
    ImageEdit: {
        left: 20, height: 100, width: 100, marginTop: 20, marginBottom: 20,
    },
    text: {
        position: 'absolute', color: colors.WHITE_COLOR, alignSelf: 'center',
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
