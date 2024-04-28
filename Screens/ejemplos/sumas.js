import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, Alert, TextInput } from "react-native";
export default function Sumas() {
    const [count, setCount] = useState(0);
    const [num, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function Sumar() {


    }

   
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}>
                Resultado   
            </Text>

            <TouchableOpacity
                style={{ borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
            >
                <Text
                    style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}
                >
                    Sumar
                </Text>
            </TouchableOpacity>




            <TouchableOpacity
                style={{ borderWidth: 2, borderRadius: 90, borderColor: 'violet', padding: 10, margin: 10 }}
                onPress={() => setCount("")}>
                <Text
                    style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', fontStyle: 'italic', marginVertical: 10 }}
                >
                    Vaciar
                </Text>
            </TouchableOpacity>



            {/* <View>
                <TextInput
                    value={num}
                    onChangeText={(text) => setNum1(text)}
                    style={{ textAlign: 'center', borderBottomWidth: 2, borderBottomColor: 'violet', padding: 10, margin: 10 }}
                    placeholder="Introduzca un numero" />
                <TextInput
                    value={num2}
                    onChangeText={(text) => setNum2(text)}
                    style={{ textAlign: 'center', borderBottomWidth: 2, borderBottomColor: 'violet', padding: 10, margin: 10 }}
                    placeholder="Introduzca un numero" />
            </View> */}

        </View>
    );
}
// setCount(a => a + 1);
// const n1 = Number(num);
// const n2 = Number(num2);
// setCount(n1 + n2);

