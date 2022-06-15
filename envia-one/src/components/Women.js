import React from 'react'

function Women(props) {
  return (
    <div>
    <h1>These Women is from the API</h1>
    {props.women.map((woman) => {
      return (
      <div key={woman.id}>
      <h2>{woman.name}</h2>
      <p>{woman.business}</p>
      <p>{woman.telephone}</p>
      <p>{woman.email}</p>
      <p>{woman.address}</p>
      <p>{woman.social}</p>
      <p>{woman.body}</p>
      </div>
      )
    })}
</div>
)
}

export default Women;
