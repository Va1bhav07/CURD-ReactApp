import React from "react";
import Home from './screen/Home'
import UserDetails from './screen/UserDetails'
import UserEdit from './screen/UserEdit'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'

function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  exact path='/user_detail' component={UserDetails}/>
        <Route exact path='/user_edit' component={UserEdit}/>
      </Switch>
    </Router>
  );
}

export default App;
