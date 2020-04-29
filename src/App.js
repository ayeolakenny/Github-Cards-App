import React, {Component} from "react"
import Cardlist from "./Cardlist"
import Form from "./Form"

class App extends Component {
state = {
  profiles: [],
}
addNewProfile = (profileData) =>{
  this.setState(prevState => ({
    profiles: [...prevState.profiles, profileData],
  }))
};

render(){
    return(
      <div>
        <div class="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <Cardlist profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App
