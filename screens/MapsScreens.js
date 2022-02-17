import React from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native'

import Maps from '../components/Maps'


export default function MapsScreens({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <Maps/> 
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('AddMarker')}
            >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    button: {
        padding: 10,
        width: 60,
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        margin: 20,
        alignSelf: 'flex-end',
        fontSize: 30,
    },

    text: {
        fontSize: 30,    
        color: 'white',
        alignSelf: 'center',
        
    }
});
