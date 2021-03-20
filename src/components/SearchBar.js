import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import babelConfig from "../../babel.config";
const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} />
      <TextInput placeholder="search" style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FOEEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});

export default SearchBar;
