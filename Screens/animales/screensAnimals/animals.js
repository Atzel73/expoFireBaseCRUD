import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from "react-native";


import { useNavigation } from "@react-navigation/native";



import { mascotasList } from "../objectsAnimals/mascotas";


export default function Animals() {
const navigation = useNavigation();



    return (
        <ScrollView>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontSize: 22, fontWeight: 'bold', fontStyle: 'italic',
                    flex: 1
                }}>Lista de animales</Text>
                {mascotasList.map((item, index) => {
                    return (
                        <View
                            style={{
                                flex: -1, alignItems: 'center', justifyContent: 'center', marginVertical: 10,
                                borderTopWidth: 4, borderTopColor: 'grey'
                            }}
                            key={index}>

                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: -1 }}
                            onPress={() =>
                                navigation.navigate("Listas", {
                                  data: item,
                                })
                              }>
                                <Image
                                    style={{
                                        width: 250,
                                        height: 250,
                                        borderRadius: 150,
                                        marginVertical: 10,
                                    }}
                                    source={{ uri: item.image }}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 22, fontWeight: 'bold', fontStyle: 'italic',
                            }} >{item.name}</Text>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    borderRadius: 150,
                                    backgroundColor: 'black',
                                    margin: 15,

                                }}
                                
                                onPress={() => Alert.alert(item.sonido)}>
                                <Text
                                    style={{
                                        color: 'white', fontSize: 20, padding: 10,
                                        fontStyle: 'italic'
                                    }}
                                >Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}