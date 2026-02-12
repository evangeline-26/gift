import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PhotoGalleryPage = () => {
  const navigate = useNavigate()
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const photos = [
    {
      filename: "first_birthday.jpg",
      caption: "🎂 Celebrate with you 2021 — even with anger and hurting, we stayed together 💔❤️"
    },
    {
      filename: "official_home.jpg",
      caption: "🏡 You took me to your home and introduced me to amma & appa 💕🙏"
    },
    {
      filename: "saree.jpg",
      caption: "👗 First costly gift ever from you ✨💝"
    },
    {
      filename: "lust.jpg",
      caption: "🔥 Just to be connective with you ❤️🔥"
    },
    {
      filename: "property.jpg",
      caption: "🏠 Finally, this Joshna is whole for you 💍💖"
    },
    {
      filename: "sacrifices.jpg",
      caption: "🩸 I fought for you, I sacrificed for you 💔💪"
    },
    {
      filename: "viral_fever.jpg",
      caption: "🤒 First severe fever — you took me to Erode, cared for me when I was unconscious 😢❤️"
    },
    {
      filename: "love.jpg",
      caption: "💞 No one can love me like you 🥰"
    },
    {
      filename: "jasmine.jpg",
      caption: "🌸 Your most favourite gift to me 💐"
    },
    {
      filename: "my_king.jpg",
      caption: "👑 My forever love, my king ❤️"
    },
    {
      filename: "your_queen.jpg",
      caption: "👸 I want to be yours forever 💍"
    },
    {
      filename: "success.jpg",
      caption: "🏆 After you, I got all my success ✨"
    },
    {
      filename: "tonsil.jpg",
      caption: "🏥 Last face I saw before surgery and first after waking up 😭❤️"
    },
    {
      filename: "appa.jpg",
      caption: "🙏 Finally, appa blessed us 💖"
    },
    {
      filename: "forever.jpg",
      caption: "♾️ You and me — forever 💑"
    }
  ]

  const createConfetti = () => {
    const colors = ['#ff69b4', '#ff1493', '#dc143c', '#ffd700', '#ff6b6b']
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div')
        confetti.className = 'confetti'
        confetti.style.left = Math.random() * 100 + '%'
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.animationDelay = Math.random() * 2 + 's'
        document.body.appendChild(confetti)
        
        setTimeout(() => confetti.remove(), 3000)
      }, i * 30)
    }
  }

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo)
    createConfetti()
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <div className="container">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Beautiful Memories 💕</h1>
        
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="photo-card"
              onClick={() => handlePhotoClick(photo)}
            >
              <img 
                src={`/photos/${photo.filename}`}
                alt={photo.caption}
                className="photo-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23ffb6c1"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%23dc143c"%3E❤️ Memory %23' + (index + 1) + ' ❤️%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="photo-caption">
                <p className="photo-caption-text">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="back-button"
        onClick={() => navigate('/yes-gifts')}
      >
        ← Back to Gifts
      </button>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img 
              src={`/photos/${selectedPhoto.filename}`}
              alt={selectedPhoto.caption}
              className="modal-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23ffb6c1"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="48" fill="%23dc143c"%3E❤️ Our Memory ❤️%3C/text%3E%3C/svg%3E'
              }}
            />
            <div className="modal-caption">
              {selectedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGalleryPage
