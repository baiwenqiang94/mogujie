import React, { Component } from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp"
export default class Tabo extends Component {
    constructor(){
        super();
        this.state={
            homeList:[]
        }
    }
    render() { 
        let {homeList} = this.state
        return (
            <div className="homeList">
               <ul>
                   {
                       homeList.map((item,index)=>{
                            return <li key={index} onClick={this.handelDetails.bind(this)}>
                                <div className="homeListTop">
                                    <img src={item.avatar}  alt=""/>
                                    <div className="nameBox">
                                        <p className="name">{item.showName}</p>
                                        <p className="sign">
                                            {item.height}|{item.weight}|{item.location}|{item.career}
                                        </p>    
                                    </div>
                                </div>
                                <div className="homeListBottom">
                                    <img src={item.imgArr[0]}  alt=""/>
                                    <img src={item.imgArr[1]}  alt=""/>
                                    <img src={item.imgArr[2]} alt=""/>
                                </div>
                            </li>
                         })
                   }
               </ul>
            </div>
        )
    }
    componentDidMount(){
        fetchJsonp("http://localhost:3000/homeList")
        .then((response)=>{
            return response.json()
        }).then((res)=>{
            this.setState({
                homeList:res
            })
        })
    }
    handelDetails(){
        console.log("输出this.props.history")
        console.log(this.props.history)
        // this.props.history.push({
        //     pathname:"/datailshome",
        //     state:{
        //         id:1,
        //     }
        // })
        // this.props.history.goBack()
        // console.log(this.props.history)
    }
}