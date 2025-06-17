import { BrowserRouter, Route, Routes } from "react-router-dom"
import CodeEditor from "./components/codeEditor"
import HomePage from "./components/Homepage"
import PricingPage from "./components/pricingPage"
import PromptInteractivePage from "./components/promptPage"
import FormsPage from "./components/forms"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/codeEditor" element={<CodeEditor/>} />
      <Route path="/promptInteractivePage" element={<PromptInteractivePage/>} />
      <Route path="/pricingPage" element={<PricingPage/>} />
      <Route path="/formsPage" element={<FormsPage/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
