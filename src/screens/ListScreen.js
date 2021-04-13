import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Ruby ", age: "24" },
    { name: "Jessica", age: "26" },
    { name: "Poy", age: "27" },
    { name: "J", age: "30" },
    { name: "Chelsey", age: "28" },
    { name: "Alexis", age: "25" },
    { name: "Kristen", age: "28" },
    { name: "Chad", age: "45" },
    { name: "Kyle", age: "33" },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}- Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 35,
  },
});

export default ListScreen;
