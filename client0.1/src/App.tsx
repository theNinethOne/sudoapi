// import CodeEditor from "./components/codeEditor"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import CodeEditor from "./components/codeEditor"
import HomePage from "./components/Homepage"
import PromptPage from "./components/promptPage"
import PricingPage from "./components/pricingPage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/codeEditor" element={<CodeEditor/>} />
      {/* <Route path="/promptPage" element={<PromptPage/>} /> */}
      <Route path="/pricingPage" element={<PricingPage/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
