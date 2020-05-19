import React, {Component} from 'react'

import './Conversor.css'
export default class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityToConvert: 0,
        };
    
        this.handleInputQuantityToConvert = this.handleInputQuantityToConvert.bind(this)
    }

    handleInputQuantityToConvert(event){
        console.log(event.target.value);
        this.setState({
            quantityToConvert: event.target.value,
        });
    }

    render(){
        const { quantityToConvert } = this.state
        return (
        <div className="form-container">
            <form>
            Escribe la cantidad en pesos mexicanos $
            <input
                class="input"
                value={quantityToConvert}
                onChange={this.handleInputQuantityToConvert}
                placeholder={"$00.0"}
            />
            
            </form>
            <p>El equivalente a dolares amerianos es  {quantityToConvert * .20} </p>
        </div>
        )
    } 
}
  