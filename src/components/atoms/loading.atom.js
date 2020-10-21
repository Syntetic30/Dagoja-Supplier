import React from 'react';
import { ActivityIndicator } from 'react-native';

function loading(props) {
    const { ...otherProps } = props;
    return (
        <ActivityIndicator
            {...otherProps}
        />
    );
}

export default loading;
