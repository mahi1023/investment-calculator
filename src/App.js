import logo from './state.png';
import './App.css';
import InvestmentForm from './Components/InvestmentForm';
import InvestmentList from './Components/InvestmentList';
import React,{useState} from 'react';
function App() {
 
 const [userInput,setInvestmentExpenses]= useState(null);

const saveInvestmentData = (userInput) => {
  console.log(userInput);
  setInvestmentExpenses(userInput)
  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  
  // do something with yearlyData ...
};

  const yearlyData = []; // per-year results
if(userInput){
  let currentSavings = +userInput["currentSavings"]; 
  const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput["expectedReturn"] / 100;
  const duration = +userInput["duration"];

  
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution
    });
  }
}
const rest = (userInput)=>{
  setInvestmentExpenses(userInput)
}
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm onInvestmentData = {saveInvestmentData} onRest ={rest}></InvestmentForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p style={{textAlign:'center'}}>Investment Details Not Found</p>}
    {userInput && <InvestmentList details ={yearlyData} initialInvestment ={userInput.currentSavings}></InvestmentList>}
      
    </div>
  );
}
export default App;
