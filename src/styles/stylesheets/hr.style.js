import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 0,
    },
    line: {
        backgroundColor: colors.GREY_COLOR,
        flex: 1,
        height: 0.5,
        margin: 10,
    },
    text: {
        color: colors.GREY_COLOR,
        fontSize: fonts.FONT_SIZE_13,
    },
});
