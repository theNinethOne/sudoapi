import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Explore from './pages/explore'
import Codepane from './pages/codepane'
import Gui from './pages/gui'
import Docs from './pages/docs'

function App() {
  const [ userPrompt, setUserPrompt ] = useState<String>("")
  const [ ans, setAns ] = useState()

  async function sendPrompt() {
    console.log( userPrompt)
    const res = await axios.get( "http://localhost:3000/", { params : { "prompt" : userPrompt } } )
    console.log( res.data )
    setAns( res.data )
  }

  return (
    <>
    HIIIIIII
      <div>
        <input type="text" onChange={ (e) => setUserPrompt( e.target.value ) }/>
        <button onClick={ () => { sendPrompt() } }>GENERATE</button>
        { ans ? (<div> {ans} </div>) : (<div>Insert Prompt</div>) }
      </div>
      <BrowserRouter>
      HELLOOOOOO
        <Routes>
          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/explore' element={ <Explore />}></Route>
          <Route path='/codepane' element={ <Codepane />}></Route>
          <Route path='/gui' element={ <Gui /> }></Route>
          <Route path='/docs' element={ <Docs /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App