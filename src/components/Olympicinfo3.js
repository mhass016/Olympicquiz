import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/lebron.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Which country won the most medals in the summer Olympic Games?</h2>
      <h4> It's Team USA! </h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>Yeah just as you might have thought, the United States lead the all-time medal table in the summer Olympics. Lebron's medal is just one of 1022 gold, 795 silver and 707 bronze medals his fellows won! </p>
        <button className="playagain"><Link to="/answers2" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers4" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
