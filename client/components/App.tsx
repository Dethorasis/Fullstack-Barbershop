import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ServicesPage from './Services'
import GalleryPage from './Gallery'
import ContactPage from './Contact'
import AdminServices from './admin/Services/AdminServices'
import AdminContact from './admin/Contact/AdminContact'
import AdminGallery from './admin/Gallery/AdminGallery'
import Login from './Login'

const isAuthenticated = () => {
  return true // TODO: Add logic to determine authentication status here
}

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

          <Route
            path="/admin/services"
            element={
              isAuthenticated() ? <AdminServices /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin/contact"
            element={
              isAuthenticated() ? <AdminContact /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin/gallery"
            element={
              isAuthenticated() ? <AdminGallery /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
