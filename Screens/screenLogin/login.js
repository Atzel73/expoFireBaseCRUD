import React, { useCallback, useState } from 'react';

import { Text, View, TouchableOpacity, Image } from 'react-native';

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button';
import { setDocName } from '../../firebaseConfig';




import * as ImagePicker from 'expo-image-picker';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [userNick, setUserNick] = useState("");

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  const setData = async () => {
    setDocName(userName, userNick, image);
    console.log("Enviado con exito", userName, image)
  }


  return (
    <View style={{
      paddingHorizontal: 32,
      marginBottom: 16,
      width: "100%",
      justifyContent: 'center',
      marginTop: "50%",
    }}>

      <TouchableOpacity
        style={{
          flex: -1,
          width: "100%",
          textAlignVertical: "top",
          textAlign: 'center',
          margin: 5,
          padding: 5,
          borderColor: "black",
          borderWidth: 3.5,
          borderRadius: 85,
        }}
        onPress={pickImage}>
        {!image && <Text
          style={{ margin: 5, padding: 5, textAlign: 'center', color: 'black', fontSize: 14, fontStyle: 'italic' }}
        >Selecciona una imagen</Text>}

        {image && <Image
          style={{ flex: -1, width: "100%", height: 200, borderRadius: 85, alignSelf: 'center' }}
          source={{ uri: image }} />}
      </TouchableOpacity>


      <TextInput
        icon="mail"
        placeholder="nombre real"
        onChangeText={(text) => setUserNick(text)} />
      <TextInput
        icon="key"
        placeholder="nombre clave"
        onChangeText={(text) => setUserName(text)} />
      <TouchableOpacity
        style={{
          flex: -1,
          width: "100%",
          textAlignVertical: "top",
          textAlign: 'center',
          margin: 5,
          padding: 5,
          borderColor: "#FAC3AE",
          borderWidth: 3.5,
          borderRadius: 85,

        }}
        onPress={setData}>
        <Text style={{ color: "#223e4b", fontSize: 16, fontWeight: "bold", marginTop: 'auto', textAlign: 'center' }}>
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
{/*
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
          </View>

          


          
          <Button label="Login" onPress={handleSubmit} />

        </View>

        
      )}
    </Formik>
    */}