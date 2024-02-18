import { Routes, Route } from "react-router-dom"

import { Layout } from "./pages/Layout.js"
import { Home } from "./pages/Home.js"
import { About } from "./pages/About.js"
import { Properties } from "./pages/Properties.js"
import { NoMatch } from "./pages/NoMatch.js"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
