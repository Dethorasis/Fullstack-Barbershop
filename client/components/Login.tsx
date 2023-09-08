// import { useAuth0 } from '@auth0/auth0-react'
// import { getAuthentication } from '../apis/authenticate'
// import { useEffect, useState } from 'react'

// function Login() {
//   const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
//     useAuth0()

//   const [auth, setAuth] = useState()

//   useEffect(() => {
//     // Fetch contact data from the backend API when the component mounts
//     async function fetchAuth() {
//       try {
//         const data = await getAuthentication()
//         setAuth(data) // Update the state with the fetched data
//       } catch (error) {
//         console.error('Error fetching authentication')
//       }
//     }

//     fetchAuth()
//   }, [])

//   return (
//     <>
//       <li>
//         <button className="bg-blue-200" onClick={loginWithPopup}>
//           Login with Popup
//         </button>
//       </li>
//       <li>
//         <button className="bg-yellow-200" onClick={loginWithRedirect}>
//           Login with Redirect
//         </button>
//       </li>
//       <li>
//         <button className="bg-green-200" onClick={logout}>
//           Logout
//         </button>
//       </li>

//       <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3>

//       {isAuthenticated && (
//         <pre style={{ textAlign: 'start' }}>
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       )}
//     </>
//   )
// }

// export default Login

import { useEffect, useState } from 'react'
import { getAuthentication } from '../apis/authenticate'
import { AdminModel } from '../../models/Admin'
import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0()
  const [auth, setAuth] = useState<AdminModel[]>([])

  useEffect(() => {
    // Fetch contact data from the backend API when the component mounts
    async function fetchAuth() {
      try {
        const data = await getAuthentication()
        setAuth(data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching authentication')
      }
    }

    fetchAuth()
  }, [])

  return (
    <div>
      <li>
        <button className="bg-blue-200" onClick={loginWithPopup}>
          Login with Popup
        </button>
      </li>
      <li>
        <button className="bg-yellow-200" onClick={loginWithRedirect}>
          Login with Redirect
        </button>
      </li>
      <li>
        <button className="bg-green-200" onClick={logout}>
          Logout
        </button>
      </li>

      <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3>

      {isAuthenticated && (
        <pre style={{ textAlign: 'start' }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}

      {isAuthenticated && (
        <div className="min-h-screen bg-gray-100">
          <div className="p-4 rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Log in</h2>
            <ul className="text-lg">
              {auth.map((auth) =>
                user?.sub === auth.password ? (
                  <li
                    key={auth.id}
                    className="border border-gray-300 p-3 mb-2 rounded"
                  >
                    <p>
                      <strong>Username:</strong> {auth.username}
                    </p>
                    <p>
                      <strong>Password:</strong> {auth.password}
                    </p>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
