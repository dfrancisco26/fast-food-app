import React from 'react';

export default function InstructionsForm({ handleSubmit, setCurrentInstructions }) {
  return (
    <div>         
      <form onSubmit={handleSubmit}>
        <label>
      Add Instructions:
          <input onChange={e => setCurrentInstructions(e.target.value)} />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
