import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/fencing.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Which of the following sports featured in every summer Olympics?</h2>
      <h4>Fencing!</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>No, neither football nor tennis! Fencing is one of only 5 sports that never missed a summer Olympic Games since 1896. The others are: Athletics, Cycling, Gymnastics and Swimming.</p>
        <button className="playagain"><Link to="/answers5" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers7" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
