import React, { useState} from "react"
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, View, TouchableOpacity, StatusBar, Text, TextInput, Dimensions } from "react-native"

import MarkerMaps from '../components/MarkerMaps'

export default function AddMarker({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <MarkerMaps/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
