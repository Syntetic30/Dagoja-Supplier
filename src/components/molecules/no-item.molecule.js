import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
// import Animation from 'lottie-react-native';
import Styles from '../../styles';
import Assets from '../../assets';

const { HikerManColourIllustration } = Assets.IllustrationAssets;

const {
    GeneralStyle,
} = Styles.StyleSheets;

function NoItem(props) {
    return (
        <View style={GeneralStyle.noItemContainer}>
            <View style={GeneralStyle.noItemImage}>
                <props.image/>
            </View>
            {/* <Animation
                style={GeneralStyle.noItemImage}
                autoPlay={true}
                loop={true}
                source={EmptyAndLostIllustration}
            /> */}
            <Text style={GeneralStyle.noItemText}>{props.title}</Text>
        </View>
    );
}

NoItem.propTypes = {
    image: propTypes.any,
    title: propTypes.string,
};
NoItem.defaultProps = {
    image: HikerManColourIllustration,
    title: 'No Item',
};

export default NoItem;
