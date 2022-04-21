
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import Design from './pages/Design';

import Wireframe from './External/Wireframe';
import Refrences from './External/References';
import Needstobedone from './External/Needstobedone';

import Blog1 from './allblogs/FirstBlog'
import Blog2 from './allblogs/Blog2'
import Blog3 from './allblogs/Blog3'
import Blog4 from './allblogs/Blog4'

import { Menu } from '@mui/material';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path = '/' component={Home}/>
    <Route exact path = '/blogs' component={Blogs} />
    <Route exact path = '/about' component={About} />
    <Route exact path= '/contact' component = {Contact} />
    <Route exact path= '/design' component = {Design} />

    <Route exact path= '/Wireframe' component = {Wireframe} />
    <Route exact path= '/References' component = {Refrences } />
    <Route exact path= '/Needstobedone' component = {Needstobedone} />

    <Route exact path= '/FirstBlog' component = {Blog1} />
    <Route exact path= '/Blog2' component = {Blog2} />
    <Route exact path= '/Blog3' component = {Blog3} />
    <Route exact path= '/Blog4' component = {Blog4} />
   
   
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
