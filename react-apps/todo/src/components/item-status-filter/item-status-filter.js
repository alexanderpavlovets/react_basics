import React, {Component} from 'react'

import './item-status-filter.css'

export default class ItemStatusFilter extends Component{

  get buttons() {
    return this.props.filters.map((button) => {
      const isSelectedClass = button.isSelected ? 'btn-info' : 'btn-outline-secondary'
      const key = button.id
      return <button
            key={key}
            type="text"
            className={`btn ${isSelectedClass}`}
            onClick={() => this.props.onChooseFilter(key)}
            >{button.label}</button>
    })
  }

  render() {
    return (
      <div className="btn-group">
        { this.buttons }
      </div>
    )
  }
}
