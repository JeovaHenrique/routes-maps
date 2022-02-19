import React, {useState, useCallback} from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function Maps({ navigation }) {
    
    const [map, setMap] = useState([])
        
        useFocusEffect(
            useCallback(() => {
                async function getData() {
                    
                    const token = 'vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF'
                    
                    const headerOptions = {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }   
                    const response = await fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
                    const map = await response.json()
                    setMap(map)
                }
                getData()
            },[])
        )

    return (
        <View style={styles.container}>
            
            
            <MapView style={styles.map}>     
            <Marker
                coordinate={{
                        latitude: -5.843387691883379,
                        longitude:-35.19941719489336,
                    }}
                title="ECT"
                description="Escola de Ciências e Tecnologia"
            >
            </Marker>
            {
            map.map((mark, id) => 
                <Marker 
                    key={id}
                    coordinate={{
                        latitude: mark.latitude,
                        longitude: mark.longitude,
                    }}
                    title={mark.title}
                    description={mark.description}
                />
                )
            }
            </MapView>
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
});
