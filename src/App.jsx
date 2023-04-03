import { useState } from 'react'
import { Footer, Header, Main } from './components'

import './App.css'
import { ShowMenu } from './contexts'

function App() {
  const [ showMenu, setShowMenu ] = useState(false)

  return (
    <div className="App">
      <ShowMenu.Provider value={{ showMenu, setShowMenu }}>
        <Header/>
        <Main/>
        <Footer/>
      </ShowMenu.Provider>
    </div>
  )
}

export default App
