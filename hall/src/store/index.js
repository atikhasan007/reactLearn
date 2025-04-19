import  { createStore, combineReducers } from 'redux';
const counterReducer = (state = 0 , action ) =>{
    switch(action.type){
        case "counter/increment":{
            return state + action.payload;
        }
        case "counter/decrement" : {
            return state - action.payload;
        }

        default:{
            return state;
        }

    }

}


const initState = {
    bgColor : '#fff',
    textColor : '#000', 
}


const themeReducer = (state = initState, action) =>{
    switch(action.type){
        case "theme/changeBgColor" : {
            return {
                ...state,
                bgColor : action.payload
            }
        }
        case "theme/changeFontColor" : {
            return {
                ...state,
                textColor : action.payload
            }
        }
        case "theme/resetTheme":{
            return initState;
        }
        default:{
            return state;
        }
    }

}


const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,
})


export const store = createStore(rootReducer)
