import React, {Component} from 'react'
import './search-panel.css'

class SearchPanel extends Component {

  onValueChange = (event) => {
    this.props.onSearchEntered(event.target.value)
  }

  render() {
    return (
      <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={this.onValueChange} />
    )
  }
}

export default SearchPanel