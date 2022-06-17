import React from 'react';

export default function InstructionsList({ instructions }) {
  return (
    <div>
      <ul>
        {
          instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
        }
      </ul>
    </div>
  );
}
