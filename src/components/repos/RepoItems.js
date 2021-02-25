import React from 'react';
import propTypes from 'prop-types';

const RepoItems = ({ repo }) => {
  console.log({ repo });

  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItems;

RepoItems.propTypes = {
  repo: propTypes.object.isRequired,
};
