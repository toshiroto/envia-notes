import React from "react";
import Woman from "./Woman";

const Results = ({ women }) => {
  return (
    <div>
      {!women.length ? (
        <h1>No Women Found</h1>
      ) : (
        women.map((women) => {
          return (
            <Woman
              business={women.business}
              key={women.id}
              name={women.name}
              product={women.product}
              images={women.images}
              town={women.town}
              id={women.id}
            />
          );
        })
      ) }
    </div>
  );
};
export default Results;
