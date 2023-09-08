import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain={'dev-aaqk30w0szx78zcc.us.auth0.com'}
      clientId={'maDBtDpIG4Y6t7itHl9tB5zGWXobevLY'}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/login`,
        audience: `https://login`,
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
