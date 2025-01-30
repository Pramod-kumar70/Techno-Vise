import {BrowserRouter as Router,Route ,Routes } from "react-router-dom"
import LandingPage from "../Component/Pages/Landing Page/LandingPage"

function RouteApp() {
  return (
    <Router>
    <Routes>
 
      <Route path="/" element={ <LandingPage /> } />
     
    </Routes>
  </Router>
  )
}

export default RouteApp