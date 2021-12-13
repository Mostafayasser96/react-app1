import React, { Component } from 'react';
import TemperatureInput from './component3';








export default class Calculator extends Component {
    render() {
        
        return (
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>

        );
    }
}