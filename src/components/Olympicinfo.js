import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/athensgif.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>When and where did the first modern Olympic games take place?</h2>
      <h4>It happened in Athens in 1896!</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>The first ever edition of the modern Olympic Games was held in Greece to honor the birthplace of the ancient Olympic Games that took place every four years from 776BC to at least 393AD. More than 50,000 people filled the marble stands of this Panathenaic Stadium in Athens for the first modern Olympics in 1896. </p>
        <button className="NextStep"><Link to="/answers2" style={{ textDecoration: 'none',  color: 'white' }}>
next
          </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
