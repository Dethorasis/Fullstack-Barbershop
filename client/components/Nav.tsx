import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="py-4">
      <div className="max-w-10-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-center">
            Rishi`s <br></br> BARBERSHOP
          </p>
        </div>
        <div className="flex items-center space-x-16 text-2xl">
          <NavLink to="/" className="text-center">
            Home
          </NavLink>
          <NavLink to="/services" className="text-center">
            Services
          </NavLink>
          <NavLink to="/gallery" className="text-center">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="text-center">
            Contact
          </NavLink>
        </div>
        <div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
            APPOINTMENT
          </button>
        </div>
      </div>
    </nav>
  )
}
