
export const ChangePageNumber = (number) => (dispatch) =>{

    dispatch({
        type: 'CHANGEpAGE',
        payload : number
    })
}