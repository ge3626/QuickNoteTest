import React from 'react';

const User = (props) => {
  return (
    <div className="w-full p-1 flex">
        <h1>{props.name}</h1>
        <span>:</span>
        <p className="ml-2">{props.text}</p>
    </div>
  )
}

export default User;