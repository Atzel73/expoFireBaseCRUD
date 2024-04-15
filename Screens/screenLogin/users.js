import React, { useEffect, useState, Image, StyleSheet } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { db } from "../../firebaseConfig"
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { getBlob } from 'firebase/storage';



export default function Users() {

    const [users, setUsersData] = useState([]);
    useEffect(() => {

        const getData = () => {
            const q = query(collection(db, "names"));
            const arrayEmpty = [];

            onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    arrayEmpty.push(doc.data());
                    console.log("Datos: ", doc.data().photo);
                });
                setUsersData(arrayEmpty);
            });
        };
        getData();
    }, []);



    return (

        <View>
            <ScrollView>
                {users.map((item, index) => {

                    return (
                        <View key={index} style={{
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 20,
                            margin: 10,
                            borderWidth: 3,
                            borderRadius: 15,
                            borderColor: "grey",
                            backgroundColor: "beige",
                        }}>

                            <Text>{index} Nombre: {item.name}</Text>
                            <Text>{index} Apodo: {item.nick}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>

    );
}


