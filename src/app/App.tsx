import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './app.css'
import { HomePage } from '../pages/home-page'
import { PostPage } from '../pages/post-page'
import { ErrorPage } from '../pages/error-page'
import { WindowWidthContext } from '../contexts/WindowWidthContext'
import { store } from '../store/store'
import { Provider } from 'react-redux'

export const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (e: Event) => {
      setTimeout(function () {
        setWindowWidth(window.innerWidth)
      }, 300)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Provider store={store}>
      <WindowWidthContext.Provider value={{ windowWidth }}>
        <div className="app">
          <Router>
            <main className="app__page">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </main>
          </Router>
        </div>
      </WindowWidthContext.Provider>
    </Provider>
  )
}
