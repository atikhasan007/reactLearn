const initState = {
    bgColor : '#fff',
    textColor : '#000', 
}



export const themeReducer = (state = initState, action) =>{
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