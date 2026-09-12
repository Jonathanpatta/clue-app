import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CluePage from './CluePage.jsx'
import Customize from './Customize.jsx'
import Home from './Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/:slug" element={<CluePage />} />
      </Routes>
    </BrowserRouter>
  )
}
