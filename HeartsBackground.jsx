import { useEffect } from 'react'

const HeartsBackground = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.classList.add('heart')
      heart.innerHTML = '❤️'
      heart.style.left = Math.random() * 100 + 'vw'
      heart.style.animationDuration = (Math.random() * 5 + 8) + 's'
      heart.style.fontSize = (Math.random() * 20 + 15) + 'px'
      heart.style.animationDelay = Math.random() * 5 + 's'
      
      const container = document.querySelector('.hearts-background')
      if (container) {
        container.appendChild(heart)
        
        setTimeout(() => {
          heart.remove()
        }, 13000)
      }
    }

    const interval = setInterval(createHeart, 300)
    
    // Create initial hearts
    for (let i = 0; i < 20; i++) {
      setTimeout(createHeart, i * 200)
    }

    return () => clearInterval(interval)
  }, [])

  return <div className="hearts-background"></div>
}

export default HeartsBackground
