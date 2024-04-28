import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from 'expo-image-picker';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';


const END_POSITION = 200;

export default function Ani() {

    // const onLeft = useSharedValue(true);
    // const position = useSharedValue(0);

    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const pan = Gesture.Pan();
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
                    onPress={pickImage}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' }}>
                        Seleccionar Imagen
                    </Text>
                </TouchableOpacity>

                {image &&
                    <>
                        <GestureDetector gesture={pan}>

                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200, borderRadius: 90, borderWidth: 2, margin: 10, padding: 10 }}
                            />

                        </GestureDetector>

                        <TextInput
                            value={text}
                            onChangeText={(text) => setText(text)}
                            style={{ textAlign: 'center', borderBottomWidth: 2, borderBottomColor: 'violet', padding: 10, margin: 10 }}
                            placeholder="Introduzca un nombre" />

                        <Text>Texto: {text}</Text>
                        <TouchableOpacity
                            onPress={() => setText("")}
                            style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' }}>
                                Reiniciar
                            </Text>
                        </TouchableOpacity>
                    </>
                }
                {image &&
                    <Text>
                        Has seleccionado una imagen
                    </Text>}


                {image && text &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate("pantallas", {
                            testo: text,
                            img: image
                        })}
                        style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic' }}>
                            Siguiente paso
                        </Text>
                    </TouchableOpacity>}


                {!image &&
                    <Text>
                        No has seleccionado ninguna imagen
                    </Text>}
            </View>
        </GestureHandlerRootView>
    );
}