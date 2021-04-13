import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>hi there!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      {/* <TouchableOpacity
        onPress={() => {
          // console.log("list pressed");
          props.navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}

      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List Demo"
      />

      <Button
        onPress={() => {
          navigation.navigate("Images");
        }}
        title="Go to Images"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
