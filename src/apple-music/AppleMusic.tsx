import { SearchForm } from './SearchForm';
import { Song, SongFromAPI } from './types/types';
import { SongList } from './SongList';
import { apiUrl } from './config/apiConfig';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const AppleMusic = () => {
  const [songs, setSongs] = useState([]);

  const extractData = ({
    trackId: trackID,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: trackPicture,
    trackName: title,
    collectionName: album,
  }: SongFromAPI) => {
    return { trackID, artist, audioFile, trackPicture, title, album } as Song;
  };

  const handleSearch = (queryInput: string) => {
    axios.get(apiUrl(queryInput)).then(response => {
      let apiSongs = response.data.results
        .filter((song: SongFromAPI) => (song.kind = 'song'))
        .map((song: SongFromAPI) => extractData(song));

      setSongs(apiSongs);
    });
  };

  return (
    <DivOuter>
      <h1>Apple music</h1>

      <SearchForm onHandleSearch={handleSearch} />
      <SongList songs={songs} />
    </DivOuter>
  );
};

const DivOuter = styled.div({
  marginBottom: '50px',
});
