import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

// eslint-disable-next-line import/prefer-default-export
export const stylesGeneral = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.WHITE_COLOR,
        padding: 25,
    },
    pembatas: {
        height: 20,
    },
    orderWrapper: {
        flex: 1,
    },
    mainPageWrapper: {
        flex: 1,
    },
    navigationWrapper: {
        height: 54,
        flexDirection: 'row',
    },
});
