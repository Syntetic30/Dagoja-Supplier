import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import Styles from '../../styles';

const {
    InboxDetailStyle,
} = Styles.StyleSheets;

function InboxDetailBody(props) {
    return (
        <View style={InboxDetailStyle.bodyContainer}>
            <WebView
                automaticallyAdjustContentInsets={true}
                style={InboxDetailStyle.body}
                source={{ html: props.content }}
                // javaScriptEnabled={true}
                // domStorageEnabled={true}
                // decelerationRate="normal"
                // startInLoadingState={true}
                scalesPageToFit={false}
                // contentMode='mobile'
                // scrollEnabled={false}
            />
        </View>
    );
}

InboxDetailBody.propTypes = {
    content: propTypes.any,
};
InboxDetailBody.defaultProps = {
    content: null,
};

export default InboxDetailBody;
