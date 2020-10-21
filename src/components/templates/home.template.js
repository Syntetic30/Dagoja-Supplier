import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';
import Assets from '../../assets';

// import Atoms from '../atoms';
import Molecules from '../molecules';
// import Organisms from '../organisms';

const { ImageAssets } = Assets;
const { HomeStyle } = Styles.StyleSheets;

const {
    HomeInfoMolecule,
    HomeTopMolecule,
    // HomeListItemMolecule,
} = Molecules;

function Home() {
    return (
        <View>
            <View style={HomeStyle.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={HomeStyle.imageHeader}
                        />
                        {/* Home Section */}
                        <View
                            style={HomeStyle.homeSection}
                        >
                            <HomeTopMolecule
                                name='Available Product'
                                name1='Product Sold'
                                number='86'
                                number1='100'
                            />
                            <HomeTopMolecule
                                name='Out of Stock'
                                name1='Dropshippers'
                                number2='20'
                                number3='90'
                            />
                        </View>

                        {/* Options Section */}
                        <View style={HomeStyle.homeListSection}>
                            <View
                                style={HomeStyle.homeListWrapper}
                            >
                                <View
                                    style={HomeStyle.homeListTitleContainer}
                                >
                                    <Text
                                        style={HomeStyle.homeListTitleText}
                                    >Order Request</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallTitleText}
                                    >Please Confirm Order Request Immediately</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallText}
                                    >Lihat Semua</Text>
                                </View>
                                <View
                                    style={HomeStyle.homeListContainer}
                                >
                                    <HomeInfoMolecule
                                        fullName='Mayonaise'
                                        price='Rp 3.000.000'
                                        accountType='x100'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Batik Keris'
                                        price='Rp 5.700.000'
                                        accountType='x190'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Buah Merah'
                                        price='   Rp 300.000'
                                        accountType='x10'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                </View>
                            </View>

                            <View
                                style={HomeStyle.homeListWrapper}
                            >
                                <View
                                    style={HomeStyle.homeListTitleContainer}
                                >
                                    <Text
                                        style={HomeStyle.homeListTitleText}
                                    >Top 5 Dropshippers</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallTitleText}
                                    >Your Top Performance Dropshippers</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallText}
                                    >Lihat Semua</Text>
                                </View>
                                <View
                                    style={HomeStyle.homeListContainer}
                                >
                                    <HomeInfoMolecule
                                        fullName='Patricia Justin R.'
                                        accountType='30 Products Sold'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Amaliah Safitri'
                                        accountType='28 Products Sold'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Noval Christian'
                                        accountType='22 Products Sold'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Randy Nur'
                                        accountType='18 Products Sold'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Nouvel Izza'
                                        accountType='10 Products Sold'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                </View>
                            </View>

                            <View
                                style={HomeStyle.homeListWrapper}
                            >
                                <View
                                    style={HomeStyle.homeListTitleContainer}
                                >
                                    <Text
                                        style={HomeStyle.homeListTitleText}
                                    >New Products</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallTitleText}
                                    >Your Last Entry Products</Text>
                                    <Text
                                        style={HomeStyle.homeListSmallText}
                                    >Lihat Semua</Text>
                                </View>
                                <View
                                    style={HomeStyle.homeListContainer}
                                >
                                    <HomeInfoMolecule
                                        fullName='Mayonaise'
                                        price1='Rp 30.000'
                                        type='Qty 40'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Hair Conditioner'
                                        price1='Rp 40.000'
                                        type='Qty 60'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Dji Phantom Drone'
                                        price1='Rp 5.500.000'
                                        type='Qty 10'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Batik Keris'
                                        price1='Rp 12.500.00'
                                        type='Qty 20'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                    <HomeInfoMolecule
                                        fullName='Buah Merah'
                                        price1='Rp 30.000'
                                        type='Qty 10'
                                        imageSource={ImageAssets.Image150x150}
                                    />
                                </View>
                            </View>
                        </View>

                        {/* Version Section */}
                        {/* <View
                            style={HomeStyle.versionContainer}
                        >
                            <Text style={HomeStyle.versionText}>
                                Version 1.0.0
                            </Text>
                        </View> */}

                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

Home.propTypes = {
    navigation: propTypes.object,
};
Home.defaultProps = {
    navigation: null,
};

export default Home;
