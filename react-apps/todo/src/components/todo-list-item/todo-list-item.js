import React, {Component} from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  onMarkImportant = () => {
    /**
     * @param state - this is variable with link to component state. You can destructure it.
     * pay attention! setState is async from-time-to-time, to change state properly - pass function to it 
     * ALWAYS use function when state is dependent from previous state!
     */
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  }

  render () {
    const { label, onDeleted } = this.props
    const { done, important } = this.state

    let classNames = "todo-list-item"
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}
