import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
    View, Text, TouchableOpacity, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';

// Atoms Component
import AtomsComponent from '../atoms';

// Atoms Component List
const {
    TextInputProfileEditAtoms,
} = AtomsComponent;

const {
    ProfileStyle,
} = Styles.StyleSheets;

export default class profile extends React.Component {
    constructor() {
        super();

        this.state = {
            hidePassword: true,
            hidePassword1: true,
        };
    }

      setPasswordVisibility = () => {
          this.setState({ hidePassword: !this.state.hidePassword });
      }

      setPasswordVisibility1 = () => {
          this.setState({ hidePassword1: !this.state.hidePassword1 });
      }

      render() {
          return (
              <ScrollView>
                  <View>
                      <View>
                          <View><Text style={ProfileStyle.profileEditTitleText}>Email</Text>
                              <TextInputProfileEditAtoms placeholder='admin@example.com'/>
                          </View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Password</Text>
                              <TextInputProfileEditAtoms
                                  secureTextEntry={this.state.hidePassword}
                                  autoCapitalize='none'
                                  placeholder='********'/>
                              <TouchableOpacity style={ProfileStyle.icon} activeOpacity={0.8} onPress={this.setPasswordVisibility} >
                                  <FontAwesomeIcon icon={(this.state.hidePassword) ? faEyeSlash : faEye} size={20} />
                              </TouchableOpacity></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Confirmation Password</Text>
                              <TextInputProfileEditAtoms
                                  secureTextEntry={this.state.hidePassword1}
                                  autoCapitalize='none'
                                  placeholder='********'/>
                              <TouchableOpacity style={ProfileStyle.icon} activeOpacity={0.8} onPress={this.setPasswordVisibility1} >
                                  <FontAwesomeIcon icon={(this.state.hidePassword1) ? faEyeSlash : faEye} size={20} />
                              </TouchableOpacity></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Full Name</Text>
                              <TextInputProfileEditAtoms placeholder='John Doe'/></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Phone Number</Text>
                              <TextInputProfileEditAtoms placeholder='081212345678'/></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Birth of Date</Text>
                              <TextInputProfileEditAtoms placeholder='09 Januari 1990' /></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>ID Number</Text>
                              <TextInputProfileEditAtoms placeholder='32751239789000' /></View>
                          <View>
                              <Text style={ProfileStyle.profileEditTitleText}>Upload ID Image</Text>
                              <Image source={require('../../assets/img/150x150.png')} style={ProfileStyle.ImageEdit} />
                          </View>
                      </View>
                      <View
                          style={ProfileStyle.profileEditWrapper}
                      />
                  </View>
              </ScrollView>
          );
      }
}
