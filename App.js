import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Abhinav", age: "21", key: "1" },
    { name: "Kumar", age: "24", key: "2" },
    { name: "Mario", age: "21", key: "3" },
    { name: "Bhola", age: "21", key: "4" },
    { name: "Dhola", age: "21", key: "5" },
    { name: "Xhola", age: "21", key: "6" },
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>
              {item.name} is {item.age} old.
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name} is {item.age} old.
              </Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 20,
  },
});
