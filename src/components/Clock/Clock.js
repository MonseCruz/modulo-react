import React, {Component} from 'react'

export default class Clock extends Component{

    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            name:'Monse'
        }
    }

    componentDidMount(){
        this.dateInterval = setInterval(() => this.tick(),1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.dateInterval)
    }

    tick(){
        this.setState({
        date: new Date()
        })
    }

    render(){
        return(
           <div>
               <p>{this.state.name}</p>
               <p>{this.state.date.toLocaleTimeString()}</p>
           </div>
        );
    }
}

/*function Clock(){
     return(
        <div>
            <p>Hola la hora en este momento es: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default Clock */