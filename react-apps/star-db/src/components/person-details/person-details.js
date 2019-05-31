import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service';
import './person-details.css'
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    person: null,
    isPersonLoaded: null
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    // IMPORTANT! If statement is obligatory! 
    // If is needed for prevent infinite loop
    if (this.props.personId !== prevProps.personId) {
      this.setState({isPersonLoaded: false})
      this.updatePerson()
    }
  }

  updatePerson() {
    const {personId} = this.props
    if (!personId) {
      return
    }

    this.swapiService.getPerson(personId)
      .then((person) => {
        this.setState({person, isPersonLoaded: true})
      })
  }

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    if (!this.state.isPersonLoaded) {
      return <Spinner />
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.person

    return (
      <div className="person-details card">
        <img className="person-image" alt="Peson details not found"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
