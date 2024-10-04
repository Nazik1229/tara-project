import React, { Component } from 'react'

export class Skin extends Component {
  render() {
    return (
      <div className='skin'>
        <img 
          src={"./img/" + this.props.skin.img} 
          alt={`Скин ${this.props.skin.title}`}
          onClick={() => this.props.onShowSkin(this.props.skin)}
        />
        <h2>{this.props.skin.title}</h2>
        <p>{this.props.skin.category}</p>
        <p className='price'>{this.props.skin.price}</p>
      </div>
    )
  }
}

export default Skin;