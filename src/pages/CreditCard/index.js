import React, {Component} from 'react'
import Header from "../../components/Header";
import "./creditCard.css";
export default class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
            expiration: null,
            CVV: null
        };

        this.handleInputNumber = this.handleInputNumber.bind(this)
        this. handleInputExpiration = this. handleInputExpiration.bind(this)
        this.handleInputCVV = this.handleInputCVV.bind(this)
    }

    handleInputNumber(event){
        this.setState({
            number: event.target.value,
        });
    }

    handleInputExpiration(event){
        this.setState({
            expiration: event.target.value,
        });
    }

    handleInputCVV(event){
        this.setState({
            CVV: event.target.value,
        });
    }

    render(){
        const { number,expiration,CVV } = this.state
        const typeCard = (number == 5252) ? "VISA" : "";
        return (
            <div >
                <Header
                    title={"Validador de tarjetas de credito"}
                    description={ "visualizar los datos de la tarjeta"}
                />
                <div className="Container">
                    <div className="container-image">
                        <div className={`Card ${typeCard}`}>
                        <label>Número de tarjeta:</label>
                            <p className="showData">{number}</p>
                        <label>Expiración:</label> 
                            <p className="showData">{expiration}</p>
                        </div>
                        <div className={`Card ${typeCard}`}>
                            <label>CVV:</label>
                             <p className="showData"> {CVV} </p>
                        </div>
                    </div>
                    <div className="container-form">
                        <div className="row">
                            Número de tarjeta
                            <input
                            className="input"
                            value={number}
                            name="numberCard"
                            onChange={this.handleInputNumber}
                            />
                        </div>
                        <div className="row">
                            FEcha de vencimiento
                            <input
                            className="input"
                            name="dateExpiration"
                            value={expiration}
                            onChange={this.handleInputExpiration}
                            />
                        </div>
                        <div className="row">
                            CVV
                            <input
                            className="input"
                            name="numberCVV"
                            value={CVV}
                            onChange={this.handleInputCVV}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}
