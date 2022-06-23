import { useState, useEffect } from "react";
import Woman from "./Woman";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/women";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

const BUSINESS = [
  "Cafeteria",
  "Tapetes",
  "Bordados",
  "Bolsas",
  "Comedor",
  "Miscelanea",
  "Tortillas",
  "Pollos",
];

const SearchParams = () => {
  const [town, setTown] = useState("");
  const [business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [women, setWomen] = useState([]);
  const products = [];

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setWomen(items);
      }
    });

    return () => (mounted = false);
  }, []);

  //   useEffect(() => {
  //     requestWomen();
  //   }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  //   async function requestWomen() {
  //     const res = await fetch (
  //       `http://localhost:3000/api/v1/women?business=${business}&town=${town}&product=${product}`
  //     );
  //   const json = await res.json();

  //   setWomen(json.women);
  // }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="town">
          Town
          <input
            id="town"
            value={town}
            placeholder="town"
            onChange={(e) => setTown(e.target.value)}
          />
        </label>
        <label htmlFor="business">
          Business
          <select
            name="business"
            id="business"
            value={business}
            onChange={(e) => {
              setBusiness(e.target.value);
              setProduct("");
            }}
            onBlur={(e) => {
              setBusiness(e.target.value);
              setProduct("");
            }}
          >
            <option />
            {BUSINESS.map((business) => (
              <option key={business} value={business}>
                {business}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="product">
          Social
          <select
            disabled={!products.length}
            name="product"
            id="product"
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
            onBlur={(e) => {
              setProduct(e.target.value);
            }}
          >
            <option />
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {women.map((woman) => (
        <Woman
          name={woman.name}
          business={woman.business}
          product={woman.product}
          key={woman.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
