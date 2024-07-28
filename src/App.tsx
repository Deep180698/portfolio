import './App.css'
import Header from './component/Header'
import Objective from './component/Objective'
import ProfileSummary from './component/ProfileSummary'
import Education from './component/Education'
import WorkExperience from './component/WorkExperience'
import TechnicalSkills from './component/TechnicalSkills'
import SpecificCourses from './component/SpecificCourses'
import {  BrowserRouter as Router,Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './component/Home'
import Layout from './component/Layout'
import NotFound from './component/NotFound'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/objectives" element={<Objective />} />
        <Route path="/profilesummary" element={<ProfileSummary />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work_experience" element={<WorkExperience />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Objective />
    //   <ProfileSummary />
    //   <Education />
    //   <WorkExperience />
    //   <TechnicalSkills />
    //   <SpecificCourses />
    // </div>
  );
}

export default App
