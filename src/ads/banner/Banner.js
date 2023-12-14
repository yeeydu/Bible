import { View, Text, Platform } from 'react-native'
import React from 'react'
//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


export default function Banner() {

    //const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-9193627783332519~7262351262';
    //const adUnitId =  __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-3940256099942544/6300978111';

    return (
        <View>
            {/* <BannerAd
                unitId={
                    Platform.OS === 'ios' ? 'ca-app-pub-3940256099942544/6300978111' : 'ca-app-pub-3940256099942544/6300978111'
                }
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            /> */}
        </View>
    )
}