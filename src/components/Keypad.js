import React from 'react'

class Keypad extends React.Component{

    eventFunction = () => console.log(`Entering password...`)


    render() {

        return <input type= 'password' onKeyUp={this.eventFunction} />
    }
}

export default Keypad