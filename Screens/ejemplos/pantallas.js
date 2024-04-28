import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


export default function Pantallas({ route }) {
    console.log("Route: ", route.params)
    return (
        <View>
            <Image />
            <Text>
            route.params.testo
            </Text>
        </View>
    );
}