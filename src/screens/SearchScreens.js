import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "Incline Village",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("something went wrong: " + error);
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      ></SearchBar>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
