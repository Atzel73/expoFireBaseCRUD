import React from 'react';
import { Text, View } from 'react-native';

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button';

import { Formik } from 'formik';



export default function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values.password, values.email)}

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
              onChangeText={handleChange("email")}
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
          <Button label="Login" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
