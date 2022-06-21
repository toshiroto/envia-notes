import { useState } from "react";

const BUSINESS = ["Cafeteria", "Tapetes", "Ropa Tipica", "Bolsas", "Comedor",  "Miscelanea", "Tortillas", "Pollos"]

const SearchParams = () => {
  const [town, setTown] = useState("");
  const [business, setBusiness] = useState("");
  const [social, setSocial] = useState("");
  const socials = [];

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
