import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // different different path ko link karna browser ke sath hii browserrouter ka kaam h
  <BrowserRouter>
     <App />
  </BrowserRouter>
 
 
 
)
