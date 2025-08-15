import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PosterProvider } from './data/postersContext.jsx';
import { GenreRelProvider } from './data/relContext.jsx';
import { GenreProvider } from './data/genresContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PosterProvider>
      <GenreProvider>
        <GenreRelProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GenreRelProvider>
      </GenreProvider>
    </PosterProvider>
  </StrictMode>,
)
