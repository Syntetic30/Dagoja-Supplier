import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
    },
    listContainer: {
        flex: 1,
        // borderColor: colors.BLACK_COLOR,
        // borderWidth: 1,
        paddingBottom: 5,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 20,
        paddingLeft: 20,
        // backgroundColor: colors.GREY2_COLOR,
    },
    itemIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        backgroundColor: colors.THEME_COLOR,
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
    },
    itemTitleText: {
        fontSize: fonts.FONT_SIZE_15,
        color: colors.BLACK_COLOR,
        fontFamily: 'OpenSans-SemiBold',
        marginBottom: 8,
    },
    itemSubtitleText: {
        fontSize: fonts.FONT_SIZE_13,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-Regular',
    },
});
