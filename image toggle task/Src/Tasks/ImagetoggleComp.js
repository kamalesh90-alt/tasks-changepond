import React, { Component } from 'react'
import staticData from '../Shared/Constant/staticData'
export class ImagetoggleComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        toggle:true,
        imageName:"Ajith Kumar"
    }
  }
  toggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      imageName: prevState.toggle ? 'Vijay' : 'Ajith Kumar'
    }));
  }
    render() {
    return (
      <div>
        {this.state.toggle ? <img src={staticData.ajith} alt='ajith' height="300px" width="300px"/>:
        <img src={staticData.Vijay} alt='vijay' height="300px" width="300px"/>
        }
        <br/>
        <span>{this.state.imageName}</span>
        <br/>
        <button type='button' onClick={()=>this.toggle()}>Toggle Image</button>
      </div>

    )
  }
}

export default ImagetoggleComp