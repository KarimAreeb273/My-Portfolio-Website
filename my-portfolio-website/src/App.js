import './App.css';
import NavBar from "./NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <main>
        Hi
        <Switch>
          <Route exact path="/contact">
            <Home />
          </Route>
          <Route exact path="/projects">
            <About />
          </Route>
          <Route exact path="/about">
            <Projects />
          </Route>
          <Route path="/">
            <Contact />
          </Route>      
        </Switch>
      </main>
    </div>
  );
}

export default App;
