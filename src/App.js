import './App.css';
import { useState } from 'react';
function App() {




  const [beer, setBeer] = useState('mangocart');
  const [wings, setWings] = useState('mild');
  const [side, setSide] = useState('fries');
  const [orderName, setOrderName] = useState('');

  const [instructions, setInstructions] = useState([]);
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
          <label>
            Beer
            <select onChange={(event) => setBeer(event.target.value)}>
              <option>MangoCart</option>
              <option>Trippel</option>
              <option>BlueMoon</option>
              <option>Corona</option>
            </select>
          </label>
          <label>
            Wings
            <select onChange={(event) => setWings(event.target.value)}>
              <option>Mild</option>
              <option>Medium</option>
              <option>Hot</option>
              <option>Oof</option>
            </select>
          </label>
          <label>
            Side
            <select onChange={(event) => setSide(event.target.value)}>
              <option>Fries</option>
              <option>Veggies</option>
              <option>Rings</option>
              <option>Sticks</option>
            </select>
          </label>

          <div>
            <label> 
              Name For Order:
              <input onChange={e => setOrderName(e.target.value)}/>
            </label>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Add Instructions:
              <input onChange={e => setCurrentInstructions(e.target.value)} />
            </label>
            <button>submit</button>
          </form>
          <hr />


          <img src={`${beer}.jpg`} />
          <img src={`${wings}.jpg`} />
          <img src={`${side}.jpg`} />
          <h3>Name for order: {orderName}</h3>
          <div><h3>Special instructions</h3>
            <ul>
              {
                instructions.map((instruction, i) => <li key={instruction + i}>{instruction}</li>)
              }
            </ul>
          </div>
        </div>
      </section>



    </div>
  );
}

export default App;
