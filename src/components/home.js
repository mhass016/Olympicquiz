import React from 'react';
import Quiz from './QuizMain';
import { Wave, Random } from 'react-animated-text';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './home.css'







function Home(){
  return(
    <div className="Home">
    <h2>Test your knowledge and know more about the summer Olympic games!</h2>


    <button>
    <Link to="/Quiz" style={{ textDecoration: 'none',  color: 'white' }}>
    <Random text="Play Now!" effect="jump" effectChange={1.0} />
    </Link>
    </button>

  <h4> Designed and Created by Mohamed Hassan using React JS & CSS </h4>

    </div>
    );
}
export default Home;
