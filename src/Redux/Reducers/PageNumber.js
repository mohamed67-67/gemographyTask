


const PageNumberReducer = (number = 1, action) =>{
    switch(action.type){
        case 'CHANGEpAGE':
            return number = action.payload
        default: return number
    }
}

export default PageNumberReducer;