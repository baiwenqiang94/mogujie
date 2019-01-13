import React, { Component } from "react";
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import "../common/css/details.css";
export default class DetailsHome extends Component {
    constructor(){
        super()
        this.state={
            id:"1",
            title:"",
            src1:"",
            src2:"",
            src4:"",
            price:""
        }
    }
    componentWillMount(){
        let data = this.props.location.state
        if(!data) return 
        this.state.id = data.id;
        this.state.src1 = data.src1;
        this.state.src2 = data.src2;
        this.state.src3 = data.src3;
        this.state.title = data.title;
        this.state.price = data.price;
    }
    render(){
        let {id,title,src1,src2,src3,price} = this.state
        return(
            <div className="details">
            <h1></h1>
                <div className="back" onClick={this.handelBack.bind(this)}><span><Icon type="left" /></span></div>
                <h1 className="bianhao">产品编号：{id}</h1>
                <img src={src1}/>
                <img src={src2}/>
                <img src={src3}/>
                <div className="title">{title}</div>
                <h1  className="price">{price}</h1>
            </div>
        )
    }
    handelBack(){
        this.props.history.goBack()
    }
}