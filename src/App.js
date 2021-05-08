import React from 'react';
import Home from './components/home';
import { Wave, Random } from 'react-animated-text';
import Quiz from './components/QuizMain';
import Olympicinfo from './components/Olympicinfo'
import Olympicinfo2 from './components/Olympicinfo2'
import Olympicinfo3 from './components/Olympicinfo3'
import Olympicinfo4 from './components/Olympicinfo4'
import Olympicinfo5 from './components/Olympicinfo5'
import Olympicinfo6 from './components/Olympicinfo6'
import Olympicinfo7 from './components/Olympicinfo7'
import Olympicinfo8 from './components/Olympicinfo8'
import Olympicinfo9 from './components/Olympicinfo9'
import Olympicinfo10 from './components/Olympicinfo10'

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
    <div className="apphead">
    <h1><Wave text="The Olympic Quiz" effect="fadeOut" effectChange={15.0} /></h1>
    </div>
    <Route path="/" exact render={
      ()=> {
        return (<div> <Home /> </div>)
      }
    }/>
    <Route path="/home" exact render={
      ()=> {
        return (<div> <Home /> </div>)
      }
    }/>

    <Route path="/quiz" exact render={
      ()=> {
        return ( <div> <Quiz /> </div>)
      }
    }/>
    <Route path="/answers" exact render={
      ()=> {
        return ( <div> <Olympicinfo /> </div>)
      }
    }/>
      <Route path="/answers2" exact render={
        ()=> {
          return ( <div> <Olympicinfo2 /> </div>)
        }
      }/>

        <Route path="/answers3" exact render={
          ()=> {
            return ( <div> <Olympicinfo3 /> </div>)
          }
        }/>

          <Route path="/answers4" exact render={
            ()=> {
              return ( <div> <Olympicinfo4 /> </div>)
            }
          }/>

            <Route path="/answers5" exact render={
              ()=> {
                return ( <div> <Olympicinfo5 /> </div>)
              }
            }/>

              <Route path="/answers6" exact render={
                ()=> {
                  return ( <div> <Olympicinfo6 /> </div>)
                }
              }/>

                <Route path="/answers7" exact render={
                  ()=> {
                    return ( <div> <Olympicinfo7 /> </div>)
                  }
                }/>

                  <Route path="/answers8" exact render={
                    ()=> {
                      return ( <div> <Olympicinfo8 /> </div>)
                    }
                  }/>

                    <Route path="/answers9" exact render={
                      ()=> {
                        return ( <div> <Olympicinfo9 /> </div>)
                      }
                    }/>
                      <Route path="/answers10" exact render={
                        ()=> {
                          return ( <div> <Olympicinfo10 /> </div>)
                        }
    }/>

    </div>
    </Router>
  );
}

export default App;
