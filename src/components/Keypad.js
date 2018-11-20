import React, { Component } from 'react';

export default class Keypad extends Component {

    handleKeyUp = () => console.log('Entering Password...')

    render() {
        return <input onKeyUp={this.handleKeyUp} type='password' />
    }
}




