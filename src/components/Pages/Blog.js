import React from "react";

export const Blog = () => {
  return (
    <div>
      <h1>Rewards</h1>
     <center>
        <div className="jumbotron">
            <select>
              <option>BNB</option>
              <option>BUSD</option>
              
            
            </select>
            <h3>Choose how you'd like to be paid out</h3>
            <button className="btn btn-primary" style={{background: "#1f5156", border: "none"}}>CLAIM NOW</button>
            <p>Need at least 10 million WELB for automatic claim</p>
        </div>
         
     </center>
    </div>
  );
};
