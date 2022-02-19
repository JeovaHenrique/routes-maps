import React, { useState} from "react"
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, View, TouchableOpacity, StatusBar, Text, TextInput, Dimensions } from "react-native"

export default function MarkerMaps({navigation}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    async function Marcador() {

        const token = 'vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF'

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                latitude,
                longitude,
                title,
                description,
                }),
        }
            
        const response = await fetch("https://mobile.ect.ufrn.br:3003/markers", headerOptions)
        if (response.status === 200) {
            alert('Adicionado com Sucesso!')
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <MapView style={styles.map}
                onPress={(e) => {
                setLatitude(e.nativeEvent.coordinate.latitude)
                setLongitude(e.nativeEvent.coordinate.longitude)
            }}>
            
                <Marker
                    coordinate={{
                        latitude,
                        longitude,
                        }}
                    title={title}
                    description={description}
                >
                </Marker>
             </MapView>
            <View style={styles.addContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Titulo...'
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder= 'Descrição...'
                    value={description}
                    onChangeText={setDescription}  
                />
            <TouchableOpacity
                style={styles.button}
                onPress={() => Marcador()}>
                <Text style={styles.text}>Marcar</Text>
            </TouchableOpacity>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    addContainer: {
        height: '40%',
        backgroundColor: '#fff',
        alignItems: 'center',   
        justifyContent: 'center',
        margin: 20,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 40,
        borderRadius: 5,     
    },

    button: {
        padding: 10,
        width: 120,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    },

    text: {
        fontSize: 15,    
        color: 'white',
        alignSelf: 'center',
        
    },

    input: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        paddingLeft: 10,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
