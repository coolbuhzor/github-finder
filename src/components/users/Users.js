import React, { useContext } from 'react';
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';
// users and loading were directly destructured. we could pass in props in the function and do const {users, loading}= props. then reolace users and loading with props.users and props.loading
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={userGrid} className='userGrid'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userGrid = {
  gridGap: '1rem',
};
export default Users;
