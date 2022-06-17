import { useState } from "react";

const SearchParams = () => {
  const [town, setTown] = useState("");
  const [business, setBusiness] = useState("");
  
  return (
    <div className="search-params">
      <form>
        <label htmlFor="town">
          Town
          <input id="town" value={town} placeholder="town" onChange={(e) => setTown(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
