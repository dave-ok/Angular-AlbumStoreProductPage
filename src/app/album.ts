export interface Album {
  id: number,
  artist: string,
  album: {
    name: string,
    realeaseDate: string,
    coverImage: string,
    tracks: [Track]
  }
}

interface Track {
  trackNumber: number,
  trackName: string,
  trackLength: string,
  trackPrice: number,
}
