import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Abhinav");
  const clickHandler = () => {
    setName("Chotu");
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <View style={styles.buttonConatainer}>
        <Button title="Update name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonConatainer: {
    marginTop: 20,
  },
});
