import React from 'react'

class Spaceship extends React.Component {
  render(){
    let colors = this.props.colors.map((color)=>{
      return <li> {color} </li>
    })
    return (
        <div>
          <h1> Name: {this.props.name} </h1>
          <p> Speed: {this.props.speed} </p>
          <p> hasRockets? {this.props.hasRockets} </p>
          <ul>
            {colors}
          </ul>
        </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
