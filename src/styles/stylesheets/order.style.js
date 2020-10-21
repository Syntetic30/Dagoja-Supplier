import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
    searchWrapper: {
        height: 65,
        backgroundColor: colors.WHITE_COLOR,
        borderTopColor: colors.GREY1_COLOR,
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    searchBarWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.GREY1_COLOR,
        borderRadius: 10,
        height: 40,
    },
    searchIcon: {
        marginTop: 11,
        marginRight: 10,
        marginLeft: 15,
    },
    textInputSearchBar: {
        flex: 1,
    },
    mainContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 600,
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundText: {
        color: colors.GREY2_COLOR,
        marginTop: 20,
    },
    devStatusWrapper: {
        backgroundColor: colors.GREY1_COLOR,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.GREY_COLOR,
    },
    devStatusTextWrapper: {
        flexDirection: 'row',
        padding: 20,
    },
    devStatusText: {
        backgroundColor: colors.WHITE_COLOR,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        color: colors.GREY4_COLOR,
        marginHorizontal: 7,
    },
    devStatusTextActive: {
        backgroundColor: colors.WHITE_COLOR,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        color: colors.THEME2_COLOR,
        marginHorizontal: 7,
    },
    statusWrapper: {
        height: 54,
        backgroundColor: colors.WHITE_COLOR,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderBottomColor: colors.GREY_COLOR,
    },
    statusTextWrapper: {
        backgroundColor: colors.WHITE_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusText: {
        color: colors.THEME2_COLOR,
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.THEME2_COLOR,
    },
    headerImage: {
        width: 35,
        height: 35,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        backgroundColor: colors.WHITE_COLOR,
        padding: 30,
    },
    tabImage: {
        width: 26,
        height: 26,
    },
    tabWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.WHITE_COLOR,
    },
    tabText: {
        fontSize: 10,
        color: colors.GREY4_COLOR,
        marginTop: 4,
    },
    tabText2: {
        color: colors.THEME2_COLOR,
        fontSize: 10,
        marginTop: 4,
    },
});
