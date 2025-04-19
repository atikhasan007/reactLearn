
export const changeBgColor = (bgColor) => {
    return {
        type : "theme/changeBgColor",
        payload :  bgColor,

    }
}


export const changTextColor = (color) => {
    return {
        type : "theme/changeFontColor",
        payload : color
    }
}



export const resetTheme = () => {
    return {
        type : 'theme/resetTheme',
    }
}