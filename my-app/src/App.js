import React from  'react';
import './App.css'
import Newsbar from './Newsbar.js'
import News from './News'
import About from './About.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(props){
   
    return(
        <>
         <Router>
        <Newsbar />
      
        <Switch>
          <Route exact path="/about"><About key="about" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize="20" category="Sports"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={20} category="Entertainment"/></Route>
          <Route exact path="/business"><News  key="business" pageSize={20} category="Business"/></Route>
          <Route exact path="/health"><News  key="health" pageSize={20} category="Health"/></Route>
          <Route exact path="/politics"> <News  key="politics" pageSize={20} category="politics"/></Route>
          
        </Switch>
        </Router>
        </>

    );
}
export default App;

