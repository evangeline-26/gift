import { useLocation, Link } from 'react-router-dom'

const SongListPage = () => {
  const location = useLocation()
  const isYesPath = location.pathname.includes('/yes')

  // YES Path Playlist (Romantic)
  const yesSongs = [
    { title: "Thangapovea", url: "https://open.spotify.com/track/4YuK8in0FTkqZCDPCOjVa5" },
    { title: "Konji Pesida Venaam", url: "https://open.spotify.com/track/5QoCBy9eUHYkeWpEpzAud9" },
    { title: "Akkam Pakkam", url: "https://open.spotify.com/track/3eeUvZTgP5uJfOMqI3sUVq" },
    { title: "Annal Mele", url: "https://open.spotify.com/track/2WO5nzB7QtKn9ZRc9Jkalt" },
    { title: "Pirai Thedum", url: "https://open.spotify.com/track/4Dd5XLOdAAmURIZSLThPvH" },
    { title: "Appa Song — To my second father", url: "https://open.spotify.com/track/100mqLAIIpLIzPJdLu5IWs" },
    { title: "To My Love", url: "https://open.spotify.com/track/0xttqqTj7ZAGyVkfOYxQ4F" }
  ]

  // NO Path Playlist (Sad/Emotional)
  const noSongs = [
    { title: "🥺", url: "https://open.spotify.com/track/3LP4QpKptfe2yEC7oG5iNa" },
    { title: "🫠", url: "https://open.spotify.com/track/2kOH2QZB7F7I1iVXqwKuBF" },
    { title: "Why", url: "https://open.spotify.com/track/2GYzXSeNa3Y0BfIfS1VJj3" },
    { title: "How", url: "https://open.spotify.com/track/4Jr0O3zgoKEk71sIlABkLp" },
    { title: "My life", url: "https://open.spotify.com/track/4gvosBEwPcKZfcX3Qf9vgt" },
    { title: "Special Track", url: "https://open.spotify.com/track/6EwRpLL5QThnF2k1sZzQpC" }
  ]

  const songs = isYesPath ? yesSongs : noSongs
  const backLink = isYesPath ? '/yes-gifts' : '/no-gifts'

  console.log("Current path:", location.pathname); // Debugging

  return (
    <div className="container">
      <div className="song-list-container">
        <h1 className="song-list-title">Our Love Playlist 🎶</h1>
        
        <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
          {songs.map((song, index) => (
            <a 
              key={index} 
              href={song.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="song-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="song-number">{index + 1}</div>
              <div className="song-name">{song.title}</div>
              <div className="song-icon">❤️</div>
              <div className="song-icon">▶️</div>
            </a>
          ))}
        </div>
      </div>

      <Link 
        to={backLink}
        className="back-button"
        style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
      >
        ← Back to Gifts
      </Link>
    </div>
  )
}

export default SongListPage
