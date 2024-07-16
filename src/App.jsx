
import React, { useState } from 'react';
import DashBoard from './DashBoard';
import PieChart from './PieChart';
import './App.css'

function App() {
  const [Principle, setPrinciple] = useState(0);
  // const [Interest, setInterest] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestGenerated, setTotalInterestGenerated] = useState(0);

  const handleLoanValues = (Principle,monthlyPayment, totalInterestGenerated) => {
    setPrinciple(Principle);
    // setInterest(Interest);
    setMonthlyPayment(monthlyPayment);
    setTotalInterestGenerated(totalInterestGenerated);
  };

  return (
    <div className="App">
      <DashBoard onLoanValuesChange={handleLoanValues} />
      <PieChart monthlyPayment={monthlyPayment}  Principle={Principle} totalInterestGenerated={totalInterestGenerated}/>
    </div>
  );
}

export default App;
