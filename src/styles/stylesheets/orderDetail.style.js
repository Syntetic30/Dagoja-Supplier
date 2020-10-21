import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
    serialNumberWrapper: {
        borderTopWidth: 1,
        borderTopColor: colors.GREY_COLOR,
        backgroundColor: colors.WHITE_COLOR,
        paddingTop: 20,
        paddingLeft: 25,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    serialNumberText: {
        color: colors.GREY4_COLOR,
        fontSize: 15,
        marginBottom: 17,
    },
    serialNumberDate: {
        color: colors.GREY4_COLOR,
        fontSize: 15,
        marginBottom: 17,
    },
    serialNumberStatusText: {
        marginRight: 25,
        color: colors.THEME2_COLOR,
    },
    productWrapper: {
        padding: 15,
        flexDirection: 'row',
        borderLeftColor: colors.GREY_COLOR,
        borderLeftWidth: 1,
        borderRightColor: colors.GREY_COLOR,
        borderRightWidth: 1,
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: 8,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
    },
    productTextWrapper: {
    },
    productTextLeftWrapper: {
        flex: 3,
    },
    ProductTextName: {
        fontSize: 18,
        marginBottom: 6,
        color: colors.GREY4_COLOR,
        fontWeight: 'bold',
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
    wrapper: {
        marginTop: 15,
        padding: 15,
        borderLeftColor: colors.GREY_COLOR,
        borderLeftWidth: 1,
        borderRightColor: colors.GREY_COLOR,
        borderRightWidth: 1,
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: 8,
    },
    pickUpItemWrapper: {
        flexDirection: 'row',
    },
    pickUpTitle: {
        color: colors.GREY4_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
    },
    pickUpTextLeftWrapper: {
        flex: 1,
    },
    pickUpTextLeft: {
        color: colors.GREY4_COLOR,
        marginBottom: 5,
        fontSize: 13,
    },
    pickUpTextRightWrapper: {
        flex: 2,
    },
    pickUpTextRight: {
        color: colors.GREY4_COLOR,
        marginBottom: 5,
        textAlign: 'right',
    },
    paymentTitle: {
        color: colors.GREY4_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15,
    },
    paymentItemWrapper: {
        flexDirection: 'row',
    },
    paymentTextLeftWrapper: {
        flex: 1,
    },
    paymentTextLeft: {
        color: colors.GREY4_COLOR,
        marginBottom: 5,
        fontSize: 13,
    },
    paymentTextRightWrapper: {
        flex: 2,
    },
    paymentTextRight: {
        color: colors.GREY4_COLOR,
        marginBottom: 5,
        textAlign: 'right',
    },
    statusWrapper: {
        marginTop: 15,
        padding: 15,
        borderLeftColor: colors.GREY_COLOR,
        borderLeftWidth: 1,
        borderRightColor: colors.GREY_COLOR,
        borderRightWidth: 1,
        backgroundColor: colors.WHITE_COLOR,
        borderRadius: 8,
    },
    statusTextWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        color: colors.THEME2_COLOR,
    },
});
