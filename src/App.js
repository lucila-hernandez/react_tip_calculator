import './App.css';
import { useState } from "react"


function App() {
  // billAmount, tipPercent, people
  const [billAmount, setBillAmount] = useState(10.00)
  const [tipAmount, setTipAmount] = useState(15.00)
  const [peopleAmount, setPeopleAmount] = useState(1.00)

  const tipTotal = billAmount * (tipAmount/100)
  const total = billAmount + tipTotal
  const splitTotal = total / peopleAmount

  return (
    <div className="App">
      <h2>Tip Calculator</h2>
      <input 
      placeholder='Bill Amount'
      type='number'
      value={billAmount}
      onInput={(e) => setBillAmount(parseFloat(e.target.value))}
      />
      <input 
      placeholder='Tip Percent'
      type='number'
      value={tipAmount}
      onInput={(e) => setTipAmount(parseFloat(e.target.value))}
      />
      <input 
      placeholder='Number of People'
      type='number'
      value={peopleAmount}
      onInput={(e) => setPeopleAmount(parseInt(e.target.value))}
      />

      <div>
        <p>Bill Amount: ${billAmount.toFixed(2)}</p>
        <p>Tip Total: ${tipTotal.toFixed(2)}</p>
        <p>Total Amount: ${total.toFixed(2)}</p>
        <p>Each Person Pays: ${splitTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
