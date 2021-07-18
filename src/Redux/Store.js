import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import PageNumberReducer from './Reducers/PageNumber'
import UsersReducer from './Reducers/Users'
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
    PageNumberReducer,
    UsersReducer
})


export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

