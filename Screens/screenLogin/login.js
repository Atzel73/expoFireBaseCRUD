import React, { useCallback, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button';

import { Formik } from 'formik';

import { setDocName } from '../../firebaseConfig';
import { setDoc } from '../../firebaseConfig';
import { set } from 'firebase/database';

export default function Login() {
  const [userName, setUserName] = useState("");

  const setData = () => {
    setDocName(userName);
    console.log("Enviado con exito", userName)
  }


  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
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
            <TextInput

              placeholder="nombre clave"
              onChangeText={(text) => setUserName({ userName: text })} />
          </View>



          <TouchableOpacity
            style={{
              flex: -1,
              width: "100%",
              textAlignVertical: "top",
              margin: 5,
              padding: 5,
              borderBottomColor: "#FAC3AE",
              borderBottomWidth: 3.5,
              textAlign: 'center'
            }}
            onPress={setData}>
            <Text style={{ color: "#223e4b", fontSize: 16, fontWeight: "bold", marginTop: 16, textAlign: 'center' }}>
              Enviar

            </Text>
          </TouchableOpacity>
          <Button label="Login" onPress={handleSubmit} />

        </View>
      )}
    </Formik>
  );
}
