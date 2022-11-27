import React, { Component } from 'react'

export class LifeCycleA extends Component {


    constructor(props){
        super(props)
        this.state ={
            name: "Sangeetha"
        }
        console.log("LifeCycleA constructor");
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount")
    }

    

    static getDerivedStateFromProps() {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }
    

  render() {
    console.log("LifeCycleA render");
    return (
      <div>LifeCycleA component Life cycle methods</div>
    )
  }
}

export default LifeCycleA