import React from 'react';
import './style.css';
import { useState } from 'react';

// single usestate hook - two input fields
let username, password;
// let obj ={
//   username, password
// };

export default function App() {
  const [obj, setObj] = useState({ username: '', password: '' });
  console.log(obj);
  
  const handleObj=(event)=>{
    const name=event.target.name
    const value=event.target.value

    setObj((prev)=>{
      return {...prev, [name]:value}
    })
  }
  
  return (
    <div>
      <input
        name="username"
        type="text"
        onChange={handleObj}
        placeholder={username}
      />

      <br />
      <input
        name="password"
        type="text"
        onChange={handleObj}
        placeholder={password}
      />
    </div>
  );
}
