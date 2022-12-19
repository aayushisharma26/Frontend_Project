

import React,{Component} from "react";
import axios from 'axios'
class PostLister extends Component{
    constructor(){
        super();
        this.state={
            post:[],
        }
    }
    GetApi=()=>{
        axios.get('https://backendproject-production-e709.up.railway.app/signup')
        .then(res=>{
            // console.log(res);
            this.setState({post:res.data})
        })
    }
    render(){
        const {post}=this.state
        return(
            <>
            <button className="Btn" onClick={this.GetApi}>Update-Btn</button>
            <div>{
                    post.map(post=> {
                       return(
                        <>
                            <div>{post.name}</div>
                            <div>{post.email}</div>
                            <div>{post.password}</div>
                            <div>{post.phone_number}</div>

                        
                        </>
                       )
                    })
                }
                <div>
                </div>
            </div>
            </>
        )
    }
}
export default PostLister;
