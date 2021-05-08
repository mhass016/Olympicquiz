import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/larisag.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Who is the most decorated female athlete in the Olympic games?</h2>
      <h4>Larisa Latynina</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>Soviet Gymnast Larisa Latynina is the queen of summer Olympics where she won 18 medals over 3 different editions. After 57 years from her last appearance in the Olympics, she still holds the record for the most Olympic gold medals by a gymnast, male or female, with 9.

</p>
        <button className="playagain"><Link to="/answers9" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/home" style={{ textDecoration: 'none',  color: 'white' }}>
            Play Again
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
