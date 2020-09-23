import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loader from './loader.reducer'

export default combineReducers({
  loader,
  todos,
  visibilityFilter
})
