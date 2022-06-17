import React from 'react';

export default function Side({ setSide }) {
  return (
    <div>
      <label>
    Side
        <select onChange={(event) => setSide(event.target.value)}>
          <option>Fries</option>
          <option>Veggies</option>
          <option>Rings</option>
          <option>Sticks</option>
        </select>
      </label>
    </div>
  );
}
