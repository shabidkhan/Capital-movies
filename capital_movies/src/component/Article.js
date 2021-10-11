import React, { Component } from 'react';
// import { Cookies } from 'react-cookie';
// const api_key = "435c8880fa41fdbe5fba133c47f72ed3d";
import axios from "axios";


// const AUTH_API = "https://developers.themoviedb.org/3/getting-started/authentication"
// const DISCOVER_API = "https://developers.themoviedb.org/3/discover/movie-discover"
// const DETAIL_API = "https://developers.themoviedb.org/3/movies/get-movie-details"
// const IMG_API = "https://developers.themoviedb.org/3/getting-started/images"

class Article extends Component {
    constructor(props) {
        super(props);
    this.state = { 
        message:'',
        posts:[],
        token:this.props.token
     }
    }
    
    
    
    
    
    componentDidMount(){
        // api call
        // console.log(this.token);
        // fetch(DISCOVER_API).then(
        //             res => res.json()
        //         ).then(
        //             data =>{
        //                 console.log(data);
        //                 this.setState({posts:data})
        //             }
        //         )
        // // const accessToken = this.state.token
        // // const authAxios = axios.create({
        // //     baseURL: AUTH_API,
        // //     Authorization:`Bearer ${accessToken}`
        // //     }
        // // )
        // // axios.get(DETAIL_API).then(data=>data.json()
        // .then(data=>console.log(data)))
        const api_key = "0fa92e601fa1f7d0f5b305a2d5a7851e";
        const BASE_URL = "https://api.themoviedb.org/3";
        const api = axios.create({ baseURL: BASE_URL });
        const getUpcoming = api.get("/watch/providers", { 
            params: { api_key } 
          });
          console.log(
            getUpcoming
          );
          
    }

    render() { 
        return ( 
            <div>
                {/* <h1>{this.Movies()}</h1> */}
                {/* {this.state.posts.map(post=><div>{post.id}.{post.title}</div>)} */}
                <button style={{backgroundColor:'red',color:'white'}} onClick={e=>this.props.LogOut()} >LogOut</button>
            </div>
         );
    }
}
 
export default Article;