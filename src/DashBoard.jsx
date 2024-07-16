// import React, { useState } from 'react';
// // import PieChart from './PieChart';

// function DashBoard() {
//   const [homeValue, setHomeValue] = useState(0);
//   const [downPayment, setDownPayment] = useState(0);
//   const [loanAmount, setLoanAmount] = useState(0);
//   const [interestRate, setInterestRate] = useState(0);
//   const [loanTerm, setLoanTerm] = useState(5); // Default to 5 years
//   const [totalLoanMonths, setTotalLoanMonths] = useState(0);
//   const [interestPerMonth, setInterestPerMonth] = useState(0);
//   const [monthlyPayment, setMonthlyPayment] = useState(0);
//   const [totalInterestGenerated, setTotalInterestGenerated] = useState(0);

//   // Function to calculate loan values
//   const calculateLoanValues = () => {
//     const totalLoan = loanTerm * 12;
//     const interestPerMonth = interestRate / 100 / 12;
//     const monthlyPayment =
//       (loanAmount *
//         interestPerMonth *
//         Math.pow(1 + interestPerMonth, totalLoan)) /
//       (Math.pow(1 + interestPerMonth, totalLoan) - 1);
//     const totalInterestGenerated = monthlyPayment * totalLoan - loanAmount;

//     setTotalLoanMonths(totalLoan);
//     setInterestPerMonth(interestPerMonth);
//     setMonthlyPayment(monthlyPayment);
//     setTotalInterestGenerated(totalInterestGenerated);
//   };

//   // Handle input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'homeValue') {
//       const newValue = parseFloat(value);
//       setHomeValue(newValue);
//       // Recalculate loan amount and down payment based on updated home value
//       const updatedLoanAmount = newValue - downPayment;
//       setLoanAmount(updatedLoanAmount);
//     } else if (name === 'interestRate') {
//       setInterestRate(parseFloat(value));
//     } else if (name === 'downPayment') {
//       const updatedDownPayment = parseFloat(value);
//       setDownPayment(updatedDownPayment);
//       // Recalculate loan amount based on updated down payment
//       const updatedLoanAmount = homeValue - updatedDownPayment;
//       setLoanAmount(updatedLoanAmount);
//     } else if (name === 'loanAmount') {
//       const updatedLoanAmount = parseFloat(value);
//       setLoanAmount(updatedLoanAmount);
//       // Recalculate down payment based on updated loan amount
//       const updatedDownPayment = homeValue - updatedLoanAmount;
//       setDownPayment(updatedDownPayment);
//     }
//     // Calculate loan values after updating state
//     calculateLoanValues();
//   };

//   // Handle loan tenure change
//   const handleTenureChange = (event) => {
//     const selectedTerm = parseInt(event.target.value);
//     setLoanTerm(selectedTerm);
//     // Calculate loan values after updating state
//     calculateLoanValues();
//   };

//   return (
//     <div className="loan-calculator">
//       <h2>Loan Calculator</h2>
//       <div className="input-section">
//         <label htmlFor="homeValue">Home Value</label>
//         <input
//           type="range"
//           id="homeValue"
//           name="homeValue"
//           min="1000"
//           max="10000"
//           value={homeValue}
//           onChange={handleInputChange}
//         />
//         <br />

//         <label htmlFor="downPayment">Down Payment</label>
//         <input
//           type="range"
//           id="downPayment"
//           name="downPayment"
//           min="0"
//           max={homeValue}
//           value={downPayment}
//           onChange={handleInputChange}
//         />
//         <br />

//         <label htmlFor="loanAmount">Loan Amount</label>
//         <input
//           type="range"
//           id="loanAmount"
//           name="loanAmount"
//           min="0"
//           max={homeValue}
//           value={loanAmount}
//           onChange={handleInputChange}
//         />
//         <br />

//         <label htmlFor="interestRate">Interest Rate (%)</label>
//         <input
//           type="range"
//           id="interestRate"
//           name="interestRate"
//           min="2"
//           max="18"
//           value={interestRate}
//           onChange={handleInputChange}
//         />
//         <br />

//         <label htmlFor="loanTerm">Loan Term (years)</label>
//         <select id="loanTerm" name="loanTerm" value={loanTerm} onChange={handleTenureChange}>
//           <option value="5">5 Years</option>
//           <option value="10">10 Years</option>
//           <option value="15">15 Years</option>
//           <option value="20">20 Years</option>
//           <option value="25">25 Years</option>
//         </select>
//         <br />
//       </div>

