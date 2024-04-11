import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { db } from "../../firebaseConfig"
import { collection, query, onSnapshot } from 'firebase/firestore';




export default function Users() {

    const [users, setUsersData] = useState([]);

    useEffect(() => {

        const getData = () => {
            const q = query(collection(db, "users"));
            const arrayEmpty = [];

            const sendData = onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    arrayEmpty.push(doc.data());
                    console.log("Datos: ", doc.data().email);
                });
                setUsersData(arrayEmpty);
            });
        };
        getData();
    }, []);

    return (
        <View>
            {users.map((item, index) => {
                return(
                    <View key={index}>
                        <Text>{index}Email: {item.email}</Text>
                    </View>
                );
            })}
        </View>
    );
}



