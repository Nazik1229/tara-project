import React, { Component } from 'react'
import Skin from './skin';

export class Skins extends Component {
  render() {
    return (
        <main>
            {this.props.skins.map(el => (
                <Skin onShowSkin={this.props.onShowSkin} key={el.id} skin={el} />
            ))}
        </main>
    )
  }
}

export default Skins;