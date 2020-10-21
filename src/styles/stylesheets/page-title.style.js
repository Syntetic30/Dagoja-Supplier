import { StyleSheet } from 'react-native';
import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        marginBottom: 50,
    },
    title: {
        fontSize: fonts.FONT_SIZE_30,
        color: colors.GREY3_COLOR,
        fontFamily: 'OpenSans-Medium',
    },
});
