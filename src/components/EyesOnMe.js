import React from 'react'

class EyesOnMe extends React.Component {

    focus = () => console.log(`Good!`)
    blurr = () => console.log(`Hey! Eyes on me!`)


    render() {
        return <button onBlur={this.blurr} onFocus={this.focus}></button>
    }
}


export default EyesOnMe