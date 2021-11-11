export interface Song {
  trackID: number;
  artist: string;
  audioFile: string;
  trackPicture?: string;
  title: string;
  album: string;
}

export type SongFromAPI = {
  trackId: number;
  artistName: string;
  previewUrl: string;
  artworkUrl100?: string;
  trackName: string;
  collectionName: string;
  kind?: string;
};
