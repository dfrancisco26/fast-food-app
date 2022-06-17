import './App.css';
import { useState } from 'react';
import Beer from './Beer.js';
import Wings from './Wings.js';
import Side from './Side.js';
import InstructionsList from './InstructionsList';
import InstructionsForm from './InstructionsForm';
function App() {




  const [beer, setBeer] = useState('mangocart');
  const [wings, setWings] = useState('mild');
  const [side, setSide] = useState('fries');
  const [orderName, setOrderName] = useState('');

  const [instructions, setInstructions] = useState(['yes', 'no']);
  const [currentInstructions, setCurrentInstructions] = useState('');


  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, currentInstructions]);

  }


  return (
    <div className="App">
      <section>
      Select Order Details
        
      </section>
      <section>
        Your Order
        <div>
          <Beer setBeer={setBeer} />
          <Wings setWings={setWings} />
          <Side setSide={setSide} />

          <div>
            <label> 
              Name For Order:
              <input onChange={e => setOrderName(e.target.value)}/>
            </label>
          </div>
          <InstructionsForm handleSubmit={handleSubmit} setCurrentInstructions={setCurrentInstructions} />
          <hr />


          <img src={`${beer}.jpg`} />
          <img src={`${wings}.jpg`} />
          <img src={`${side}.jpg`} />
          <h3>Name for order: {orderName}</h3>
          <div><h3>Special instructions</h3>
            <InstructionsList instructions={instructions} />
          </div>
        </div>
      </section>



    </div>
  );
}

export default App;
