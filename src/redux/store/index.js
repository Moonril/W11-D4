import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'
import searchReducer from '../reducers/search'

const uniqueReducer = combineReducers({
  favourite: favouritesReducer,
  search: searchReducer,
})


const store = configureStore({
  reducer: uniqueReducer,
})

export default store
