import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Incline Village",
          categories: "coffee,restaurants",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("something went wrong: " + error);
    }
  };
  // useEffect(() => {
  //   searchApi("pasta");
  // }, []);

  return [errorMessage, results, searchApi];
};
