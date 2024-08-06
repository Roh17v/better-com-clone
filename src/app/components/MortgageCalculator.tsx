"use client";
import { useState } from "react";

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const payment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    setMonthlyPayment(payment);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Mortgage Calculator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="principal">
          Principal ($)
        </label>
        <input
          id="principal"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="rate">
          Annual Interest Rate (%)
        </label>
        <input
          id="rate"
          type="number"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="years">
          Loan Term (Years)
        </label>
        <input
          id="years"
          type="number"
          value={years}
          onChange={(e) => setYears(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={calculateMortgage}
        className="w-full py-2 bg-blue-500 text-white rounded"
      >
        Calculate
      </button>
      {monthlyPayment !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded border border-gray-300">
          <h3 className="text-lg font-semibold">Monthly Payment</h3>
          <p className="text-xl">${monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
