// import { DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
    contentWrapper: {
        marginBottom: 15,
    },
    dateWrapper: {
        padding: 15,
        borderColor: colors.GREY_COLOR,
        borderWidth: 1,
    },
    dateText: {
        fontSize: 13,
    },
    dateSerialNumber: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    productWrapper: {
        padding: 15,
        flexDirection: 'row',
        borderLeftColor: colors.GREY_COLOR,
        borderLeftWidth: 1,
        borderRightColor: colors.GREY_COLOR,
        borderRightWidth: 1,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    productTextWrapper: {
        flex: 3,
    },
    ProductTextName: {
        fontSize: 18,
        marginBottom: 6,
    },
    productTextSerialNumber: {
        fontSize: 12,
        color: colors.GREY4_COLOR,
        marginBottom: 6,
    },
    productTextPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.THEME_COLOR,
    },
    totalWrapper: {
        justifyContent: 'center',
        flex: 1,
    },
    totalTextWrapper: {
        textAlign: 'right',
    },
    statusWrapper: {
        backgroundColor: colors.THEME1_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
    statusText: {
        color: colors.GREY4_COLOR,
        fontSize: 13,
    },
});
