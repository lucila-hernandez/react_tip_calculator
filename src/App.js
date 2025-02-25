import './App.css';
import { useState } from "react";

function App() {
  // billAmount, tipPercent, people
  const [billAmount, setBillAmount] = useState(10.00);
  const [tipAmount, setTipAmount] = useState(15.00);
  const [peopleAmount, setPeopleAmount] = useState(1);

  const tipTotal = billAmount * (tipAmount / 100);
  const total = billAmount + tipTotal;
  const splitTotal = peopleAmount > 0 ? total / peopleAmount : 0; // Avoid division by zero

  return (
    <div className="App">
      <h2>Tip Calculator</h2>
      <div className="container">
        <div className="input-section">
          <div className="left-inputs">
            <label>Bill Amount: </label>
            <input
              placeholder='Bill Amount'
              type='number'
              value={billAmount}
              onInput={(e) => setBillAmount(parseFloat(e.target.value))}
            />
            <div className="tip-input">
              <label>Tip %: </label>
              <button onClick={() => setTipAmount(tipAmount - 1)}>-</button>
              <input
                placeholder='Tip Percent'
                type='number'
                value={tipAmount}
                onInput={(e) => setTipAmount(parseFloat(e.target.value))}
              />
              <button onClick={() => setTipAmount(tipAmount + 1)}>+</button>
            </div>
            <div className="people-input">
              <label>Number of People: </label>
              <button onClick={() => setPeopleAmount(Math.max(1, peopleAmount - 1))}>-</button>
              <input
                placeholder='Number of People'
                type='number'
                value={peopleAmount}
                onInput={(e) => setPeopleAmount(parseInt(e.target.value))}
              />
              <button onClick={() => setPeopleAmount(peopleAmount + 1)}>+</button>
            </div>
          </div>

          <div className="right-totals">
            <p>Tip Total: ${tipTotal.toFixed(2)}</p>
            <p>Bill Total: ${total.toFixed(2)}</p>
            <p>Per Person Amount: ${splitTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
