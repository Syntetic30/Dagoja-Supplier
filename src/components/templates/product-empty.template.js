/* eslint-disable max-len */
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
        <View style={ProductStyle.container}>
            <View
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
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
                        number='0'
                        number1='0'
                        number2='0'
                    />
                </View>

                {/* Delivery Status */}
                <ScrollView>
                    <View style={ProductStyle.devStatusWrapper}>
                        <View style={ProductStyle.devStatusTextWrapper}>
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
                        </View>
                    </View>

                    {/* Main Content */}
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
                                imageSource={ImageAssets.Empty}
                                label='No Item Found'
                            />
                            {/* <Text
                                style={{ color: colors.GREY4_COLOR, marginTop: 2 }}>No Order</Text> */}
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
