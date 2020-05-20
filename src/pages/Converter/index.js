import React, {Component} from 'react'
import Header from "../../components/Header";

export default class Converter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityToConvertPesoMx: 0,
            quantityToConvertDollarUSD: 0,
            quantityToConvertWonKRW: 0,
        };
    
        this.handleInputQuantityPesoMx = this.handleInputQuantityPesoMx.bind(this)
        this.handleInputQuantityDollarUSD = this.handleInputQuantityDollarUSD.bind(this)
        this.handleInputQuantityWonKRW = this.handleInputQuantityWonKRW.bind(this)
    }

    handleInputQuantityPesoMx(event){
        this.setState({
            quantityToConvertPesoMx: event.target.value,
            quantityToConvertDollarUSD:event.target.value * 0.043,
            quantityToConvertWonKRW: event.target.value * 52.89
        });
    }

    handleInputQuantityDollarUSD(event){
        this.setState({
            quantityToConvertDollarUSD: event.target.value,
            quantityToConvertPesoMx: event.target.value * 23.21,
            quantityToConvertWonKRW: event.target.value * 1227.54
        });
    }

    handleInputQuantityWonKRW(event){
        this.setState({
            quantityToConvertWonKRW: event.target.value,
            quantityToConvertDollarUSD:event.target.value * 0.00081,
            quantityToConvertPesoMx: event.target.value * 0.019
        });
    }

    render(){
        const { quantityToConvertPesoMx,quantityToConvertDollarUSD,quantityToConvertWonKRW } = this.state
        return (
        <div className="form-container">
            <Header
            title={"Conversor de divisas"}
            description={
              "Conversor de monedas"
            }
            />
            
            Peso mexicano
                <input
                    className="input"
                    value={quantityToConvertPesoMx}
                    onChange={this.handleInputQuantityPesoMx}
                    placeholder={"00.0"}
                />
          
            Dolar estadounidense
                <input
                    className="input"
                    value={quantityToConvertDollarUSD}
                    onChange={this.handleInputQuantityDollarUSD}
                    placeholder={"00.0"}
                />
            
            Won surcoreano
            <input
                className="input"
                value={quantityToConvertWonKRW}
                onChange={this.handleInputQuantityWonKRW}
                placeholder={"00.0"}
            />
            
        </div>
        )
    } 
}