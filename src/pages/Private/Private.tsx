import { lazy } from "react"
import { Route } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import { RoutesWithNotFound } from "../../utilities"

const Home = lazy(()=>import('./Home/Home'));
const Dashboard = lazy(()=>import('./Dashboard/Dashboard'));

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={ PrivateRoutes.DASHBOARD } />
      <Route path={ PrivateRoutes.DASHBOARD } element={ <Dashboard/> } />
      <Route path={ PrivateRoutes.HOME } element={ <Home/> } />
    </RoutesWithNotFound>
  )
}
export default Private