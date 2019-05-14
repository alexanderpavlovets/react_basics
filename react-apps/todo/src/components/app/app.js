import React, {Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import ItemStatusFilter from '../item-status-filter'
import './app.css'

export default class App extends Component {

  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make Awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  }

  deleteItem = (id) => {
    // to refactor - setState should be "pure function" - no logic, only state changes
    this.setState(({todoData}) => {
      const ind = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, ind), ...todoData.slice(ind + 1)]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    // generate id
    const id = this.state.todoData.map((el) => el.id).sort((a, b) => b - a )[0] + 1
    // add element in array
    const newArray = [...this.state.todoData, {label: text, important: false, id}]
    
    this.setState(() => {
      return {
        todoData: newArray
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)} />

        <ItemAddForm 
          onItemAdded={(text) => this.addItem(text)}/>
      </div>
    )
  }
}
