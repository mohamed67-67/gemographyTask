import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchingUsersAction } from '../Redux/Actions/UsersAction';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paginations from './Paginations';
import Users from './Users';


function Main() {

    const dispatch = useDispatch()
    const usersArray = useSelector(state => state.UsersReducer)
    const PageNumber = useSelector(state => state.PageNumberReducer)
    
    

    useEffect(()=>{
        dispatch(FetchingUsersAction(PageNumber))
    },[PageNumber,dispatch])

    return (
        ! usersArray.length ? <CircularProgress className='CircularProgress'/> :
            <Fragment>
                <Users/>
                <Paginations/>
            </Fragment>
        )
    }
    
export default Main