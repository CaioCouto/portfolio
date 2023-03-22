import { useState } from 'react'
import { Header, Main } from './components'

import './App.css'
import { ShowMenu } from './contexts'

function App() {
  const [ showMenu, setShowMenu ] = useState(false)

  return (
    <div className="App">
      <ShowMenu.Provider value={{ showMenu, setShowMenu }}>
        <Header/>
        <Main/>
      </ShowMenu.Provider>
    </div>
  )
}

export default App
