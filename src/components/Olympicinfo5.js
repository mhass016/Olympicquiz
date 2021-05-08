import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/africa.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Which continent is the only one that never hosted the Olympic games?</h2>
      <h4>Africa</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>After Rio de Janiero hosted the last Olympics in 2016, Africa remains the only continent yet to host the summer Olympics. Africans will have to wait for even longer to see the Olympics take place in their land as we already know the host cities for the Olympics until the 2032 edition!</p>
        <button className="playagain"><Link to="/answers4" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers6" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
