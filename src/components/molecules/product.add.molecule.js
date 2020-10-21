import React from 'react';
import {
    View, Text, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../styles';
// import Molecules from '.';
// import Assets from '../../assets';

// Atoms Component
import AtomsComponent from '../atoms';

// Atoms Component List
// const { ImageAssets } = Assets;

const {
    TextInputProductAtoms,
} = AtomsComponent;

const {
    ProductAddStyle,
} = Styles.StyleSheets;

// const {
//     HomeInfoMolecule,
// } = Molecules;

export default class product extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <ScrollView>
                <View
                    style={ProductAddStyle.productAddStyle}
                >
                    <View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Upload ID Image</Text>
                            <View
                                style={ProductAddStyle.ImageEdit}
                            >
                                <Image
                                    source={require('../../assets/img/150x150.png')}
                                    style={ProductAddStyle.ImageEdit} />
                                {/* <HomeInfoMolecule
                                    imageSource={ImageAssets.Image150x150}
                                /> */}
                            </View>
                        </View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Product Number</Text>
                            <TextInputProductAtoms placeholder='e.g 123456789'/>
                        </View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Product Name</Text>
                            <TextInputProductAtoms placeholder='e.g Mayonaise'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Quantity(pcs)</Text>
                            <TextInputProductAtoms placeholder='e.g 100'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Product Price(Rp)</Text>
                            <Text style={ProductAddStyle.rp}>Rp</Text>
                            <TextInputProductAtoms text='Rp' placeholder='      e.g 100.000'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Brand</Text>
                            <TextInputProductAtoms placeholder='e.g Samsung'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Warranty</Text>
                            <TextInputProductAtoms placeholder='Choose..'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Warranty Expired Date</Text>
                            <TextInputProductAtoms placeholder='eg 2020-10-01'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Product Status</Text>
                            <TextInputProductAtoms placeholder='Choose..'/></View>
                        <View>
                            <Text
                                style={ProductAddStyle.productEditTitleText}
                            >Description</Text>
                            <TextInputProductAtoms placeholder='e.g This product doesnt have any warranty '/></View>
                    </View>
                    <View
                        style={ProductAddStyle.productEditWrapper}
                    />
                </View>
            </ScrollView>
        );
    }
}
