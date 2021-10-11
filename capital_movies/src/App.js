import React from 'react';
import './App.css';
import Index from "./component/Index"

class App extends React.Component{
  constructor(){
    super()
    this.state={
      pressed:true
    }
  }

  pressing=()=>{
    this.setState({pressed:!this.state.pressed})
  }
  renderContent = () =>{
    switch(this.state.pressed){
      case true:
        return <Index/>
    //   case false:
    //     return <Article LogIn={this.LogIn}/>
    }
  }
  renderContentinsideButton = () =>{
    switch(this.state.pressed){
      case true:
        return "SignUp"
      case false:
        return "LogIn"
    }
  }
  render(){
  return (
    // <Router>
      <div className="App"  >
      {/* <button className='buttons' onClick={e=>this.pressing()} >{this.renderContentinsideButton()}</button><br></br> */}
      {this.renderContent()}
    </div>
    // </Router>
    
  );}
}



export default App;
