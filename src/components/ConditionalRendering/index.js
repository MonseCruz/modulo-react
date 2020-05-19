import React, {Component} from 'react'
import './conditional.css'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        
        const {clicked} = this.state
        this.setState({
            clicked: !clicked
        })
    }
    render(){
        const {clicked} = this.state;
      
        const changeMenu = clicked ? 'showMenu' : ''

        return (
        <div> 
            <h1>Conditional Rendering</h1>
           <button className="btn" onClick={this.handleClick}>Menú</button>
           <div className={`menu ${changeMenu}`}>
            
           </div>
        </div>
        )
    } 
}
  