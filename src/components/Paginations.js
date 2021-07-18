import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { ChangePageNumber } from '../Redux/Actions/PageNumber';
import { useDispatch } from 'react-redux';



// Styles of Pagination from Material UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function Paginations() {

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }
  
  const handleChange = (event, value) => {
    dispatch(ChangePageNumber(value))
  };

  // getting Page Number from redux State
  const pageNumber = useSelector(state => state.PageNumberReducer)
  const dispatch = useDispatch()


  const classes = useStyles();
  
  

  return (
    <div className={classes.root}>
      <Pagination className='Pagination' onClick={scrollToTop} onChange={handleChange} color='primary' boundaryCount={10} count={34} page={pageNumber} shape="rounded" />
    </div>
  );
}
