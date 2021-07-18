import {fetchingUsers} from '../../API/GithubUsers'

export const FetchingUsersAction = (PageNumber) => async (dispatch) =>{
    const {data} = await fetchingUsers(PageNumber)

    dispatch({
        type : 'FETCHING',
        payload : data.items
    })
}