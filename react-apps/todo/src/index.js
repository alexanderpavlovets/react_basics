import React from 'react' // here for compiler - JSX uses this library
import ReactDOM from 'react-dom'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
  return <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'))
