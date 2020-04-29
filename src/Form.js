import React, {Component} from "react"
import axios from "axios"

class Form extends Component {
  state = { userName: "" };

  handleSubmit= async (event) =>{
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(response.data);
    this.setState({ userName: "" })
  };

  render() {
    return(
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input 
          type="text" 
          placeholder="GitHub username" 
          required 
          value={this.state.userName} 
          onChange={event => this.setState({userName: event.target.value})}
          />
          <button>Add card</button>
        </form>
      </div>
    )
  }
}

export default Form