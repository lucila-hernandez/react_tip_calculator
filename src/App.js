import './App.css';
import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(10.00);
  const [tipAmount, setTipAmount] = useState(15.00);
  const [peopleAmount, setPeopleAmount] = useState(1);

  const tipTotal = billAmount * (tipAmount / 100);
  const total = billAmount + tipTotal;
  const splitTotal = peopleAmount > 0 ? total / peopleAmount : 0;

  return (
    <div className="App">
      <h2 className="title">Tip Calculator</h2>
      <div className="container">
        <div className="input-section">
          <div className="left-inputs">
            <label>Bill</label>
            <input
              type="number"
              value={billAmount}
              onInput={(e) => setBillAmount(parseFloat(e.target.value))}
            />

            <label>Tip %</label>
            <div className="tip-input">
              <button onClick={() => setTipAmount(tipAmount - 1)}>-</button>
              <input
                type="number"
                value={tipAmount}
                onInput={(e) => setTipAmount(parseFloat(e.target.value))}
              />
              <button onClick={() => setTipAmount(tipAmount + 1)}>+</button>
            </div>

            <label>Number of People</label>
            <div className="people-input">
              <button onClick={() => setPeopleAmount(Math.max(1, peopleAmount - 1))}>-</button>
              <input
                type="number"
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
