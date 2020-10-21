import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
    },
    contentWrapper: {
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
    },
    subTitleContainer: {
        marginBottom: 30,
    },
    subTitle: {
        fontSize: fonts.FONT_SIZE_15,
        fontFamily: 'OpenSans-SemiBold',
        color: colors.GREY3_COLOR,
    },
    description: {
        fontSize: fonts.FONT_SIZE_15,
        color: colors.GREY_COLOR,
        fontFamily: 'OpenSans-Medium',
    },
});
