// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
    View, Text, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';
import Image150x150 from '../../assets/img/150x150.png';

// Atoms Component
import AtomsComponent from '../atoms';

// Atoms Component List
const {
    TextInputProductEditAtom,
} = AtomsComponent;

const {
    ProfileStyle,
} = Styles.StyleSheets;

function Add() {
    return (
        <ScrollView>
            <View>
                <View>
                    <View><Text style={ProfileStyle.profileEditTitleText}>Email</Text>
                        <TextInputProductEditAtom />
                    </View>
                    <View>
                        <Text style={ProfileStyle.profileEditTitleText}>Full Name</Text>
                        <TextInputProductEditAtom /></View>
                    <View>
                        <Text style={ProfileStyle.profileEditTitleText}>Phone Number</Text>
                        <TextInputProductEditAtom /></View>
                    <View>
                        <Text style={ProfileStyle.profileEditTitleText}>Birth of Date</Text>
                        <TextInputProductEditAtom /></View>
                    <View>
                        <Text style={ProfileStyle.profileEditTitleText}>ID Number</Text>
                        <TextInputProductEditAtom /></View>
                    <View>
                        <Text style={ProfileStyle.profileEditTitleText}>Upload ID Image</Text>
                        <Image style={ProfileStyle.ImageEdit} source={Image150x150} />
                    </View>
                </View>
                <View
                    style={ProfileStyle.productEditWrapper}
                />
            </View>
        </ScrollView>
    );
}

export default Add;
