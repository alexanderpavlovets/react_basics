import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import PeoplePage from '../people-page';
import './app.css'

export default class App extends Component {
  
  state = {
    hasError: false
  }

  // In Development mode - regualr screen with exception will be shown
  // In Prod mode - react will stop the app and render ErrorIndicator
  // If this didCatch fire - whole app is down. Make didCatch on lower levels to fix it
  componentDidCatch() {
    console.log('component did catch ')
    this.setState({hasError: true})
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    )
  }
}