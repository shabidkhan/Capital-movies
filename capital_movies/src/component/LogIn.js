import axios from 'axios';
import React ,{Component} from 'react'
import Article from './Article'
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
// import Form from 'react-bootstrap/Form'



class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Email:'',
            Password:'',
            message:'LogedIn',
            token:""
         }
    }
    LogOut=()=>{
        this.setState({message:'',Username:'',Password:''})
    }
    user = (e) =>{
        // console.log(e.target.value)
        this.setState({Email:e.target.value})
    }
    pass = (e)=>{
        this.setState({Password:e.target.value})
    }
    check = () =>{
        axios.post("http://localhost:5000/users/login",this.state).then(e=>this.setState({message:e.data.message,token:e.data.token}))
    
    }
    logincheck=()=>{
       
        if (this.state.message==="LogedIn"){
            // const accessToken = this.state.token
            // const DETAIL_API = "https://developers.themoviedb.org/3/movies/get-movie-details"
            // const AUTH_API = "https://developers.themoviedb.org/3/getting-started/authentication"
            // const authAxios = axios.create({
            //     baseURL: AUTH_API,
            //     Authorization:`Bearer ${accessToken}`
            //     }
            // )
            // axios.get(DETAIL_API).then(data=>data.json()
            // .then(data=>console.log(data)))
            return <Article LogOut={this.LogOut} />
        }
        return  <div><br/>
        {/* <p>Username : <input value={this.state.Email} placeholder='Email' onChange={e=>this.user(e)} type="email" /> </p>
        <p>Password : <input value={this.state.Password} placeholder='Password' onChange={e=>this.pass(e)} type='password' /><br/></p>


        <button style={{backgroundColor:'#3B3B98',color:'#fff'}} onClick={e=>this.check()} >LogIn</button><br></br>
        {this.state.message} */}
         
    <Form>
    <Form.Group className="container bgc py-5 px-5" controlId="formBasicEmail" onChange={e=>this.user(e)}>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="container bgc py-5 px-5" controlId="formBasicPassword" onChange={e=>this.pass(e)}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={e=>this.check()}>
      Submit
    </Button>
</Form >
{this.state.message}
    </div>

    }
    
    render() { 
        return ( 
           <div>
                {this.logincheck()}
           </div>
           
         );
    }
}
 
export default LogIn;

