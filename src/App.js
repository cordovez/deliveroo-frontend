import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Hero from "./Components/Hero";

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
    <div>
      <Hero data={data} />
    </div>
  );
}

export default App;
