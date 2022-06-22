import { useState, useEffect } from "react";
import Woman from "./Woman";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/women"

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

const BUSINESS = ["Cafeteria", "Tapetes", "Ropa Tipica", "Bolsas", "Comedor",  "Miscelanea", "Tortillas", "Pollos"]

const SearchParams = () => {
  const [town, setTown] = useState("");
  const [business, setBusiness] = useState("");
  const [social, setSocial] = useState("");
  const socials = [];
  const [women, setWomen] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setWomen(items);
      }
    });

    return () => (mounted = false)
  }, []);

//   useEffect(() => {
//     requestWomen();
//   }, []);  // eslint-disable-line react-hooks/exhaustive-deps

//   async function requestWomen() {
//     const res = await fetch (
//       `http://localhost:3000/api/v1/women?business=${business}&town=${town}&social=${social}`
//     );
//   const json = await res.json();

//   setWomen(json.women);
// }
 {
  women.map((woman) => (
    <Woman name={woman.name} business={woman.business} social={woman.social} key={woman.id} />
  ));
}

  return (
    <div className="search-params">
      <form>
        <label htmlFor="town">
          Town
          <input id="town" value={town} placeholder="town" onChange={(e) => setTown(e.target.value)} />
        </label>
        <label htmlFor="business">
          Business
          <select name="business" id="business" value={business} onChange={(e) => {
            setBusiness(e.target.value);
            setSocial("");
          }}
          onBlur={(e) => {
            setBusiness(e.target.value);
            setSocial("");
          }}
          >
            <option />
            {BUSINESS.map((business) => (
      <option key={business} value={business}>
        {business}
              </option >
            ))}
          </select>
        </label>
        <label htmlFor="social">
          Social
          <select disabled={!socials.length} name="social" id="social" value={social} onChange={(e) => {
            setSocial(e.target.value);
          }}
          onBlur={(e) => {
            setSocial(e.target.value);
          }}
          >
            <option />
            {socials.map((social) => (
      <option key={social} value={social}>
        {social}
              </option >
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
