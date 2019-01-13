import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp'
import '../../common/css/home/li.css'
export default class Li extends Component{
    constructor(props) {
      super(props);
      this.state = {
        list: []
      };
    }
componentDidMount () {
      var api = "https://mce.mogucdn.com/jsonp/multiget/3?pids=106930";
      fetchJsonp(api).then( (res)=> {
          return res.json()
        }).then((res) => {
          this.setState({
            list:res.data[106930].list
          })
        })
    }
    render() {
        return <div>
        	<ul>
        
            {
               this.state.list.map((item,index)=>{
                 return <li key={index}><img src={item.image} className='li' alt=""/>
                 	<span>{item.title}</span>
                 </li>
               })
            }
            </ul>
        </div>
       
}
}