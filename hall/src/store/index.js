import  { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/counter';
import { themeReducer } from './reducers/theme';
import {composeWithDevTools} from '@redux-devtools/extension'

const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,
})


export const store = createStore(rootReducer , composeWithDevTools())
