import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import YesGiftsPage from './pages/YesGiftsPage'
import NoGiftsPage from './pages/NoGiftsPage'
import LoveLetterPage from './pages/LoveLetterPage'
import AngryLetterPage from './pages/AngryLetterPage'
import SongListPage from './pages/SongListPage'
import PhotoGalleryPage from './pages/PhotoGalleryPage'
import HeartsBackground from './components/HeartsBackground'

function App() {
  return (
    <>
      <HeartsBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes-gifts" element={<YesGiftsPage />} />
        <Route path="/no-gifts" element={<NoGiftsPage />} />
        
        {/* YES Path Routes */}
        <Route path="/yes/gift1" element={<LoveLetterPage />} />
        <Route path="/yes/gift2" element={<SongListPage />} />
        <Route path="/yes/gift3" element={<PhotoGalleryPage />} />
        
        {/* NO Path Routes */}
        <Route path="/no/gift1" element={<AngryLetterPage />} />
        <Route path="/no/gift2" element={<SongListPage />} />
      </Routes>
    </>
  )
}

export default App
