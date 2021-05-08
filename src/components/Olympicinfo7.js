import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/london.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Which city hosted more editions of the summer Olympics?</h2>
      <h4>London</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>The 2012 edition was the 3rd time the summer Olympics take place in London after 1908 and 1984. Both Paris and Los Angeles are set the equalise this record when they host the 2024 and the 2028 editions respectively.</p>
        <button className="playagain"><Link to="/answers6" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers8" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
