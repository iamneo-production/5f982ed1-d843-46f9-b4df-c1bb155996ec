import React from 'react';
import { Link } from 'react-router-dom';

import './data.css';

const Data = () =>{
    return(
      <div className="main_content">
      <div style={{color: 'white',backgroundColor: 'black',width:'110%',height: '600%'}}className="header"><b>Inventory Management!</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Home"><button>Home</button></Link>&nbsp;&nbsp;&nbsp;<Link to="/About"><button>About</button></Link>&nbsp;&nbsp;&nbsp;
      <Link to="/stock"><button>View stocks</button></Link> &nbsp;&nbsp;<Link to="/Contact"><button>Contact</button></Link></div>


      <br>
      </br>
        <div  className='ddd'>
        <center>
      <div className='data'>
      <main id="ma">
      <header id="header">
      <img style={{marginRight: '400px',marginLeft: '330px',marginBottom:'50px',width : '10%'}}src="https://cdn-icons-png.flaticon.com/128/11161/11161962.png"/>    
        <h1 id="title">Manage Your Stock
        </h1>
        <p id="description">The Process Ensuring the right amount of supply is available in Organization.</p>
      </header>
      <form action method name id="survey-form">
        <div className="form-group">
          <label id="name-label" htmlFor="name">Product Id:</label>
          <input id="name" type="text" name="name" placeholder="Enter ProductId" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="email-label" htmlFor="email">Product Name:</label>
          <input id="name" type="text" name="email" placeholder="Enter ProductName" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="number-label" htmlFor="number">Product Stock:</label>
          <input id="number" type="text" name="number" placeholder="Product Stock"  className="input-area" required />
        </div>
        <div className="form-group">
          <label id="number-label" htmlFor="number">Quantity Used:</label>
          <input id="number" type="text" name="number" placeholder="QtyUsed"  className="input-area" required />
        </div>
       
        <div className="form-group">
          <label id="number-label" htmlFor="text">Product Price:</label>
          <input id="number" type="text" name="number" placeholder="EnterPrice"  className="input-area" required />
        </div>

       
        <div className="form-group">
          <label id="email-label" htmlFor="email">Availability:</label>
          <input id="name" type="text" name="email" placeholder="EnterAvailability" className="input-area" required />
        </div>
        <div className="form-group">
          <label id="email-label" htmlFor="email">Product Img:</label>
          <input id="name" type="text" name="email" placeholder="Img Link" className="input-area" required />
        </div>
        
        
        
        
        {/* Submit */}
        <div className="form-group">
          <center>
         <Link to="/Stock"><input type="submit" defaultValue="Submit" id="submit" /></Link></center> 
        
         
        </div>
      </form>
     
      
    </main>
    </div>
    </center>
    </div>
    </div>
          );
        }
    
export default Data;