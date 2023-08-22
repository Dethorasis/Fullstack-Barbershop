import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ServicesPage from './Services'

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
