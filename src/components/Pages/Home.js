import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div>
      <div className="container">
      <h1>EARNING DASHBOARD</h1>
      <div className="row">
<div className="col-sm-4" style={{border: "1px solid #333"}}>

  <h3><span className="fa fa-group" style={{color:"#1f5156"}}></span> <br />Dividends Share</h3>
 <p style={{fontSize: "24px"}}>0</p>
  </div>
<div className="col-sm-4" style={{border: "1px solid #333"}}>
<h3><span className="fa fa-credit-card-alt" style={{color:"#1f5156"}}></span> <br />Balance</h3>
   <p style={{fontSize: "24px"}}>0</p>
</div>
<div className="col-sm-4" style={{border: "1px solid #333"}}>
<h3><span className="fa fa-handshake-o" style={{color:"#1f5156"}}></span> <br />Dividends Paid</h3>
<p style={{fontSize: "24px"}}>0</p>
</div>

<div className="col-sm-4" style={{border: "1px solid #333"}}>
<h3><span className="fa fa-hourglass-2" style={{color:"#1f5156"}}></span> <br />Unpaid Dividends</h3>
<p style={{fontSize: "24px"}}>0 BUSD</p>
</div>


<div className="col-sm-4" style={{border: "1px solid #333"}}>
<h3><span className="fa fa-money" style={{color:"#1f5156"}}></span> <br />Last Payment</h3>
<p style={{fontSize: "24px"}}>Never</p>
</div>


<div className="col-sm-4" style={{border: "1px solid #333"}}>
<h3><span className="fa fa-road" style={{color:"#1f5156"}}></span> <br />Position</h3>
<p style={{fontSize: "24px"}}>0</p>
</div>

      </div>

      <br />
     <center> <div className="jumbotron" style={{background: "#1f5156", padding: "5px", color: "#fff", width: "60%"}}>
       <span className="fa fa-send-o" style={{color:"#fff"}}></span>
        <h1>Total Dividends Paid</h1>
        <h3>0 BUSD</h3>
        <h2>$ 0.00</h2>
      </div></center>
      </div>
    </div>
  );
};
