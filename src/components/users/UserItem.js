import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const UserItem = (props) => {
  let { id, login, avatar_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt={id}
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
