import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';


const Contact = () =>{
    return(
      
      <div className="main_content">
        <div style={{color: 'white',backgroundColor: 'black',width:'110%',height: '600%'}}className="header"><b>Inventory Management!</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Home"><button>Home</button></Link>&nbsp;&nbsp;<Link to="/About"><button>About</button></Link>&nbsp;&nbsp;
        <Link to="/stock"><button>Preview stocks</button></Link></div> 

        <br>
        </br>
         <div style={{height: '100%'}}>
      <center>

      <section style={{backgroundColor: 'white'}} className="contact" id="contact">
        <div className="conta">
          <div className="heading text-center">
          

          <img style={{marginRight: '230px',marginLeft: '200px',width: '70px'}}src="https://cdn-icons-png.flaticon.com/128/8248/8248321.png"/>

            <h1>
              <span style={{color: '#594f8d'}}>  Contact our Sales Team </span></h1>
            <p>We will be happy to answer your sales question :)</p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h2>Contact detail</h2>
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                  <i className="fas fa-mobile-alt" />
                        <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://cdn-icons-png.flaticon.com/128/10797/10797339.png"/>
<br></br>
                  <h4  style={{color: 'black'}}className="d-inline-block"><b>PHONE : </b><br></br>
                    <br />
                    <span>+91-9894708257 , +91-7502920373</span></h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                  <i className="far fa-envelope" />
                  <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://cdn-icons-png.flaticon.com/128/10400/10400939.png"/>
<br></br>
                  <h4 style={{color: 'black'}} className="d-inline-block"><b>EMAIL : </b><br></br>
                    <br />
                    <span>agalyat8@gmail.com</span></h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                  <i className="fas fa-map-marker-alt" />
                  <img style={{marginRight: '230px',marginLeft: '200px',width: '50px'}}src="https://cdn-icons-png.flaticon.com/128/6242/6242311.png"/>
<br></br>
                  <h4 style={{color: 'black'}} className="d-inline-block"><b>ADDRESS :</b><br/><br></br>
                    <span>67F Last Lateral street ,Anna Nagar, Chennai-08</span></h4>
                </div>
              </div>
            </div>
            <br>
            </br>
            <br></br>
            <div className="title">
                <h3 style={{color: ' #02434b',fontSize: '30px'}}>Get in Touch!</h3>
              </div><br></br>
              <h4 style={{fontSize: '15px',color: 'black'}}>Please fill out the quick form and we will be in touch with lightening speed.</h4>

            <div className="col-md-7">
              <form>
                <center>
                <div className="row">
                  <div className="col-sm-6">
                    <input  style={{color: 'black',borderStyle: 'groove',fontSize: '15px'}}type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-sm-6">
                    <input style={{color: 'black',borderStyle: 'groove',fontSize: '15px'}} type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-sm-12">
                    <input style={{color: 'black',borderStyle: 'groove',fontSize: '15px'}} type="text" className="form-control" placeholder="Phone No" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea style={{color: 'black',borderStyle: 'groove',fontSize: '15px'}} className="form-control" rows={5} id="comment" placeholder="Message" defaultValue={""} />
                </div>
                
                <button  style={{marginRight:'200px',width: '50%'}}className="btn btn-block" type="submit">Send Now!</button></center>

                        </form>
              </div>
          </div>
        </div>
      </section>
      </center>
      </div>
      </div>
          );
        }
    
export default Contact;