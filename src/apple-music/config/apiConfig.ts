const entity = 'musicTrack';
const limit = 8;

export const apiUrl = (queryInput: string) => {
  return `https://itunes.apple.com/search?term=${encodeURI(
    queryInput
  )}&entity=${entity}&limit=${limit}`;
};
