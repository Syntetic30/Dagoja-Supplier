import React, { Component } from 'react';
import { View, Alert, Text } from 'react-native';

// Atoms Component
import AtomsComponent from '../atoms';

// Molecules Component
import MoleculesComponent from '../molecules';

// Organisms Component
import OrganismsComponent from '../organisms';

// Atoms Component List
const {
    ButtonAtom,
    // InputTextAtom,
    PageTitleAtom,
} = AtomsComponent;

// Molecules Component List
const {
    InputTextWithLabelMolecule,
} = MoleculesComponent;

// Organisms Component List
const {
    FormLoginOrganism,
} = OrganismsComponent;

// Event Handler
const onPressHandler = () => {
    Alert.alert('Hai, you clicked me');
};

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: {
                emailValue: null,
                passwordValue: null,
            },
        };
    }

    render() {
        return (
            <View>
                <FormLoginOrganism />
                {/* <PageTitleAtom
                    firstTitle='Create'
                    secondTitle='Account'
                />
                <InputTextWithLabelMolecule
                    type='text'
                    title='Email'
                    onChangeText={(value) => this.setState({
                        emailValue: value,
                    })}
                    value={this.state.emailValue}
                />
                <InputTextWithLabelMolecule
                    type='password'
                    title='Password'
                    onChangeText={(value) => this.setState({
                        passwordValue: value,
                    })}
                    value={this.state.passwordValue}
                />
                <ButtonAtom
                    text='Click Me'
                    type='next'
                    onPress={onPressHandler}
                />
                <Text>
                    {this.state.emailValue}
                </Text>
                <Text>
                    {this.state.passwordValue}
                </Text> */}
            </View>
        );
    }
}

export default Hello;
