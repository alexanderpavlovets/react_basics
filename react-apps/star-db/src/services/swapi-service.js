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
    return resp.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  async getAllPlanets() {
    const resp = await this.getResource(`/planets/`)
    return resp.results
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  async getAllStarships() {
    const resp = await this.getResource(`/starships/`)
    return resp.results
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }

}
