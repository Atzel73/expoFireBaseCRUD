import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';


import Login from './Screens/screenLogin/login';
import Users from './Screens/screenLogin/users';




import Animals from './Screens/animales/screensAnimals/animals';
import ListaAnimal from './Screens/animales/screensAnimals/listaAnimal';
import Aliments from './Screens/animales/screensAnimals/aliments';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function AdminGroup() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Mascotas" component={Animals} />
      <Stack.Screen name="Listas" component={ListaAnimal} />
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Animales') {
              iconName = focused ? 'pets' : 'snippet-folder';
            } else if (route.name === 'Alimentos') {
              iconName = focused ? 'pets' : 'snippet-folder';
            }

            return <MaterialIcons name={iconName} size={24} color="black" />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Animales" component={AdminGroup} />
        <Tab.Screen name="Alimentos" component={Aliments} />
      </Tab.Navigator>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="Listas" component={ListaAnimal} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    bottom: -200,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
