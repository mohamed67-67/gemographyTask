import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment'
import StarIcon from '@material-ui/icons/Star';
import BugReportIcon from '@material-ui/icons/BugReport';



export default function Users() {
  
  const usersArray = useSelector(state => state.UsersReducer)
  return (
    <Fragment>
      <h1 className='header'>Trending Repos</h1>
      {usersArray.map(user => (
        <div key={user.id} className='mainTrial'>
            <div className="avatar">
                <img src={user.owner.avatar_url} alt=""/>
            </div>
            <div className="detalis">
                <h1>{user.name}</h1>
                <h2>{user.description}</h2>
                <div className="rating">
                    <div className="stars">
                        <p>{user.stargazers_count}</p>
                        <StarIcon className='icon star'/>
                    </div>
                    <div className="bugs">
                        <p>{user.open_issues}</p>
                        <BugReportIcon className='icon bug'/>
                    </div>
                    <p>Submitted {moment(user.created_at).fromNow()} by {user.owner.login}</p>
                </div>
            </div>
        </div>
      ))}
    </Fragment>
  );
}
