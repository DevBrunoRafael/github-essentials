import React, { useState } from 'react';
import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import getLanguages from '../../services/utils';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: 'nome login',
    name: 'nome',
    avatar_url: 'https://avatars.githubusercontent.com/u/88515518?v=4',
    followers: 1,
    following: 2,
    company: 'trabalho',
    blog: 'blog',
    location: 'localidade',
  };

  const repos = [
    {
      id: 1,
      name: 'repo 1',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'Java',
    },
    {
      id: 2,
      name: 'repo 2',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'Html',
    },
    {
      id: 3,
      name: 'repo 3',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'CSS',
    },
    {
      id: 4,
      name: 'repo 4',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'JavaScript',
    },
    {
      id: 6,
      name: 'repo 5',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'typescript',
    },
    {
      id: 7,
      name: 'repo 6',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'ScSS',
    },
    {
      id: 8,
      name: 'repo 7',
      description: 'descrição',
      html_url: 'https://google.com',
      language: 'Java',
    },
  ];

  const languages = getLanguages(repos);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories repositories={repos} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
