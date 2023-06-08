import './App.css';
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <main>
        <Switch>
          <Route path="/contact">

          </Route>
          <Route path="/projects">
            
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/">
  
          </Route>      
        </Switch>
      </main>
    </div>
  );
}

export default App;
