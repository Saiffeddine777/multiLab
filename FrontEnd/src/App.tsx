
import { pathCerfications, pathContact, pathHomePage, pathPortfolio, pathQualifications, pathServices, pathTeam } from './Route Paths'
import Contact from './features/Contact/Contact'
import Footer from './features/Footer/Footer'
import HomePage from './features/HomePage/HomePage'
import Navbar from './features/Navbar/Navbar'
import PortFolio from './features/Portfolio/PortFolio'
import Certificates from './features/Qualifications/Certficates/Certificates'
import Qualifications from './features/Qualifications/Qualifications'
import Team from './features/Qualifications/Team/Team'
import Services from './features/services/Services'
import {Routes,Route} from "react-router-dom"



function App() {
  return (
    <>    
    <Navbar/>
    <Routes>
       <Route path ={pathHomePage} element ={<HomePage/>}/>
       <Route path = {pathServices} element={<Services/>}/>
       <Route path={pathContact} element={<Contact/>}/>
       <Route path={pathQualifications} element={<Qualifications/>}/>
       <Route path = {pathCerfications} element = {<Certificates/>}/>
       <Route path = {pathTeam} element={<Team/>}/>
       <Route path ={pathPortfolio} element ={<PortFolio/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
