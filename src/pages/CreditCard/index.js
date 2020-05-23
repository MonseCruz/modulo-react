import React, {Component} from 'react'
import Header from "../../components/Header";
import FormCreditCard from "./Components/formCredirCard"
import "./CreditCard.css"
export default class CreditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleInput({ target: {name,value} }) {
        this.setState({
          [name]: value,
        });
    }

    render(){
        return (
            <div className="Container">
                <div className="ContainerCreditCard">
                    <Header
                        title={"Validador de tarjetas de credito"}
                        description={ "visualizar los datos de la tarjeta"}
                    />
               
                    <FormCreditCard
                        handleInput={this.handleInput}
                    />
                </div>
            </div>
        )
    } 
}
