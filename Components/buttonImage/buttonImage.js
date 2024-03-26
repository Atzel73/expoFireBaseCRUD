import React from "react";

import { View, Pressable } from "react-native";

export default function Button({ label, theme, onPress }) {
  // ...rest of the code remains same
  if (theme === "primary") {
    return (
      <View>
        {/* ...rest of the code remains same */}
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        ></Pressable>
      </View>
    );
  }
}
  