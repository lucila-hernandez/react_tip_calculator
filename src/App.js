import { useState } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0.00);
  const [tipAmount, setTipAmount] = useState(15.00);
  const [peopleAmount, setPeopleAmount] = useState(1);

  const tipTotal = billAmount * (tipAmount / 100);
  const total = billAmount + tipTotal;
  const splitTotal = peopleAmount > 0 ? total / peopleAmount : 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center font-sans">
      <h2 className="text-2xl font-bold mb-5">Tip Calculator</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] flex justify-between">
        <div className="w-1/2 flex flex-col gap-5 items-start">
          <div>
            <label className="block font-bold text-left">Bill Amount</label>
            <input
              type="number"
              value={billAmount}
              onInput={(e) => setBillAmount(parseFloat(e.target.value))}
              className="w-59 p-2 border border-gray-300 rounded-lg text-center"
            />
          </div>

          <div>
            <label className="block font-bold text-left">Tip %</label>
            <div className="flex gap-2 items-center">
              <button onClick={() => setTipAmount(tipAmount - 1)} className="bg-gray-300 p-2 rounded-lg">-</button>
              <input
                type="number"
                value={tipAmount}
                onInput={(e) => setTipAmount(parseFloat(e.target.value))}
                className="w-40 p-2 text-center border border-gray-300 rounded-lg"
              />
              <button onClick={() => setTipAmount(tipAmount + 1)} className="bg-gray-300 p-2 rounded-lg">+</button>
            </div>
          </div>

          <div>
            <label className="block font-bold text-left">Number of People</label>
            <div className="flex gap-2 items-center">
              <button onClick={() => setPeopleAmount(Math.max(1, peopleAmount - 1))} className="bg-gray-300 p-2 rounded-lg">-</button>
              <input
                type="number"
                value={peopleAmount}
                onInput={(e) => setPeopleAmount(parseInt(e.target.value))}
                className="w-40 p-2 text-center border border-gray-300 rounded-lg"
              />
              <button onClick={() => setPeopleAmount(peopleAmount + 1)} className="bg-gray-300 p-2 rounded-lg">+</button>
            </div>
          </div>
        </div>
        
        <div className="w-px bg-gray-300 mx-4"></div>

        <div className="w-1/2 text-left pl-5">
          <p className="text-lg font-bold my-2">Tip Total: ${tipTotal.toFixed(2)}</p>
          <p className="text-lg font-bold my-2">Per Person Amount: ${splitTotal.toFixed(2)}</p>
          <p className="text-lg font-bold my-2">Bill Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
