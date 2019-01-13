import React, { Component,Fragment } from "react";
import Swi from './swi';
import Li from './li';
import Header from './header';
import Tab from './tab';
import "../../common/css/home/home.css";
import BScroll from "better-scroll"
export default class Home extends Component {
    constructor(){
        super()
        this.state={
            flag:false
        }
    }
    render() { 
        let{flag} = this.state
        return (
            <Fragment>
                {flag?<Header flag={flag}/>:""} 
                <div className="wrapper_home" ref="wrapper_home"> 
                    <div className="content_home">
                        {flag?"":<Header flag={flag}/>} 
                        <Swi className="swi"/>
                        <Li/>
                        <Tab/>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper_home,{
            click:true,
            pullUpLoad:true,
            probeType:2
        });
       //吸顶效果
        this.scroll.on("scroll",(offset)=>{
            if(offset.y <= -730){
               this.setState({
                   flag:true
               })
            }else{
                this.setState({
                    flag:false
                })
            }
        })
    }
    componentDidUpdate(){
        this.scroll.refresh();
    }
  
}