import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'; // Agrega StyleSheet a tus importaciones

import TextInput from '../../Components/TextInput/textInput';
import Button from '../../Components/Button/button'; // Cambia buttonImage por Button
import ImageViewer from '../../Components/ImageViewer/imageViewer';


import PlaceholderImage from '../../assets/icon.png';


import { Formik } from 'formik';
import { setDoc } from '../../firebaseConfig';

import * as ImagePicker from 'expo-image-picker';

export default function Login() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };
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
          </View>
          <Button label="Login" onPress={handleSubmit} />

          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
                
              />
              
            </View>
          </View>

        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
