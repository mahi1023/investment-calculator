import style from'./InvestmentList.module.css'
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


function InvestmentList(props){
    return(
      <div >
        
        <table className={style.result}>
        <thead className={style.thead}>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {props.details.map((obj,index)=>{
        return  <tr key ={obj.year}>
          
          <td>{obj.year}</td>
          <td>{formatter.format(obj.savingsEndOfYear)}</td>
          <td>{formatter.format(obj.yearlyInterest)}</td>
          <td>{formatter.format(obj.savingsEndOfYear -props.initialInvestment - obj.yearlyContribution * obj.year)}</td>
          <td>{formatter.format(props.initialInvestment + obj.yearlyContribution * obj.year)}</td>
        </tr>
        })}
        </tbody>
      </table>
      </div>
    )
}

export default InvestmentList;