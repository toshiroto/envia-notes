import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useProductList from "./useProductList";
import Results from "./Results";

 const API_URL = "http://localhost:3000/api/v1/women";

function getAPIData() {
  return axios.get(API_URL).then(response => response.data);
}

const BUSINESS = [
  "Cafeteria",
  "Tapetes",
  "Bordados",
  "Bolsas",
  "Comedor",
  "Miscelanea",
  "Tortillas",
  "Pollos"
];

const SearchParams = () => {
  const [town, setTown] = useState("");
  const [business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [women, setWomen] = useState([]);
  const [products] = useProductList(business);

  useEffect(() => {
    requestWomen();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  let mounted = true;
  async function requestWomen() {
    getAPIData(
      `http://localhost:3000/api/v1/women?business=${business}&town=${town}&product=${product}`
    ).then((items) => {
      if (mounted) {
        setWomen(items); //setwomen changed for requestWomen
      }
    });
  }

  //return () => (mounted = false);

  //}, []);

  // useEffect(() => {
  //   requestWomen();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // async function requestWomen() {
  //   const res = await fetch(
  //     `http://localhost:3000/api/v1/women?business=${business}&town=${town}&product=${product}`
  //   );
  //   const json = await res.json();

  //   setWomen(json.women);
  // }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestWomen();
        }}
      >
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
          Product
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
      <Results women={women}/>
    </div>
  );
};
export default SearchParams;
