import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ShowServices from './Services' // Import the ShowServices component

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ShowServices />} />{' '}
        </Routes>
      </div>
    </>
  )
}

export default App
