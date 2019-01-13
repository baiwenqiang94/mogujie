import React, { Component } from 'react';
import {HashRouter as Router,NavLink} from "react-router-dom";
import Tabo from "./tab/tabo"
import Tabt from "./tab/tabt"
import Tabr from "./tab/tabr"
import '../../common/css/home/tab/tab.css'
// import cookie from 'react-cookies'
class Tab extends Component {
  constructor(){
    super()
    this.state = {
      taboflag:true,
      tabtflag:false,
      tabrflag:false
    }
  }
  render() {
    let {taboflag,tabtflag,tabrflag} = this.state
    return (
     <Router>
        <div className="tabBox">
          <div className="tab">
            <ul className="tabnav">
              <li>
                <NavLink to="/home/tab/tabo" onClick={this.handelTabo.bind(this)}>发现</NavLink>
              </li>
              <li>
                <NavLink to="/home/tab/tabt" onClick={this.handelTabt.bind(this)}>关注</NavLink>
              </li>
              <li>
                <NavLink to="/home/tab/tabr" onClick={this.handelTabr.bind(this)}>流行</NavLink>
              </li>
            </ul>
            {taboflag?<Tabo/>:""}
            {tabtflag?<Tabt/>:""}
            {tabrflag?<Tabr/>:""}
          </div>
        </div>
     </Router>
    );
  }
  componentDidMount(){
    // if(this.state.tabtflag){
    //   console.log(11111111)
    // }else{
    //   console.log(2222222)
    // }
  }
  handelTabo(){
    let obj = {
      taboflag:this.state.taboflag,
      tabtflag:this.state.tabtflag,
      tabrflag:this.state.tabrflag
    }
    sessionStorage.setItem("handelTabo",JSON.stringify(obj));
    this.setState({
      taboflag:true,
      tabtflag:false,
      tabrflag:false
    })
  }
  handelTabt(){
    let obj = {
      taboflag:this.state.taboflag,
      tabtflag:this.state.tabtflag,
      tabrflag:this.state.tabrflag
    }
    sessionStorage.setItem("handelTabt",JSON.stringify(obj));
    this.setState({
      taboflag:false,
      tabtflag:true,
      tabrflag:false
    })
  }
  handelTabr(){
    let obj = {
      taboflag:this.state.taboflag,
      tabtflag:this.state.tabtflag,
      tabrflag:this.state.tabrflag
    }
    sessionStorage.setItem("handelTabr",JSON.stringify(obj));
    this.setState({
      taboflag:false,
      tabtflag:false,
      tabrflag:true
    })
  }
}
export default Tab;