import './App.css';
import axios from "axios";
import Women from "./components/Women"
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/women"

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const[women, setWomen] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setWomen(items);
      }
    });

    return () => (mounted = false)
  }, []);


  return (
    <div className="App">
      <h1>Hello</h1>
      <Women women={women} />
    </div>
  );
}

export default App;
