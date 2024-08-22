import React from "react";
import "./App.css";
import Calculator from "./Calculator";

const App = () => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  return (
    <>
    <h1 style={{textAlign:"center"}}> 
      Star rating
    </h1>
    <div className="app">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
        key={num} 
        onClick={()=>setRating(num)}
        onMouseLeave={()=>setHover(rating)}
        onMouseOver={()=>setHover(num)}
        >
          <span className= {`star ${num<=((rating && hover) || hover) ? "on" : "off" } `}>&#9733;</span>
        </button>
      ))}

    </div>

      <Calculator/>
    </>

  );
};

export default App;
