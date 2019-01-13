import React, { Component,Fragment } from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp"
import "../../common/css/list/list.css";
import Header from "../home/header"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import BScroll from "better-scroll"
import { Icon } from 'antd';
import 'antd/dist/antd.css';
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            navTop: [],
            navTag: [],
            hotTagTopImg: "",
            hotTagTopTitle: "",
            hotTagList1: [],
            hotTagList2: [],
            navLxys: [],
            goodList: [],
            flag:false
        }
    }
    render() {
        let { 
            navTop, 
            navTag, 
            hotTagTopImg, 
            hotTagTopTitle, 
            hotTagList1, 
            hotTagList2, 
            navLxys, 
            goodList,
            flag
        } = this.state
        return (
            <Fragment>
                {flag?<Header flag={flag}/>:""} 
                <div className="wrapper_list" ref="wrapper_list">
                    <div className="content_list">
                        {flag?"":<Header flag={flag}/>}  
                        <ul className="imgbox_top">
                            {
                                navTop.map((item, index) => {
                                    return <li key={index}>
                                        <img src={item.image} alt=""/>
                                        <span>{item.title}</span>
                                    </li>
                                })
                            }
                        </ul>
                        <ul className="navTag">
                            {
                                navTag.map((item, index) => {
                                    return <li key={index}>
                                        <img src={item.image}  alt=""/>
                                        <span>{item.title}</span>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="hotTagBox">
                            <div className="hotTagTop">
                                <img src={hotTagTopImg}  alt=""/>
                                <span>{hotTagTopTitle}</span>
                            </div>
                            <div className="swiper-container_list">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <ul>
                                            {
                                                hotTagList1.map((item, index) => {
                                                    return <li key={index}>
                                                        <img src={item.image}  alt=""/>
                                                        <h3>{item.subtitle}</h3>
                                                        <p>{item.title}</p>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="swiper-slide">
                                        <ul>
                                            {
                                                hotTagList2.map((item, index) => {
                                                    return <li key={index}>
                                                        <img src={item.image}  alt=""/>
                                                        <h3>{item.subtitle}</h3>
                                                        <p>{item.title}</p>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="swiper-pagination_list"></div>
                            </div>
                        </div>
                        <div className="navLxys">
                            <h2>流行元素</h2>
                            <ul>
                                {
                                    navLxys.map((item, index) => {
                                        return <li key={index}>
                                            <span>{item.title}</span>
                                            <img src={item.image}  alt=""/>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="mylike">
                            <img src="https://s10.mogucdn.com/mlcdn/c45406/180904_79g7dd4id14ii77j2hd068li89i2i_2154x222.png_1200x9999.v1c7E.webp" />
                        </div>
                        <ul className="goodList">
                            {
                                goodList.map((item, index) => {
                                    return <li key={index}>
                                        <img src={item.img}  alt=""/>
                                        <p>{item.title}</p>
                                        <div>
                                            <span>{item.price}</span>
                                        </div><br />
                                        <button><Link to={{
                                            pathname:"/details",
                                            state:{
                                                id:index,
                                                title:item.title,
                                                src:item.img,
                                                price:item.price
                                            }}}>
                                            立即购买
                                            </Link>
                                        </button>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="loading"><Icon type="loading" /></div>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.scroll = new BScroll(this.refs.wrapper_list,{
            click:true,
            pullUpLoad:true,
        });
        this.scroll.on("pullingUp",()=>{
            let arr = []
            let arrGoodList = this.state.goodList
            fetchJsonp("http://localhost:3000/goodList")
            .then((response) => {
                return response.json()
            }).then((res) => {
                arr=res.filter((item, index) => {
                    return index > 11 && index < 22
                })
                this.setState({
                    goodList:arrGoodList.concat(arr)
                })
            })
        })
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
        fetchJsonp("http://localhost:3000/navTop")
            .then((response) => {
                return response.json()
            }).then((res) => {
                this.setState({
                    navTop: res
                })
            })
        fetchJsonp("http://localhost:3000/navTag")
            .then((response) => {
                return response.json()
            }).then((res) => {
                this.setState({
                    navTag: res
                })
            })
        fetchJsonp("http://localhost:3000/hotTag")
            .then((response) => {
                return response.json()
            }).then((res) => {
                this.setState({
                    hotTagTopImg: res[0].image,
                    hotTagTopTitle: res[0].title,
                    hotTagList1: res.filter((item, index) => {
                        return index > 0 && index < 4
                    }),
                    hotTagList2: res.filter((item, index) => {
                        return index > 3
                    })
                })
            })
        fetchJsonp("http://localhost:3000/navLxys")
            .then((response) => {
                return response.json()
            }).then((res) => {
                this.setState({
                    navLxys: res
                })
            })
        //goodList
        fetchJsonp("http://localhost:3000/goodList")
            .then((response) => {
                return response.json()
            }).then((res) => {
                this.setState({
                    goodList:res.filter((item, index) => {
                        return index < 10 
                    }),
                })
            })
        // swiper
        new Swiper('.swiper-container_list', {
            // autoplay: {
            //     delay: 1000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: true,
            // },        

            // observer: true,
            // observeParents: true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
                el: '.swiper-pagination_list',
            }
        });
    }
    componentDidUpdate(){
        //重新计算高度
        this.scroll.refresh();
        //当数据加载完毕以后通知better-scroll可以进行下一次上拉加载
        this.scroll.finishPullUp();
    }
}