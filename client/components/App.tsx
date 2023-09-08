import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ServicesPage from './Services'
import GalleryPage from './Gallery'
import ContactPage from './Contact'
import AddServices from './admin/AddServices'
import Login from './Login'

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/services" element={<AddServices />} />
        </Routes>
      </div>
    </>
  )
}

export default App
