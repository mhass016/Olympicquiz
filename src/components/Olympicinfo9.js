import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Img from './media/tokyores.gif'
import './Olympicinfo.css'





function Olympicinfo(){
  return(
    <div ClassName="Olympicinfo">
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Tokyo will host the Olympics for the second time, when was the first time?</h2>
      <h4>It was in 1964</h4>
      <div class="fakeimg"> <img src={Img} /> </div>
        <p>Tokyo was the first ever Asian city to host the Olympics in 1964. The Japanese capital had been also awarded the organization of the 1940 Summer Olympics, but this honor was subsequently passed to Helsinki due to Japan's invasion of China, before ultimately being cancelled due to the second World War .

</p>
        <button className="playagain"><Link to="/answers8" style={{ textDecoration: 'none',  color: 'white' }}>
          back
          </Link></button>
          <button className="NextStep"><Link to="/answers10" style={{ textDecoration: 'none',  color: 'white' }}>
            Next
            </Link></button>
    </div>
    </div>
    </div>

</div>

    );
}
export default Olympicinfo;
