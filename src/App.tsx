import { ReactNode } from 'react'
import { BrowserRouter, Routes, Route , Navigate, useNavigate } from 'react-router-dom'; 
import { Icon } from '@iconify/react';
import Logo from './assets/Logo.png';
import { Tooltip } from 'react-tooltip'

import Home from './components/home';
import About from './components/about';

const SideBar: React.FC = () =>
{
  const navigate = useNavigate();
  return(
        <nav className='h-screen w-24 p-3 bg-secondary flex flex-col justify-between items-center'>
          <Tooltip id="tooltip" place="right" />
          <img src={Logo} className='max-h-20' alt='Logo'/>
          <div className='flex flex-col items-center gap-8'>
            <Icon 
              icon="tabler:home" 
              className='h-10 w-10 text-white' 
              data-tooltip-id="tooltip" data-tooltip-content="Home"
              onClick={()=>{navigate('/Home')}}
            />
            
            <Icon 
              icon="f7:person"  
              className='h-10 w-10 text-white'  
              data-tooltip-id="tooltip" data-tooltip-content="About"
              onClick={()=>{navigate('/About')}}
            />
            
            <Icon 
              icon="streamline:programming-script-code-code-angle-programming-file-bracket" 
              className='h-10 w-10 text-white' 
              data-tooltip-id="tooltip" data-tooltip-content="Technologies"
              onClick={()=>{navigate('/Technologies')}}
            />
            <Icon 
              icon="bi:briefcase" 
              className='h-10 w-10 text-white'
              data-tooltip-id="tooltip" data-tooltip-content="Projects"
              onClick={()=>{navigate('/Projects')}}
            />
            <Icon 
              icon="fluent:contact-card-48-regular"  
              className='h-12 w-12 text-white'
              data-tooltip-id="tooltip" data-tooltip-content="Contact Me!"
              onClick={()=>{navigate('/Contact')}}
            />
          </div>
          <Icon 
            icon="mdi:arrow-down"  
            className='h-10 w-10 text-white'/>
        </nav>
  )
}

const Layout: React.FC<{ children: ReactNode }> = ({children}) => 
{
  return (
    <div className="flex w-full">
      <SideBar />
      <div className='bg-tertiary w-full font-abel'>
        {children}
      </div>
    </div>
  )
}

const App: React.FC = () => 
{

  return (
    <div className='flex'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home /> } />
            <Route path="/About" element={<About /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
