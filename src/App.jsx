import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Services from './Pages/Services'
import Eror404 from './Pages/Eror404'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Contact from './Pages/Contact'


const App = () => {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '*' element = {<Eror404 />} />
        <Route path = '/project' element = {<Project /> }/>
        <Route path ='/services' element = {<Services /> } />
        <Route path ='/contact' element = {<Contact />} />
        <Route path ='/privacy' element = {<Privacy />} />
        <Route path ='/terms' element = {<Terms />} />
      </Routes>
      
    </>
  )
}

export default App
