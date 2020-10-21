/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import React from 'react';
import propTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from '../../styles';

const { TxtEmptyStyle } = styles.StyleSheets;

const TxtEmptyAtom = (props) => {
  return (
    <View>
      <Text style={TxtEmptyStyle.txt}>{props.Empty}</Text>
    </View>
  );
};

TxtEmptyAtom.propTypes = {
  Empty: propTypes.string,
};
TxtEmptyAtom.defaultProps = {
  Empty: '',
};

export default TxtEmptyAtom;
