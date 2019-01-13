import React, { Component } from "react";
import { Icon ,Input} from 'antd';
import 'antd/dist/antd.css';
import '../../common/css/home/header.css'
export default class Header extends Component {
    render() { 
        const Search = Input.Search;
        return (
            <div className="home">
                <header>
                <Icon type="bars" />
                <Search placeholder="风衣" onSearch={value => console.log(value)} className="tinput"/>
                <Icon type="message" />
                </header>
            </div>
        )
    }
  
}