import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/greece.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Which of these countries competed in every summer Olympics?</h2>
      <h4>Greece</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>Well, it was their idea after all! Greece is one of only 5 countries that featured in every edition of the summer Olympics. This exclusive club includes also Australia, France, Great Britain, and Switzerland. During the parade of nations at the opening ceremony of the Olympic Games, Greece always enters the stadium first and leads the parade to honor its status as the birthplace of the Olympics.</p>
        <button className="playagain"><Link to="/answers7" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers9" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
