import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';
import Assets from '../../assets';

// import Atoms from '../atoms';
import Molecules from '../molecules';
// import Organisms from '../organisms';

const { ImageAssets } = Assets;
const { ProductStyle } = Styles.StyleSheets;

const {
    ProductInfoMolecule,
    ProductTopMolecule,
    // ProductListItemMolecule,
} = Molecules;

function Product() {
    return (
        <View>
            <View style={ProductStyle.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        {/* Product Section */}
                        <View
                            style={ProductStyle.productSection}
                        >
                            <ProductTopMolecule
                                name='Total Product'
                                name1='Available Product'
                                name2='Out of Stock'
                            />
                            <ProductTopMolecule
                                number='86'
                                number1='30'
                                number2='100'
                            />
                        </View>

                        {/* Delivery Status */}
                        <View style={ProductStyle.devStatusWrapper}>
                            <View style={ProductStyle.devStatusTextWrapper}>
                                {/* <ProductListItemMolecule> */}
                                <TouchableOpacity>
                                    <Text
                                        onPress={() => Alert.alert('You Have Nothing')}
                                        style={ProductStyle.devStatusText}
                                    >All Product</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text
                                        onPress={() => Alert.alert('You Have Nothing')}
                                        style={ProductStyle.devStatusText}
                                    >Out of Stock</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text
                                        onPress={() => Alert.alert('You Have Nothing')}
                                        style={ProductStyle.devStatusText}
                                    >Inactive</Text>
                                </TouchableOpacity>
                                {/* </ProductListItemMolecule> */}
                            </View>
                        </View>
                        <View
                            style={ProductStyle.productListWrapper}
                        >
                            <View
                                style={ProductStyle.productListTitleContainer}
                            />
                            <View
                                style={ProductStyle.productListContainer}
                            >
                                <ProductInfoMolecule
                                    fullName='Mayonaise'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='12 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='iPhone 6'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='09 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Samsung Galaxy Tab S'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='07 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Samsung S20'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='07 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Laptop'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='29 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Dji Phantom Drone'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='29 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Hair Conditioner'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='07 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                                <ProductInfoMolecule
                                    fullName='Batik Keris'
                                    accountType='DGJ-SUP001-12398093843'
                                    date='12 September 2020'
                                    price='Rp 30.000'
                                    type='400 pcs'
                                    imageSource={ImageAssets.Image150x150}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

Product.propTypes = {
    navigation: propTypes.object,
};
Product.defaultProps = {
    navigation: null,
};

export default Product;
