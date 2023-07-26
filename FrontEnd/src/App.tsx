
import { pathCerfications, pathContact, pathHomePage, pathPortfolio, pathQualifications, pathServices, pathTeam, pathToOneCertificate, pathToOneTeamMember, pathToReviews } from './Route Paths'
import Contact from './features/Contact/Contact'
import Footer from './features/Footer/Footer'
import HomePage from './features/HomePage/HomePage'
import Navbar from './features/Navbar/Navbar'
import PortFolio from './features/Portfolio/PortFolio'
import Certificates from './features/Qualifications/Certficates/Certificates'
import OneCertificate from './features/Qualifications/Certficates/OneCertificate/OneCertificate'
import Qualifications from './features/Qualifications/Qualifications'
import Team from './features/Qualifications/Team/Team'
import TeamMember from './features/Qualifications/Team/TeamMember/TeamMember'
import Reviews from './features/reviews/Reviews'
import Services from './features/services/Services'
import {Routes,Route} from "react-router-dom"




function App() {
  return (
    <> 
    <div className='mt-3 mb-3 text-white p-4'>   
    <Navbar/>
    <Routes>
       <Route path ={pathHomePage} element ={<HomePage/>}/>
       <Route path = {pathServices} element={<Services/>}/>
       <Route path={pathContact} element={<Contact/>}/>
       <Route path={pathQualifications} element={<Qualifications/>}/>
       <Route path = {pathCerfications} element = {<Certificates/>}/>
       <Route path = {pathTeam} element={<Team/>}/>
       <Route path ={pathPortfolio} element ={<PortFolio/>}/>
       <Route path ={pathToOneTeamMember} element={<TeamMember/>}/>
       <Route path ={pathToOneCertificate} element ={<OneCertificate/>}/>
       <Route path = {pathToReviews} element ={<Reviews/>}/>
    </Routes>
    <div className="mb-3 mt-10  ">
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default App
