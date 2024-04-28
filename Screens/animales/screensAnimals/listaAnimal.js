import React, { useState } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";



export default function ListaAnimal({ route }) {

    const [animals, setAnimals] = useState({
        name: route.params.data.name,
        photo: route.params.data.name,
        wallpaper: route.params.data.wall,
        history: route.params.data.historia,
    })

    return (

        <View style={{
            flex: 1
        }}>
            <Text style={{
                fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center'
            }}>
                {animals.name}
            </Text>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 150,
                        marginVertical: 10,
                    }}
                    source={{ uri: animals.wallpaper }} />
            </View>
            <View style={{ borderWidth: 4, borderColor: 'purple', borderRadius: 90,  padding: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', padding: 10 }}>
                    {animals.history}
                </Text>
            </View>

        </View>
    );

}