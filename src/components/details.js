import React, { Component } from "react";
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import "../common/css/details.css";
export default class Details extends Component {
    constructor(){
        super()
        this.state={
            id:"1",
            title:"",
            src:"",
            price:""
        }
    }
    componentWillMount(){
        let data = this.props.location.state
        if(!data) return 
        this.state.id = data.id;
        this.state.src = data.src;
        this.state.title = data.title;
        this.state.price = data.price;
    }
    render(){
        let {id,title,src,price} = this.state
        return(
            <div className="details">
                <div className="back" onClick={this.handelBack.bind(this)}><span><Icon type="left" /></span></div>
                <h1 className="bianhao">产品编号：{id}</h1>
                <img src={src}/>
                <div className="title">{title}</div>
                <h1  className="price">{price}</h1>
            </div>
        )
    }
    handelBack(){
        this.props.history.goBack()
    }
}