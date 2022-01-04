import React from "react";

export const About = () => {
  return (
    <div>
      <h1>Stacking</h1>
     <center>
        <div className="jumbotron">
            <h2>Current Status: InActive</h2>
            <select>
              <option>3 - 29 days</option>
              <option>30 days</option>
              <option>90 days</option>
               <option>120 days</option>
            
            </select>
            <h3>Choose your stacking contract</h3>
            <button className="btn btn-primary" style={{background: "#1f5156", border: "none"}}>LOCK MY TOKENS</button>
            <p>No minimum tokens requiered!</p>
        </div>
         
     </center>
    </div>
  );
};
