import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import Logo from './assets/Logo.png'
import { Tooltip } from 'react-tooltip'
import Content from './components/Content'

const scrollToTop = () => 
{
  window.scrollTo
  (
    {
      top: 0,
      behavior: 'smooth'
    }
  )
}

const scrollToBottom = () => 
{
  window.scrollTo
  (
    {
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    }
  )
}

const scrollToDiv = (id: string) => 
{
  const element = document.getElementById(id)

  if (element) element.scrollIntoView({ behavior: 'smooth' })
}

const SideBar: React.FC = () =>
{
  return(
        <nav className='h-screen sticky top-0 w-24 p-3 bg-secondary flex flex-col justify-between items-center'>
          <Tooltip id="tooltip" place="right" />
          <img src={Logo} className='max-h-20' alt='Logo'  onClick={ scrollToTop }/>
          <div className='flex flex-col items-center gap-8'>
            <Icon 
              icon="tabler:home" 
              className='h-10 w-10 text-white' 
              data-tooltip-id="tooltip" data-tooltip-content="Home"
              onClick={() => scrollToDiv('home')}
            />
            <Icon 
              icon="charm:graduate-cap" 
              className='h-10 w-10 text-white'  
              data-tooltip-id="tooltip" data-tooltip-content="Education"
              onClick={() => scrollToDiv('education')}
            />
            <Icon 
              icon="streamline:programming-script-code-code-angle-programming-file-bracket" 
              className='h-10 w-10 text-white' 
              data-tooltip-id="tooltip" data-tooltip-content="Technologies"
              onClick={() => scrollToDiv('technologies')}
            />
            <Icon 
              icon="bi:briefcase" 
              className='h-10 w-10 text-white'
              data-tooltip-id="tooltip" data-tooltip-content="Projects"
              onClick={() => scrollToDiv('projects')}
            />
            <Icon 
              icon="fluent:contact-card-48-regular"  
              className='h-12 w-12 text-white'
              data-tooltip-id="tooltip" data-tooltip-content="Contact Me!"
              onClick={() => scrollToDiv('contact')}
            />
          </div>
          <Icon 
            icon="mdi:arrow-down"  
            className='h-10 w-10 text-white'
            data-tooltip-id="tooltip" data-tooltip-content="Scroll to Bottom"
            onClick={ scrollToBottom }
          />
        </nav>
  )
}

const Layout: React.FC<{ children: ReactNode }> = ({children}) => 
{
  // style={{ backgroundColor: 'rgba(137, 113, 203, 0.40)' }}
  return (
    <div className="flex w-full">
      <SideBar />
      <div className=' w-full font-abel'>
        {children}
      </div>
    </div>
  )
}

const App: React.FC = () => 
{

  return (
    <>
        <Layout>
          <Content />
        </Layout>
    </>
  )
}

export default App