//       <div className="output-section">
//         <h3>Calculated Values:</h3>
//         <p>Monthly Payment: {monthlyPayment}</p>
//         <p>Total Interest Generated: {totalInterestGenerated}</p>
//       </div>
//     </div>
//   );
// }

// export default DashBoard;


import React, { useState, useEffect } from 'react';
import './DashBoard.css'

function DashBoard({ onLoanValuesChange }) {
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [loanAmount, setLoanAmount] = useState(2400);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(5); // Default to 5 years
  const [totalLoanMonths, setTotalLoanMonths] = useState(0);
  const [interestPerMonth, setInterestPerMonth] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestGenerated, setTotalInterestGenerated] = useState(0);

  useEffect(() => {
    calculateLoanValues();
  }, [homeValue, downPayment, loanAmount, interestRate, loanTerm]);

  const calculateLoanValues = () => {
    const totalLoan = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;
    const monthlyPayment =
      (loanAmount *
        interestPerMonth *
        Math.pow(1 + interestPerMonth, totalLoan)) /
      (Math.pow(1 + interestPerMonth, totalLoan) - 1);
    const totalInterestGenerated = monthlyPayment * totalLoan - loanAmount;

    setTotalLoanMonths(totalLoan);
    setInterestPerMonth(interestPerMonth);
    setMonthlyPayment(monthlyPayment);
    setTotalInterestGenerated(totalInterestGenerated);

    // Send values to parent component
    onLoanValuesChange(homeValue,monthlyPayment, totalInterestGenerated);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'homeValue') {
      const newValue = parseFloat(value);
      setHomeValue(newValue);
      const updatedLoanAmount = newValue - downPayment;
      setLoanAmount(updatedLoanAmount);
    } else if (name === 'interestRate') {
      setInterestRate(parseFloat(value));
    } else if (name === 'downPayment') {
      const updatedDownPayment = parseFloat(value);
      setDownPayment(updatedDownPayment);
      const updatedLoanAmount = homeValue - updatedDownPayment;
      setLoanAmount(updatedLoanAmount);
    } else if (name === 'loanAmount') {
      const updatedLoanAmount = parseFloat(value);
      setLoanAmount(updatedLoanAmount);
      const updatedDownPayment = homeValue - updatedLoanAmount;
      setDownPayment(updatedDownPayment);
    }
  };

  const handleTenureChange = (event) => {
    const selectedTerm = parseInt(event.target.value);
    setLoanTerm(selectedTerm);
  };

  return (
    <div className="Loan-Calculator">
      <h1>Bank of react</h1>
      <div className="input-section">
        <div className='input'>
        <label htmlFor="homeValue">Home Value: <span>$ {homeValue}</span></label>
        <input
          type="range"
          id="homeValue"
          name="homeValue"
          min="1000"
          max="10000"
          value={homeValue}
          onChange={handleInputChange}
        />
        <div className='minToMax'>
        <span>$1000</span>
        <span>$10000</span>
        </div>
        </div>
        <br />
        <div className='input'>
        <label htmlFor="downPayment">Down Payment: <span>$ {downPayment}</span></label>
        <input
          type="range"
          id="downPayment"
          name="downPayment"
          min="0"
          max="4600"
          value={downPayment}
          onChange={handleInputChange}
        />
        <div className='minToMax'>
        <span>$0</span>
        <span>$4600</span>
        </div>
        </div>
        <br />

        <div className='input'>
        <label htmlFor="loanAmount">Loan Amount: <span>$ {loanAmount}</span></label>
        <input
          type="range"
          id="loanAmount"
          name="loanAmount"
          min="0"
          max="4600"
          value={loanAmount}
          onChange={handleInputChange}
        />
        <div className='minToMax'>
        <span>$0</span>
        <span>$4600</span>
        </div>
        </div>
        <br />

        <div className='input'>
        <label htmlFor="interestRate">Interest Rate: <span>{interestRate}%</span></label>
        <input
          type="range"
          id="interestRate"
          name="interestRate"
          min="2"
          max="18"
          value={interestRate}
          onChange={handleInputChange}
        />
        <div className='minToMax'>
        <span>2%</span>
        <span>18%</span>
        </div>
        </div>
        <br />
            <fieldset>
                <legend>Tenure</legend>
        <select id="loanTerm" name="loanTerm" value={loanTerm} onChange={handleTenureChange}>
          <option value="5">5 Years</option>
          <option value="10">10 Years</option>
          <option value="15">15 Years</option>
          <option value="20">20 Years</option>
          <option value="25">25 Years</option>
        </select>
        </fieldset>
        <br />
      </div>

      {}
    </div>
  );
}

export default DashBoard;
