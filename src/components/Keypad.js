// Code Keypad Component Here
import React from 'react'


export default class Keypad extends React.Component {

logger = () => console.log('Entering password...')


render (){
   return <div><input type="password" onKeyUp = {this.logger} /> </div>
}

}