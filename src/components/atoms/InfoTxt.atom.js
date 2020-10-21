import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import propTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import style from '../../styles';
import colors from '../../styles/colors';

const { InfoStyle } = style.StyleSheets;
const Loading = () => <ActivityIndicator animating color={colors.THEME2_COLOR} size='large' />;

function InfoTextAtom(props) {
    return (
        <View>
            <WebView style={InfoStyle.txt1}
                startInLoadingState={true}
                renderLoading = {Loading}
                automaticallyAdjustContentInsets={true}
                source={{ html: props.content }}
                scalesPageToFit={false}
            />
        </View>
    );
}

InfoTextAtom.propTypes = {
    content: propTypes.any,
};
InfoTextAtom.defaultProps = {
    content: null,
};

export default InfoTextAtom;
