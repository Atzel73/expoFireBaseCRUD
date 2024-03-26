
import React from "react";
import { Image, StyleSheet } from "react-native";
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
  }

  const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain'
    }
  });
  