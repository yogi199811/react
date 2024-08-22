import React, { useEffect } from "react";

const Calculator = () => {
  const [princple, setPrincple] = React.useState(0);
  const [intrest, setIntrest] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleChange = (e) => {
    if (e.target.id === "principle") {
      setPrincple(e.target.value);
    } else if (e.target.id === "intrest") {
      setIntrest( parseInt(e.target.value));
    } else {
      setYears(e.target.value);
    }
  };
// p(r(1+r)^n/((1+r)^n)-1)
  const calculate = ()=>{

    let r = intrest
    if(princple && r && years){
        r = r/12/100  // per month
        let calcupow = Math.pow(1+r,years*12)
        const amount = princple * ((r*calcupow) /(calcupow-1))
        setResult(Math.round(amount))

    }
  }

  useEffect(()=>{

    calculate()

  },[princple,intrest,years])
  return (
    <>
      <div className="calc">
        <h2>Calculator</h2>

        <p>Principle</p>
        <input id="principle" onChange={handleChange} type="number" />

        <p>Intrest</p>
        <input id="intrest" onChange={handleChange} type="number" />

        <p>Years</p>
        <input id="years" onChange={handleChange} type="number" />

        <br />
        <br />
        <br />

        <h4>your monthly emi {result}</h4>
      </div>
    </>
  );
};

export default Calculator;
