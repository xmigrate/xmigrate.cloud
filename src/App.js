import React from 'react';
import './App.css';
import Landpage from './pages/Landpage/Landpage'
import { TitleComponent } from './Components/TitleComponet/TitleComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
   
    <div className="App h-100">
 <TitleComponent />
      <Router>


        <Switch>
          <Route path="/" component={Landpage} />
         
        </Switch>

      </Router>


    </div>
  );
}

export default App;
