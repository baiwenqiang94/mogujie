import React,{Component} from "react";
import '../../common/css/my/my.css'
import {  Icon } from 'antd';
import 'antd/dist/antd.css';
export default class My extends Component{
    render(){
        return (
            <div className="my">
            	<h1>登录</h1>
            	<h3><a href="#"><Icon type="wechat" /><span>微信登录</span></a></h3>
            	<div className="box">
                    <span></span>
                    <h3>其他登录方式</h3>
                    <ul>
                       <a href="#https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=201293&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&scope=all&display=mobile&response_type=code&redirect_uri=https%3A%2F%2Fwww.mogujie.com%2Ftransition%3Fthird%3Dqq%26platform%3Dwap%26ptp%3Dm1.DCjmLb.0.0.PTUAtcU4&state=TASrxvgbhh6jn39&client_id=201293&redirect_url=https%3A%2F%2Fh5.mogujie.com%2Fpersonal-v2%2Findex.html%3Facm%3D3.mce.1_10_1jiv0.127180.0.a1h6zrcPh3oDJ.pos_3-m_455426-sd_119-mf_4537_1088145-idx_3-mfs_4-dm1_5000%26ptp%3Dm1._mf1_1239_4537.0.0.eOe92Jtu"> <li><Icon type="qq"/> 
                        <p>QQ登录</p>
                        </li>
                        </a>
                        <a href="#"> <li><Icon type="mobile" />
                        <p>免密登录</p>
                        </li>
                        </a>
                        <a href="#"> <li><Icon type="user" />
                        <p>账号登录</p>
                        </li>
                        </a>
                    </ul>
                </div>
            </div>
        )
    }
}