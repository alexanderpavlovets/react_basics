import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import './random-planet.css'

export default class RandomPlanet extends Component {

  swapiService = new SwapiService()

  state = {
    planet: {}
  }

  constructor() {
    super()
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet})
  }

  updatePlanet = async () => {
    const id = Math.floor(Math.random() * 20) + 2
    const a = await this.swapiService.getPlanet(id)
    this.onPlanetLoaded(a)
  }

  render() {
    const { planet: {id, name, population, rotationPeriod, diameter}} = this.state
    return (
      <div className="random-planet jumbotron rounded" onClick={this.updatePlanet}>
        <img className="planet-image"
             alt = "Can't find planet"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
