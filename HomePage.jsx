import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="main-title">
        💖 Will you be my Valentine? 💖
      </h1>
      
      <div className="button-container">
        <button 
          className="btn btn-yes"
          onClick={() => navigate('/yes-gifts')}
        >
          ❤️ YES
        </button>
        <button 
          className="btn btn-no"
          onClick={() => navigate('/no-gifts')}
        >
          💔 NO
        </button>
      </div>
    </div>
  )
}

export default HomePage
