import React from 'react';
import {
    View, Text, TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';

// Atoms Component
import AtomsComponent from '../atoms';

// Atoms Component List
const {
    TextInputAtoms,
} = AtomsComponent;

const {
    LoginStyle,
} = Styles.StyleSheets;

export default class login extends React.Component {
    constructor() {
        super();

        this.state = {
            hidePassword: true,
        };
    }

      setPasswordVisibility = () => {
          this.setState({ hidePassword: !this.state.hidePassword });
      }

      render() {
          return (
              <ScrollView>
                  <View>
                      <View>
                          <Text style={LoginStyle.header}>Login</Text>
                          <Text style={LoginStyle.header1}>Account</Text>
                          <Text style={LoginStyle.headers}>Supplier</Text>
                      </View>
                      <View>
                          <View>
                              <TextInputAtoms
                                  placeholder='Email..'/>
                          </View>
                          <View style={{ position: 'relative' }}>
                              <TextInputAtoms
                                  secureTextEntry={this.state.hidePassword}
                                  autoCapitalize='none'
                                  placeholder='Password..'/>
                              <TouchableOpacity style={LoginStyle.icon} activeOpacity={0.8} onPress={this.setPasswordVisibility} >
                                  <FontAwesomeIcon icon={(this.state.hidePassword) ? faEyeSlash : faEye} size={20} />
                                  {/* <Image source={(this.state.hidePassword) ? require('../../assets/img/eye-off.png') : require('../../assets/img/eye.png')} style={{
                                  resizeMode: 'contain',
                              }}/> */}
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View></ScrollView>
          );
      }
}
