import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
    },
    text: {
        color: colors.GREY_COLOR,
        fontSize: fonts.FONT_SIZE_14,
    },
});
