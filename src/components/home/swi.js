import React,{Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import fetchJsonp from 'fetch-jsonp'
import '../../common/css/home/swi.css'
export default class Swi extends Component{
    constructor(props) {
      super(props);
      this.state = {
        list: []
      };
    }

    
componentDidMount () {
    
      new Swiper('.swiper-container', {
        autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        },        
        
        observer: true,
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        pagination : {
            el: '.swiper-pagination',
        }
      });

 
        
      var api = "https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=122224";
        
      fetchJsonp(api).then( (res)=> {
          return res.json()
          
        }).then((res) => {
          this.setState({
            list:res.data[122224].list
          })
        })
    }
    render() {
        return <div>
        <div className="swiper-container">
        <div className="swiper-wrapper">
            {
               this.state.list.map((item,index)=>{
                 return <div className="swiper-slide" key={index}><img src={item.image_800} key={index}/></div>
               })
            }
        </div>
        <div className='swiper-pagination'></div>
      </div>
        </div>
}
}