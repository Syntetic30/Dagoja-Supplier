import React, { Component } from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import Atoms from '../atoms';

import Styles from '../../styles';

// StyleSheets Component
const {
    InputTextStyle,
    InputTextWithLabelStyle,
} = Styles.StyleSheets;

const {
    InputTextAtom,
    InputTextLabelAtom,
} = Atoms;

class inputTextWithLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelOnFocus: false,
            value: null,
        };
    }

    onFocusHandler() {
        this.setState({
            labelOnFocus: true,
        });
    }

    onBlurHandler() {
        if (this.props.value) {
            this.setState({
                labelOnFocus: true,
            });
        } else {
            this.setState({
                labelOnFocus: false,
            });
        }
    }

    render() {
        const { ...otherProps } = this.props;
        return (
            <View style={InputTextWithLabelStyle.container}>
                <InputTextLabelAtom
                    { ...otherProps }
                    text={this.props.title}
                    style={
                        this.state.labelOnFocus
                            ? InputTextStyle.labelFocus
                            : InputTextStyle.labelNormal
                    }
                />
                <InputTextAtom
                    autoCompleteType='off'
                    type={ this.props.type }
                    onFocus={this.onFocusHandler.bind(this)}
                    onBlur={this.onBlurHandler.bind(this)}
                    { ...otherProps }
                />
            </View>
        );
    }
}

inputTextWithLabel.propTypes = {
    title: propTypes.string,
    type: propTypes.string,
    value: propTypes.string,
};
inputTextWithLabel.defaultProps = {
    title: '',
    type: 'text',
    value: null,
};

export default inputTextWithLabel;
