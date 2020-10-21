import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
    },
    detailContainer: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
    },
    headerContainer: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
    },
    headerImageContainer: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        height: 120,
    },
    headerImage: {
        flex: 1,
        width: 'auto',
        height: 'auto',
    },
    headerIconContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
    },
    iconContainer: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginTop: -40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.GREY4_COLOR,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    headerTitleContainer: {
        flex: 1,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 0,
        paddingLeft: 10,
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: fonts.FONT_SIZE_28,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Regular',
        marginBottom: 5,
    },
    headerDate: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
    bodyContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.WHITE_COLOR,
        height: windowHeight * 0.4,
    },
    footerContainer: {
        backgroundColor: colors.THEME_COLOR,
    },
    body: {
        flex: 1,
        marginRight: 5,
        marginLeft: 5,
        // height: windowHeight + 100,
        // width: windowWidth,
        // paddingBottom: '100%',
    },
});
