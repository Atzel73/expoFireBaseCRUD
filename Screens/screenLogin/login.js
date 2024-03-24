import React from 'react';
import { Text, View } from 'react-native';

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button';

import { useFormik } from 'formik';



const { handleChange, handleSubmit, values } = useFormik({
  initialValues: { email: '', password: '' },
  onSubmit: values =>
    alert(`Email: ${values.email}, Password: ${values.password}`)
});

export default function Login() {
  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
          Login
        </Text>
        <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={handleChange('email')}
          />
        </View>
        <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
          <TextInput
            icon="key"
            placeholder="Enter your password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="go"
            returnKeyLabel="go"
            onChangeText={handleChange('password')}

          />
        </View>
        <Button label="Login" onPress={handleSubmit} />
      </View>
    );
  }