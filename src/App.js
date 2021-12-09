import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-cordovez.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return isLoading ? (
    <p> Data is loading ... </p>
  ) : (
    <div>{data.restaurant.name}</div>
  );
}

export default App;
