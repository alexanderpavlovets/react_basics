import React, {Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import ItemStatusFilter from '../item-status-filter'
import './app.css'

export default class App extends Component {

startrId = 1

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.startrId++,
      isVisible: true
    }
  }

  deleteItem = (id) => {
    // to refactor - setState should be "pure function" - no logic, only state changes
    this.setState(({todoData}) => {
      const ind = todoData.findIndex((el) => el.id === id)
      const newArray = [
        ...todoData.slice(0, ind),
        ...todoData.slice(ind + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    // add element in array
    const newArray = [...this.state.todoData, this.createTodoItem(text)]

    this.setState(() => {
      return {
        todoData: newArray
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const ind = arr.findIndex((el) => el.id === id)
      const oldItem = arr[ind]
      const newItem = {...oldItem, [propName]: !oldItem[propName]}
      return [
        ...arr.slice(0, ind),
        newItem,
        ...arr.slice(ind + 1)
      ]
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onSearchEntered = (phrase) => {
    this.setState(({todoData}) => {
      const visibleItems = todoData.map((el) => {
        if (!el.label.toLowerCase().includes(phrase.toLowerCase())) {
          return {...el, isVisible: false}
        }
        return {...el, isVisible: true}
      })
      return {
        todoData: visibleItems
      }
    })
  }

  render() {
    const {todoData} = this.state
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchEntered={(phrase) => this.onSearchEntered(phrase)}/>
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={(id) => this.deleteItem(id)} 
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />

        <ItemAddForm 
          onItemAdded={(text) => this.addItem(text)}/>
      </div>
    )
  }
}
