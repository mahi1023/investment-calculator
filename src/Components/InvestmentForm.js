import React,{useState} from 'react'
import  style from'./InvestmentForm.module.css'
function InvestmentForm(props){

    const [investmentDetails,setInvestmentDetails] =useState({
        currentSavings:10000,
        yearlySavings:2000,
        expectedReturn:20,
        duration:2,
    });
    const calculateHandler = (event,userInput) => {
        event.preventDefault();
        console.log(userInput)
        props.onInvestmentData(userInput);
      };
    const   onTextChangeHandler = (displayValue,value)=>{
        if(displayValue === 'currentSavings'){
            setInvestmentDetails((prev)=>{
                return {
                    ...prev,
                    currentSavings:+value
                }
            })
        }
        else if(displayValue === 'yearlySavings'){
            setInvestmentDetails((prev)=>{
                return {
                    ...prev,
                    yearlySavings:+value
                }
            })
        }
        else if(displayValue === 'expectedReturn'){
            setInvestmentDetails((prev)=>{
                return {
                    ...prev,
                    expectedReturn:+value
                }
            })
        }
        else if(displayValue === 'duration'){
            setInvestmentDetails((prev)=>{
                return {
                    ...prev,
                    duration:+value
                }
            })
        }
    }

    const resetHandler = (event,userInput) => {
        event.preventDefault();
        setInvestmentDetails({
            currentSavings:0,
            yearlySavings:0,
            expectedReturn:0,
            duration:0,
        })
        props.onRest();

    }
    return(
        <form  className={style.form} onSubmit={(event)=>calculateHandler(event,investmentDetails)} >
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(event)=>{onTextChangeHandler('currentSavings',event.target.value)}} value={investmentDetails.currentSavings} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event)=>{onTextChangeHandler('yearlySavings',event.target.value)}} value={investmentDetails.yearlySavings}/>
          </p>
        </div>
        <div className={style["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event)=>{onTextChangeHandler('expectedReturn',event.target.value)}} value={investmentDetails.expectedReturn}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration"  onChange={(event)=>{onTextChangeHandler('duration',event.target.value)}} value={investmentDetails.duration}/>
          </p>
        </div>
        <p className={style.actions}>
          <button  onClick={(event)=>resetHandler(event,investmentDetails)}type="reset"  className={style.button}>
            Reset
          </button>
          <button type="submit" className={style.button} >
            Calculate
          </button>
        </p>
      </form>
    )
}
export default InvestmentForm;