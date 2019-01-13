import React, { Component } from 'react';
import {HashRouter as Router,Switch,Route,NavLink,Redirect} from "react-router-dom";
import Home from "./components/home/home";
import List from "./components/list/list";
import Order from './components/order/order';
import My from "./components/my/my";
import "./common/css/footer.css";
import Tabo from "./components/home/tab/tabo";
import Tabt from "./components/home/tab/tabt";
import Tabr from "./components/home/tab/tabr";
import Details from "./components/details";
import DetailsHome from "./components/datailshome";
class App extends Component {
  render() {

    return (
     <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/order" component={Order}/>
            <Route path="/my" component={My}/>
            <Route path="/home/tab/tabo" component={Tabo}/>
            <Route path="/home/tab/tabt" component={Tabt}/>
            <Route path="/home/tab/tabr" component={Tabr}/>
            <Route path="/details" component={Details}/>
            <Route path="/datailshome" component={DetailsHome}/>
            <Redirect path="/"  to="/home/tab/tabo"/>
          </Switch>
          <div id="footer">
            <ul>
              <li>
                <NavLink to="/home">首页</NavLink>
              </li>
              <li>
                <NavLink to="/list">商城</NavLink>
              </li>
              <li>
                <NavLink to="/order">直播</NavLink>
              </li>
              <li>
                <NavLink to="/my">我</NavLink>
              </li>
            </ul>
          </div>
        </div>
     </Router>
    );
  }
 
}

export default App;
