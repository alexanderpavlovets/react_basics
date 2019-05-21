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
    ],
    filterData: [
      {id: 1, label: 'All', isSelected: true},
      {id: 2, label: 'Active', isSelected: false},
      {id: 3, label: 'Done', isSelected: false}
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.startrId++,
      done: false,
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
        if (!el.label.toLowerCase().includes(phrase.toLowerCase().trim())) {
          return {...el, isVisible: false}
        }
        return {...el, isVisible: true}
      })
      return {
        todoData: visibleItems
      }
    })
  }

  onChooseFilter = (id) => {
    this.setState(({todoData, filterData}) => {
      const filters = filterData.map((el) => {
        return {
          ...el,
          isSelected: el.id === id ? true : false
        }
      })
      const selectedFilter = filters.find((el) => el.isSelected).label
      const todos = todoData.map((el) => {
        if (selectedFilter === 'All') {
          return {...el, isVisible: true}
        } else {
          return {...el, isVisible: selectedFilter === 'Done' ? el.done : !el.done}
        }
      })
      return {
        filterData: filters,
        todoData: todos
      }
    })
  }

  render() {
    const {todoData, filterData} = this.state
    const doneCount = todoData.filter((el) => el.done).length
    
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchEntered={(phrase) => this.onSearchEntered(phrase)}/>
          <ItemStatusFilter 
            filters={filterData}
            onChooseFilter={(id) => this.onChooseFilter(id)}/>
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
