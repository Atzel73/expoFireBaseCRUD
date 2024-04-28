import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler';

import { ComidaList } from "../objectsAnimals/comida";


export default function Aliments() {
    return (
        
        <ScrollView>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={{
                    fontSize: 22, fontWeight: 'bold', fontStyle: 'italic',
                    flex: 1
                }}>Lista de alimentos</Text>
                {ComidaList.map((item, index) => {
                    return (
                        <View
                            style={{
                                flex: -1, alignItems: 'center', justifyContent: 'center', marginVertical: 10,
                                borderTopWidth: 4, borderTopColor: 'grey'
                            }}
                            key={index}>

                                <View style={{ alignItems: 'center', justifyContent: 'center', flex: -1 }}>
                                    <Image
                                        style={{
                                            width: 250,
                                            height: 250,
                                            borderRadius: 150,
                                            marginVertical: 10,
                                        }}
                                        source={{ uri: item.image }}
                                    />
                                </View>

                            <Text style={{
                                fontSize: 22, fontWeight: 'bold', fontStyle: 'italic',
                            }} >{item.name}</Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}
