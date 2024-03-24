import React, {useCallback, useState} from 'react';
import { Text, View } from 'react-native';

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button';

import { Formik } from 'formik';

import { setDoc } from '../../firebaseConfig';

export default function Login() {

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, {resetForm}) => {
        setDoc(values.email, values.password);
        console.log("Formulario enviado correctamente:", values.email, values.password);
        resetForm();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
            Login
          </Text>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText= {handleChange("email")}

              onBlur={handleBlur("email")}
              value={values.email}
              
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              icon="key"
              placeholder="Enter your password"
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("password")}

              onBlur={handleBlur("password")}
              value={values.password}
          
            />
          </View>
          <Button label="Login" onPress={handleSubmit}/>

        </View>
      )}
    </Formik>
  );
}
