import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 80,
    },
    text: {
        fontSize: fonts.FONT_SIZE_14,
        color: colors.THEME_COLOR,
    },
});
