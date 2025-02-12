import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [ userPrompt, setUserPrompt ] = useState<String>("")

  async function sendPrompt() {
    await axios.get( "/")
  }

  return (
    <>
      <div>
        <input type="text" onChange={ (e) => setUserPrompt( e.target.value ) }/>
        <button onClick={ () => { sendPrompt() } }>GENERATE</button>
      </div>
    </>
  )
}

export default App