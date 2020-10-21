/* eslint-disable indent */
import React from 'react';
import { Image, View } from 'react-native';
import styles from '../../styles';
import empty from '../../assets';

const { Empty } = empty.ImageAssets;
const { GeneralStyle } = styles.StyleSheets;

const ImageAtom = () => (
  <View>
      <Image style={GeneralStyle.noItemImage} source={Empty} />
  </View>
  );

export default ImageAtom;
