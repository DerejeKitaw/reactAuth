import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        <div className="page_container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
