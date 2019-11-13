import React, { Component } from 'react';
// {/*10) uses the poster prop as a background image, rendering only the necessary HTML*/}

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
