// Code EyesOnMe Component Here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends Component {

    log1 = () => {
        console.log("Good!")
    }

    log2 = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {

        return (
            <button onFocus={this.log1} onBlur={this.log2} ></button>
        )
    }

}

export default EyesOnMe