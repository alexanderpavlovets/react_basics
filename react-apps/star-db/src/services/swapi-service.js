export default class SwapiService {

  _apiBase = 'https://swapi.co/api'

  async getResource(url) {
    const resp = await fetch(`${this._apiBase}${url}`)

    if (!resp.ok) {
      throw new Error(`Could not fetch ${url}. Got ${resp.status}`)
    }
    const body = await resp.json()
    return body
  }

  async getAllPeople() {
    const resp = await this.getResource(`/people/`)
    return resp.results.map(this._transformPerson)
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const resp = await this.getResource(`/planets/`)
    return resp.results.map(this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const resp = await this.getResource(`/starships/`)
    return resp.results.map(this._transformStartship)
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`)
    return this._transformStartship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStartship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}
