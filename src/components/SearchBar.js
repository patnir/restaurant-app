import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import babelConfig from "../../babel.config";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
