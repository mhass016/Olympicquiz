import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/phelps.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Who is the athlete who won the most medals in the Olympic Games?</h2>
      <h4> Michael Phelps </h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>The legendary American swimmer Michael Phelps is the most decorated Olympian of all time, winning 28 medals in total in 4 participations. 23 of those medals were Gold!</p>
        <button className="playagain"><Link to="/answers3" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers5" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
