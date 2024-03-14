import Picture from '../assets/1x1.png'
import { Icon } from '@iconify/react';
import './component.css'
import Education from './education.json'
import Project from './projects.json'

const Content:React.FC = () =>
{
    return(
        <>
            <Home />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </>
    )
}

export default Content

const Home: React.FC = () => 
{
    return (
        <div id='home' className='min-h-screen w-full flex flex-wrap items-center justify-center gap-6 px-4' >
            <img src = {Picture} className='max-h-[30rem] rounded-full drop-shadow-2xl' alt='Picture' />
            <div className='flex flex-col gap-4'>
                <h4 className='text-2xl font-bold'>Hello World!</h4>
                <h1 className='text-5xl'>I'm <span className='text-primary font-black'>Sherom</span> Granada</h1>
                <div className='max-w-[40rem] text-2xl text-justify font-normal '>A <span className='text-primary font-black'>Software Engineer</span> passionate about building innovative digital solutions. With expertise in frontend development, I specialize in crafting intuitive user interfaces using a variety of technologies. Let's connect and create something extraordinary!</div>
                <div className='flex justify-between max-w-[40rem]'>
                    <button
                        className='border-primary border-2 py-3 px-6 text-xl rounded-3xl'
                    >
                        Resume
                    </button>
                    <div className='flex gap-2 md:gap-24'>
                        <Icon 
                            icon="mdi:github" 
                            className='h-14 w-14 text-primary cursor-pointer'
                            data-tooltip-id="tooltip" data-tooltip-content="Go to my Github"
                            onClick={() => window.open('https://github.com/SheromG', '_blank')}
                        />
                        <Icon 
                            icon="mdi:linkedin"  
                            className='h-14 w-14 text-primary'
                            data-tooltip-id="tooltip" data-tooltip-content="Go to my LinkedIn"
                            onClick={() => window.open('https://www.linkedin.com/in/david-sherom-granada-35a62a2b7/', '_blank')}
                        />
                        <Icon 
                            icon="tabler:brand-leetcode" 
                            className='h-14 w-14 text-primary'
                            data-tooltip-id="tooltip" data-tooltip-content="Go to my LeetCode"
                            onClick={() => window.open('https://leetcode.com/SheromG/', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const About: React.FC = () =>
{
    return(
        <div id='education' className='min-h-screen w-full px-4 pt-6'>
            <h1 className='text-5xl font-bold text-center'>My Education and Awards</h1>
            <div className='mt-16 flex justify-center items-center'>
                <div className='wrapper  flex flex-col gap-6'>
                {
                    Education.map((item, index)=>
                    (
                        <div 
                            key={index}
                            className='node '
                        >
                            <h1 className='text-4xl font-black text-primary'>{item.school}</h1>
                            <p className='text-2xl font-bold text-secondary'>{item.degree} - <span className=' font-normal'>{item.award}</span></p>
                            <p className='text-xl text-tertiary'>{item.isGraduated  ? `Graduate, ${item.end}` : `Estimated Graduation: ${item.end}`}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

const Technologies: React.FC = () =>
{
    return(
        <div id='technologies' className='min-h-screen w-full px-4 pt-6'>
            <h1 className='text-5xl font-bold text-center'>My Tech Stack</h1>
            <h1 className='text-xl text-center'>Tools and Frame Works</h1>

            <div className='w-full flex justify-center mt-12 '>
                <div className='w-full mx-auto grid grid-cols-3 md:grid-cols-5 place-items-center gap-10'>
                    <Icon icon="devicon:html5" className='h-24 w-24'/>
                    <Icon icon="devicon:css3" className='h-24 w-24' />
                    <Icon icon="devicon:javascript" className='h-24 w-24'/>
                    <Icon icon="vscode-icons:file-type-reactjs" className='h-24 w-24'/>
                    <Icon icon="devicon:tailwindcss" className='h-24 w-24'/>
                    <Icon icon="devicon:firebase" className='h-24 w-24'/>
                    <Icon icon="devicon:git" className='h-24 w-24'/>
                    <Icon icon="devicon:github" className='h-24 w-24'/>
                    <Icon icon="devicon:python" className='h-24 w-24'/>
                    <Icon icon="devicon:cplusplus" className='h-24 w-24'/>
                    <Icon icon="devicon:vscode" className='h-24 w-24'/>

                    <Icon icon="logos:mysql" className='h-24 w-24'/>
                    <Icon icon="devicon:mongodb-wordmark" className='h-24 w-24'/>
                    <Icon icon="devicon:npm-wordmark" className='h-24 w-24'/>
                    <Icon icon="vscode-icons:file-type-vite" className='h-24 w-24'/>
                    <Icon icon="devicon:vercel-wordmark" className='h-24 w-24'/>
                    <Icon icon="devicon:photoshop"  className='h-24 w-24'/>
                    <Icon icon="skill-icons:illustrator"  className='h-24 w-24'/>
                    <Icon icon="skill-icons:premiere"  className='h-24 w-24'/>
                    <Icon icon="devicon:xd" className='h-24 w-24'/>
                </div>
            </div>
        </div>
    )
}

const Projects: React.FC = () =>
{
    return(
        <div id='projects' className='min-h-screen w-full px-4 pt-6'>
            <h1 className='text-5xl font-bold text-center mb-12'>My projects</h1>

            <div className='flex flex-wrap gap-12 w-full justify-center'>
                {
                    Project.map((item, index) =>
                    (
                        <div
                            key={index}
                            className='max-w-96 h-[35rem] bg-tertiary rounded-[1.25rem] border-4 border-primary flex flex-col items-center justify-between p-3 gap-6'
                        >
                            <div className='bg-black w-full mx-3 h-96 rounded-[0.5rem]'></div>
                            <div className='mx-auto max-w-[90%] flex flex-col h-full justify-between'>
                                <h1 className = ' text-4xl font-black text-white'>{item.title}</h1>
                                <div className=' text-lg text-justify text-white opacity-75'>{item.description}</div>
                                <button
                                    className=' w-full border-primary border-2 py-3 px-6 text-xl rounded-3xl'
                                >
                                    Visit Website
                                </button>
                                <button
                                    className=' w-full border-primary border-2 py-3 px-6 text-xl rounded-3xl'
                                >
                                    Visit Github Repository
                                </button>
                                
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

const Contact: React.FC = () =>
{
    return(
        <div id='contact' className='min-h-screen w-full px-4 pt-6'>
            <h1 className='text-5xl font-bold text-center'>Contact Me</h1>
        </div>
    )
}