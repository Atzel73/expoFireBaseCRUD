import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Screens/screenLogin/login';
import Users from './Screens/screenLogin/users';

const Stack = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registrar usuario" component={Login} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
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
