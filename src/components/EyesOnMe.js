// Code EyesOnMe Component Here
import React, {Component} from 'react';
class EyesOnMe extends Component {
 
    onfocus = () => {
      console.log('Good!');
    }
    onblur = () => {
        console.log('Hey! Eyes on me!');
      }
   
    render() {
        return (
         <button onFocus={this.onfocus} onBlur={this.onblur}>BUTTON</button>
      )
    }

  }

  export default EyesOnMe