import React, {Component} from 'react'

export default class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        this.dateInterval = setInterval(() => this.lap(),1000)
    }
    
    componentDidUpdate(){
        if(this.state.counter == 20){
           clearInterval(this.dateInterval)
        }
    }

    componentWillUnmount(){
            clearInterval(this.dateInterval)
    }
  
    lap(){
        this.setState({
        counter: this.state.counter + 1
        })
    }

    render(){

        if(this.state.counter % 8 === 0){console.log(this.state.counter +' es multiplo de 8')}
        return(
           <div>
               <p>Counter</p>
               <p>{this.state.counter}</p>
           </div>
        );
    }
}

