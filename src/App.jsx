import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact"
import Privacy from "./Privacy"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App