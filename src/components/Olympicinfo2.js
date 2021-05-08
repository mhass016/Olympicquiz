import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/28.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>How many summer Olympic games took place before Tokyo 2020?</h2>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>Tokyo 2020 will be the 29th edition of the summer Olympic Games. since the launching of the modern games in 1896 they went on to take place every four years. Only the first and second world wars led to cancelling the summer Olympics in 1916,1940 and 1944.
       As a result of the coronavirus pandemic, Tokyo 2020 was postponed for 1 year to take place in 2021. </p>
        <button className="playagain"><Link to="/answers" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers3" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
