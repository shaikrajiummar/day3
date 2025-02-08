import React, { Component } from 'react'
import './global.css'
export class ClassComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={
            clicked:false,
            message:"Hi I am attending react class"
        }
    }
    changeMessage =()=>{
        this.setState({
            clicked:true,
            message:"Thanks for attending!!"
        })
    }
  render() {
    let applyStyle = this.state.clicked ? 'heading2' : 'heading1';

    return (
      <div>ClassComponent
        <h1 className={applyStyle}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    )
  }
}

export default ClassComponent