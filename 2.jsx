import React from 'react';
import './style.css';

// codeevolution , tech thapa

const name = ['name1', 'name2', 'name3', 'name4', 'name5'];

export default function App() {
  const deleteDiv = (idx) => {
    let unique = event.target.name; // unique id of div
    // removeChild()
    event.target.remove();
    console.log(idx);
  };
  return (
    <div>
      {name.map((ele, idx) => {
        return (
          <div name={`${idx}`} onClick={() => deleteDiv(idx)}>
            Hello, {ele}
          </div>
        );
      })}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
