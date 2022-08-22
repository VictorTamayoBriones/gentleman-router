import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthGard } from "./guards"
import { PrivateRoutes, PublicRoutes } from "./models"
import { RoutesWithNotFound } from "./utilities"
import { lazy, Suspense } from "react"

const Login = lazy(()=>import('./pages/Login/Login'));
const Private = lazy(()=>import('./pages/Private/Private'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>} >
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={ <Navigate to={PrivateRoutes.PRIVATE} /> }/>
            <Route path={ PublicRoutes.LOGIN } element={ <Login/> }/>
            <Route element={ <AuthGard/> } >
              <Route path={ `${PrivateRoutes.PRIVATE}/*` } element={ <Private/> }/>
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
