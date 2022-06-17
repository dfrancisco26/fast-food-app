import React from 'react';

export default function Wings({ setWings }) {
  return (
    <div>
      <label>
            Wings
        <select onChange={(event) => setWings(event.target.value)}>
          <option>Mild</option>
          <option>Medium</option>
          <option>Hot</option>
          <option>Oof</option>
        </select>
      </label>
    </div>
  );
}
