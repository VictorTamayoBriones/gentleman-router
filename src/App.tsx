import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./models"
import { Dashboard } from "./pages/Dashboard"
import { Login } from "./pages/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> }/>
          <Route path="*" element={ <>Not Found</> }/>
          <Route path={ PublicRoutes.LOGIN } element={ <Login/> }/>
          <Route path={ PrivateRoutes.DASHBOARD } element={ <Dashboard/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
