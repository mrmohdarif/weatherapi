import { useState } from 'react'
import './App.css'
import { WeatherSearchPage } from './pages/WeatherSearchPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherSearchPage />
    </>
  )
}

export default App
