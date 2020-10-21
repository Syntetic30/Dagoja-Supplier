/* eslint-disable indent */
import { StyleSheet } from 'react-native';
// import fonts from '../fonts';
import colors from '../colors';

export default StyleSheet.create({
    touch: {
        borderWidth: 2,
        borderColor: colors.THEME2_COLOR,
      },
      container: {
      backgroundColor: colors.THEME2_COLOR,
      flex: 1,
      height: 60,
      borderBottomWidth: 2,
      borderColor: colors.GREY2_COLOR,
  },
  head: {
      fontSize: 26,
      fontWeight: '500',
      textAlign: 'center',
  },
  flex: {
      flexDirection: 'row',
      marginVertical: 10,
  },
  click: {
    paddingRight: 38,
    paddingTop: 12,
  },
});
