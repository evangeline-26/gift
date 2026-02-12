import { useNavigate } from 'react-router-dom'

const YesGiftsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="main-title">
        Choose Your Gift 🎁
      </h1>
      
      <div className="gifts-container">
        <div 
          className="gift-card"
          onClick={() => navigate('/yes/gift1')}
        >
          <div className="gift-icon">💌</div>
          <h2 className="gift-title">Gift 1 — Love Letter</h2>
          <p>A heartfelt message just for you</p>
        </div>

        <div 
          className="gift-card"
          onClick={() => navigate('/yes/gift2')}
        >
          <div className="gift-icon">🎶</div>
          <h2 className="gift-title">Gift 2 — Song List</h2>
          <p>Our special playlist of love</p>
        </div>

        <div 
          className="gift-card"
          onClick={() => navigate('/yes/gift3')}
        >
          <div className="gift-icon">📸</div>
          <h2 className="gift-title">Gift 3 — Our Memories</h2>
          <p>Pictures with feelings</p>
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

export default YesGiftsPage
