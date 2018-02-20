import React from 'react'
import { render } from 'react-dom'
import App from './components/App/App.jsx'

// Entry point for our application.
// All components that nested in App compomnent will be rendered into 'root' div of index.html
render(
    <App />,
    document.getElementById('root')
)