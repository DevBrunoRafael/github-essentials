import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Repository from './repository';

const Repositories = ({ repositories, currentLanguage }) => {
  const repos = repositories
    .filter(
      (repo) =>
        currentLanguage === undefined || currentLanguage === repo.language
    )
    .map((repo) => <Repository key={repo.id} repository={repo} />);

  return (
    <>
      <h3>Repositories</h3>
      <Container>{repos}</Container>
    </>
  );
};

Repositories.defaultProps = {
  currentLanguage: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.number,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};

export default Repositories;
