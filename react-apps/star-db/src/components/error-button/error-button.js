import React, { Component } from 'react'
import './error-button.css'

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0 // make an error
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg my-class"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    )
  }
}