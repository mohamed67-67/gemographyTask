

const UsersReducer = (state=[], action)=>{
    switch(action.type){
        case 'FETCHING':
            return state = action.payload
        default: return state
    }
}

export default UsersReducer