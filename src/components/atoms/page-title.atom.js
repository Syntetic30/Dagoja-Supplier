import React from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

function pageTitle(props) {
    const { ...otherProps } = props;
    return (
        <Text
            { ...otherProps }
        >
            { props.title }
        </Text>
    );
}

pageTitle.propTypes = {
    title: propTypes.string,
};
pageTitle.defaultProps = {
    title: '',
};

export default pageTitle;
