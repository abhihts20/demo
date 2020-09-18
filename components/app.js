import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './layout.module.css'

const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
    <AddTodo />
    <br/>
    <Footer />
    <br/>
    <VisibleTodoList />
    </header>
  </div>
)

export default App
