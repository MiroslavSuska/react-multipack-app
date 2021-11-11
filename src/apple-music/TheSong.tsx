import { Song } from './types/types';
import { theme } from '../theme';
import styled from 'styled-components';

type Props = {
  song: Song;
};

export const TheSong = (props: Props) => {
  const { song } = props;

  const formatSong = (song: Song): string => {
    const songHeader = song.artist + ' - ' + song.title;
    return shortenText(songHeader, 90);
  };

  const shortenText = (str: string, length = 60): string => {
    if (str.length >= length) {
      return str.substr(0, length) + ' ...';
    } else return str;
  };

  return (
    <DivSong>
      <DivInsideWrap>
        <h4>{formatSong(song)}</h4>
        <DivPlayer>
          {song.trackPicture && <img src={song.trackPicture} alt='song picture' />}

          <audio src={song.audioFile} controls />
        </DivPlayer>
      </DivInsideWrap>

      <DivSongFooter>{shortenText(song.album)}</DivSongFooter>
    </DivSong>
  );
};

const DivSong = styled.div({
  color: theme.secondaryDark,
  boxSizing: 'border-box',
  maxWidth: '500px',
  margin: '0 auto 25px',
  backgroundColor: theme.whiteColor,
  borderRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  border: `2px solid ${theme.blackColor}`,
});

const DivInsideWrap = styled.div({
  padding: '25px',
  '@media all and (max-width: 700px)': {
    padding: '15px 10px',
  },
});

const DivPlayer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    border: `2px solid ${theme.blackColor}`,
    borderRadius: '8px',
    maxWidth: '120px',
  },
  audio: {
    outline: 'none',
    maxWidth: '350px',
    width: '100%',
  },

  '@media all and (max-width: 520px)': {
    flexDirection: 'column',

    audio: {
      marginTop: '20px',
    },
  },
});

const DivSongFooter = styled.div({
  backgroundColor: theme.blackColor,
  padding: '15px 10px',
  fontSize: '15px',
});
