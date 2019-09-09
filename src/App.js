import React from 'react';
import {BrowserRouter as Router ,Route } from 'react-router-dom'
import './components/firebase/firebase'
import Nava from './files/nav';
import home from './files/home';
import requestpage from './files/requestpage';
import onClickHandle from './files/onClickHandler';
import homeLogin from './files/homeLogin';
import myAccount from './files/myAccount';
function App() {
  return (
    <div>
        <Router>
        {/* {console.log(this.props.match.params)} */}
            <Route exact path='/' component={homeLogin}/>
            <Route exact path='/feed' component={home}/>
            <Route exact path='/Myaccount' component={myAccount}/>
            <Route path ='/req' component={requestpage}/>
            <Route exact path ='/details/:id' component ={onClickHandle}/>
        </Router>
    </div>
  );
}

export default App;
