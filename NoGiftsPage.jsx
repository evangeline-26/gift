import { useNavigate } from 'react-router-dom'

const NoGiftsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="main-title">
        Choose Your Gift 🎁
      </h1>
      
      <div className="gifts-container">
        <div 
          className="gift-card"
          onClick={() => navigate('/no/gift1')}
        >
          <div className="gift-icon">💔</div>
          <h2 className="gift-title">Gift 1 — Angry Love Letter</h2>
          <p>You need to read this!</p>
        </div>

        <div 
          className="gift-card"
          onClick={() => navigate('/no/gift2')}
        >
          <div className="gift-icon">🎶</div>
          <h2 className="gift-title">Gift 2 — Song List</h2>
          <p>Our special playlist of love</p>
        </div>
      </div>

      <button 
        className="back-button"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>
    </div>
  )
}

export default NoGiftsPage
