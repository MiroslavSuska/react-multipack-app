const getCategoryUrl = (category: string) =>
  `https://api.chucknorris.io/jokes/random?category=${category}`;

export const urls = {
  categoryJokeURL: 'https://api.chucknorris.io/jokes/categories',
  randomJokeURL: 'https://api.chucknorris.io/jokes/random',
  randomJokeFromCategoryURL: getCategoryUrl,
};
