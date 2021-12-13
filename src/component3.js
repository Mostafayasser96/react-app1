import React, { Component } from 'react';
import BoilingVerdict from './component2';


export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = ({
            temperature: '',
            scaleNames: {
                c: 'Celsius',
                f: "Fahrenheit"
            }
        })
    };
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    toCelsius(fahrenheit){
        return (fahrenheit -32) * 5 /9;
    }
    toFahrenheit(celsius){
        return (celsius * 9 / 5) + 32;
    }
    tryConvert(temperature, convert){
        const input = parseFloat(temperature);
        if(Number.isNaN(input)){
            return ''
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    
    // scaleNames() {
    //     return {
    //     c: 'Celsius',
    //     f: "Fahrenheit"
    // }}
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        
        return (
            <fieldset>
                <legend>Enter Temperature here in {this.state.scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />

            </fieldset>
        )
    }
}