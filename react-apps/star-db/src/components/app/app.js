import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import './app.css'

export default class App extends Component {
  
  state = {
    showRandomPlanet: true,
    selectedPerson: 1,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
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
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={(id) => this.onPersonSelected(id)} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}