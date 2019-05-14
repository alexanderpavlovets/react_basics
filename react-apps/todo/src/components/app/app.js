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
    // this.state - continue from HERE !!!!

    // add element in array 
    this.setState(({todoData}) => {
      console.log(text)
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
          onItemAdded={(item) => this.addItem(item)}/>
      </div>
    )
  }
}
