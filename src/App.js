
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
import Sub2 from './External/sub2changes';

import Blog1 from './allblogs/FirstBlog'
import Blog2 from './allblogs/Blog2'
import Blog3 from './allblogs/Blog3'
import Blog4 from './allblogs/Blog4'
import Blog5 from './allblogs/PrepBlog'
import Blog6 from './allblogs/ProBlog'
import Blog7 from './allblogs/Reflection2Blog'

import PixMaker from './CollagePixle/Collageindex'
import MainPixleindex from './CollagePixle/PixleMakerIndex'
import tiger from './CollagePixle/AnimalPages/tiger'
import amur from './CollagePixle/AnimalPages/Amur'
import Chimp from './CollagePixle/AnimalPages/chimp'
import Brhino from './CollagePixle/AnimalPages/BRhino'
import Bwhale from './CollagePixle/AnimalPages/BWhale'
import Awd from './CollagePixle/AnimalPages/AWD'



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
    <Route exact path= '/sub2changes' component = {Sub2} />

    <Route exact path= '/FirstBlog' component = {Blog1} />
    <Route exact path= '/Blog2' component = {Blog2} />
    <Route exact path= '/Blog3' component = {Blog3} />
    <Route exact path= '/Blog4' component = {Blog4} />
    <Route exact path= '/PrepBlog' component = {Blog5} />
    <Route exact path= '/ProBlog' component = {Blog6} />
    <Route exact path= '/Reflection2Blog' component = {Blog7} />

    <Route exact path= '/PixleApp' component = {PixMaker} />
    <Route exact path= '/PixleMakerIndex' component = {MainPixleindex} />
    <Route exact path= '/tiger' component = {tiger} />
    <Route exact path= '/Amur' component = {amur} />
    <Route exact path= '/chimp' component = {Chimp} />
    <Route exact path= '/AWD' component = {Awd} />
    <Route exact path= '/BRhino' component = {Brhino} />
    <Route exact path= '/BWhale' component = {Bwhale} />


    
     
     
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
