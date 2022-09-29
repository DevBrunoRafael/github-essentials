import { langColors } from './config';

const getLanguages = (repos) => {
  let stats = repos
    .map((repo) => repo.language)
    .reduce(
      (data, languages) => ({
        ...data,
        [languages]: (data[languages] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};

export default getLanguages;
