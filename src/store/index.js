import {createStore,applyMiddleware} from 'redux'
import thunkMiidleware from 'redux-thunk'


import rootReducer from '../reducers'

const store =createStore(rootReducer,applyMiddleware(thunkMiidleware))

export default store;