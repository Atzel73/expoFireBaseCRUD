import React from 'react';
import { Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Animals from './screensAnimals/animals';

const Stack = createBottomTabNavigator();

export default function HomeAnimal() {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Mascotas" component={Animals} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}