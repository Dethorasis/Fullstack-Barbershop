import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0()

  return (
    <>
      <li>
        <button className='bg-blue-200' onClick={loginWithPopup}>Login with Popup</button>
      </li>
      <li>
        <button className='bg-yellow-200' onClick={loginWithRedirect}>Login with Redirect</button>
      </li>
      <li>
        <button className='bg-green-200' onClick={logout}>Logout</button>
      </li>

      <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3>

      {isAuthenticated && (
        <pre style={{ textAlign: 'start' }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </>
  )
}

export default Login
