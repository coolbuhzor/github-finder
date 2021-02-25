import React from 'react';
import RepoItem from './RepoItems';
import propTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;

Repos.propTypes = {
  repos: propTypes.array.isRequired,
};
