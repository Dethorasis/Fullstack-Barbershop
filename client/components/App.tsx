import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ServicesPage from './Services'
import GalleryPage from './Gallery'
import ContactPage from './Contact'
// import AddServices from './admin/AddServices'
import AdminServices from './admin/Services/AdminServices'
import AdminContact from './admin/Contact/AdminContact'
import AdminGallery from './admin/Gallery/AdminGallery'

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

          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
        </Routes>
      </div>
    </>
  )
}

export default App
