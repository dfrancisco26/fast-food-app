import React from 'react';

export default function Beer({ setBeer }) {
  return (
    <div>
      <label>
            Beer
        <select onChange={(event) => setBeer(event.target.value)}>
          <option>MangoCart</option>
          <option>Trippel</option>
          <option>BlueMoon</option>
          <option>Corona</option>
        </select>
      </label>
    </div>
  );
}
