import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/user/Login"
import Trace from "./pages/trace/Trace"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/trace" element={<Trace/>}/>
    </Routes>

    </BrowserRouter>
  )

}

export default App
