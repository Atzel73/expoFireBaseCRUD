import React, { useEffect, useState, Image, StyleSheet } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { db } from "../../firebaseConfig"
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { getBlob } from 'firebase/storage';



export default function Users() {

    const [foto, userFoto] = useState("")
    const [users, setUsersData] = useState([]);
    useEffect(() => {

        const getData = () => {
            const q = query(collection(db, "names"));
            const arrayEmpty = [];

            onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    arrayEmpty.push(doc.data());
                    console.log("Datos: ", doc.data());
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
                    console.log("foto null: ", item.photo)
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

                            {/*  */}
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: 20,
                                    margin: 10,
                                    borderColor: "grey",
                                    backgroundColor: "beige",
                                }}
                            >

                                {!item.photo &&
                                    <Image source={{ uri: 'https://i.pinimg.com/564x/1c/6b/0b/1c6b0bb81b5c7640099f806da394524f.jpg' }}
                                        style={{ width: "50%", height: "50%" }} />}
                            </View>


                            {/* <Image source={{ uri: item.photo }} style={{width:"50%", height:"50%"}}/> */}
                            <Text>{index} Nombre: {item.name}</Text>
                            <Text>{index} Apodo: {item.nick}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>

    );
}


