import React, {Component} from 'react'
import CardImage from "../cardImage" 
//CSS
import "./formCreditCard.css"
export default class formCreditCard  extends Component{
    constructor(props){
        super(props)
        this.state = {
            number: "",
            expiration:"",
            CVV:""
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
    <div className='Container-card'>
        <div className="containerCard">
            <CardImage 
                number={number}
                expiration={expiration}
                CVV={CVV}
            />
        </div>
        <div className="container-form">
            <div className="row">
                <div className="text">
                    <label>Número de tarjeta</label>
                </div>
                <div>
                <input
                    maxLength="19"
                    type="number"
                    className="input"
                    value={this.state.number}
                    name={"number"}
                    onChange={this.handleInput}
                />
                </div>
               
            </div>
            
            <div className="row">
                <div className="text">
                     <label>Fecha de vencimiento  </label>
                </div>
                
                <input
                    maxLength="4"
                    type="number"
                    className="input"
                    name={"expiration"}
                    value={this.state.expiration}
                    onChange={this.handleInput}
                />
            </div>
            
            <div className="row">
                <div className="text">
                     <label>CVV </label>
                </div>
                    <input
                    maxLength="3"
                    type="password"
                    className="input"
                    name={"CVV"}
                    value={this.state.CVV}
                    onChange={this.handleInput}
                    />
            </div> 
        </div>
    </div>
    )
  }
}