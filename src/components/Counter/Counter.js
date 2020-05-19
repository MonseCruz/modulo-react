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
        }else if(this.state.counter % 8 === 0){
            console.log(this.state.counter +' es multiplo de 8')
        }
    }

    componentWillUnmount(){
            clearInterval(this.dateInterval)
    }
  
    lap(){
        const {increment} = this.props
        const {counter} = this.state
        this.setState({
        counter: counter + increment
        })
    }

    render(){
       
        return(
           <div>
               <p>Counter</p>
               <p>{this.state.counter}</p>
           </div>
        );
    }
}

