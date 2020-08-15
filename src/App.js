import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact'
import { Router } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Error404 from './components/error404/Error404'

function App() {
  return (

    <div className="App">

      <Navigation />
      <Switch>
        
      <Route
        exact path="/"
        render={(props) => <Welcome {...props}
          name="Giovanni" />}
      />
      <Route
      exact path="/Welcome/:name"  render = {(props) => <Welcome {...props} name = {props.match.params.name}/>} 
        
        />
      <Route
      exact path= "/Clock" component = {Clock} />
      <Route
      exact path= "/Contact" component = {Contact} />

      
        <Route 
        component = {Error404}
        />
      
      </Switch>
    </div>

  );
}

export default App;
