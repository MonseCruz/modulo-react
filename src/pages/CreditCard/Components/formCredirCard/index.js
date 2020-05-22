import React, {Component} from 'react'
//CSS
import './creditCard.css'
export default class formCreditCard  extends Component{
    constructor(props){
        super(props)
        this.state = {
            number:0,
            expiration:0,
            CVV:0
        };
        this.handleInput = this.handleInput.bind(this)
    }


    handleInput({ target: {name,value} }) {
        this.setState({
          [name]: value,
        });
    }
  
  render (){
    const { number,expiration,CVV } = this.state
    return(
    <div className='Container'>
       <div className="container-form">
            <div className="row">
                <label>Número de tarjeta</label>
                <input
                    className="input"
                    value={number}
                    name={"number"}
                    onChange={this.handleInput}
                />
            </div>
            
            <div className="row">
                <label>Fecha de vencimiento</label>
                <input
                    className="input"
                    name={"expiration"}
                    value={expiration}
                    onChange={this.handleInput}
                />
            </div>
            
            <div className="row">
                <label>CVV</label>
                    <input
                    className="input"
                    name={"CVV"}
                    value={CVV}
                    onChange={this.handleInput}
                    />
                </div> 
            </div>
            
    </div>
    )
  }
}