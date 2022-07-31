import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="App">
      <h1>SV API_axios</h1>
      {data.map((item) => (
        <li key={item.id}>{item.url}</li>
      ))}
    </div>
  );
}
