import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [errorMessage, results, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
      <ResultsList
        results={filterResultsByPrice("$")}
        title={"Cost Effective"}
      />
      <ResultsList results={filterResultsByPrice("$$")} title={"Pricey"} />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title={"You'll dine like kings"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});
export default SearchScreen;
