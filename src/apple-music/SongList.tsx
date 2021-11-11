import { Song } from './types/types';
import { TheSong } from './TheSong';
import styled from 'styled-components';

type Props = {
  songs: Song[];
};

export const SongList = (props: Props) => {
  const { songs } = props;

  return (
    <Ul>
      {songs.map(song => (
        <li key={song.trackID}>
          <TheSong song={song} />
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul({
  listStyleType: 'none',
  padding: 0,
});
