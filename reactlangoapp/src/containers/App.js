import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';


import { Provider } from 'react-redux';
import store from './store';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar  from './NavigationBar';
 
import Sidebar from './Sidebar';
import Home from '../components/Home'
import Hiragana from '../components/Hiragana'
import HiraganaPractice from '../components/HiraganaPractice'
import Katakana from '../components/Katakana'
import KatakanaPractice from '../components/KatakanaPractice'
import About from '../components/About'
import Login from '../components/Login'
import Kanji from '../components/Kanji'
import KanjiLesson1 from '../components/KanjiLesson1'
import KanjiLesson2 from '../components/kanjiLesson2'
import KanjiLesson3 from '../components/kanjiLesson3'
import KanjiLesson4 from '../components/kanjiLesson4'
import '../App.css';
import Register from '../components/Register';
import PrivateRoute from '../Private-route/PrivateRoute';


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken
  setAuthToken(token)

  const decoded = jwt_decode(token)

  store.dispatch(setCurrentUser(decoded))


  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())

    window.location.href="./login"
  }
}



class App extends Component {
  render () {
    return (
      <Provider store={store}>
         <body>
      <div className="App">
        <React.Fragment>
          <Router>
            <Switch>

            <NavigationBar  />
            </Switch>
         </Router>
        </React.Fragment>
          <div className="App-header">
          <Sidebar />
          
         </div>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/hiragana" component={Hiragana}/>
            <Route path="/hiraganaPractice" component={HiraganaPractice}/>
            <Route path="/katakana" component={Katakana}/>
            <Route path="/katakanaPractice" component={KatakanaPractice}/>
            <PrivateRoute exact path="/kanji" component={Kanji}/>
            <PrivateRoute exact path="/Kanji-lesson-1" component={KanjiLesson1}/>
            <PrivateRoute exact path="/Kanji-lesson-2" component={KanjiLesson2}/>
            <PrivateRoute exact path="/Kanji-lesson-3" component={KanjiLesson3}/>
            <PrivateRoute exact path="/Kanji-lesson-4" component={KanjiLesson4}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route component={Error}/>
           </Switch>
  
         </Router>
       </div>
          </body>
     </Provider>
    );
  }
}

export default App;
