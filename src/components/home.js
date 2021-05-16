import React from 'react';
import Quiz from './QuizMain';
import { Wave, Random } from 'react-animated-text';
import SocialButtonsContainer from 'react-social-media-buttons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './home.css'







function Home(){
  return(
    <div className="Home">
    <h2>Test your knowledge and know more about the Olympic games!</h2>


    <button>
    <Link to="/Quiz" style={{ textDecoration: 'none',  color: 'white' }}>
    <Random text="Play Now!" effect="jump" effectChange={1.0} />
    </Link>
    </button>

  <h4> ©Designed and Created by <a href="https://twitter.com/MohQutob" style={{ textDecoration: 'none', color: '#3949ab'}}>Mohamed Qoutb </a>
using React JS</h4>

<div className="SocialWrap">


<SocialButtonsContainer
links={['https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Folyquiz.herokuapp.com%2F&amp;src=sdkpreparse','https://twitter.com/intent/tweet?url=https://olyquiz.herokuapp.com']}
buttonStyle={{margin: '0px 5px', backgroundColor: 'transparent'}}
iconStyle={{color: '#0e058f'}}
openNewTab={true}
/>

</div>


    </div>
    );
}
export default Home;
