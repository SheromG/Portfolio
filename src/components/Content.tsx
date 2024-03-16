import React, { useRef, useState, useEffect } from 'react'
import Picture from '../assets/1x1.png'
import { Icon } from '@iconify/react'
import './component.css'
import Education from './education.json'
import Project from './projects.json'
import Tech from './tech.json'

import PDF from '../assets/Resume.pdf'

const Content:React.FC = () =>
{
    return(
        <div className='ml-12 md:ml-24'>
            <Home />
            <About />
            <Technologies />
            <Projects />
        </div>
    )
}

export default Content

const Home: React.FC = () => 
{
    return (
        <div id='home' className='min-h-screen w-full flex flex-wrap items-center justify-center gap-6 px-4' >
            <img src = {Picture} className='max-h-64 md:md:max-h-[30rem] rounded-full shadow-2xl shadow-primary' alt='Picture' />
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl md:text-2xl font-bold'>Hello World!</h4>
                <h1 className='text-3xl md:text-5xl'>I'm <span className='text-primary font-black'>Sherom</span> Granada</h1>
                <div className='max-w-[40rem] text-xl md:text-2xl text-justify font-normal '>A <span className='text-primary font-black'>Software Engineer</span> passionate about building innovative digital solutions. With expertise in frontend development, I specialize in crafting intuitive user interfaces using a variety of technologies.<br/><br/> Let's connect and create something extraordinary!</div>
                <div className='flex justify-between max-w-[40rem]'>
                    <button
                        className='border-primary bg-primary text-white border-2 md:border-4 py-1 md:py-3 px-4 md:px-6 text-md md:text-xl rounded-3xl font-bold'
                        onClick={() => window.open(PDF)}
                    >
                        Resume
                    </button>
                    
                    <div className='flex gap-2 md:gap-24 items-center'>
                        <Icon 
                            icon="mdi:github" 
                            className='h-10 md:h-14 w-10 md:w-14 text-primary cursor-pointer'
                            data-tooltip-id="tooltip" data-tooltip-content="Go to my Github"
                            onClick={() => window.open('https://github.com/SheromG', '_blank')}
                        />
                        <Icon 
                            icon="mdi:linkedin"  
                            className='h-10 md:h-14 w-10 md:w-14 text-primary'
                            data-tooltip-id="tooltip" data-tooltip-content="Go to my LinkedIn"
                            onClick={() => window.open('https://www.linkedin.com/in/david-sherom-granada-35a62a2b7/', '_blank')}
                        />
                        <Icon 
                            icon="tabler:brand-leetcode" 
                            className='h-10 md:h-14 w-10 md:w-14 text-primary'
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
        <div id='education' className='md:min-h-screen w-full px-2 md:px-4 md:pt-6'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>My Education and Awards</h1>
            <div className='mt-6 md:mt-16 flex justify-center items-center'>
                <div className='wrapper  flex flex-col gap-0 md:gap-6'>
                {
                    Education.map((item, index)=>
                    (
                        <div 
                            key={index}
                            className='node '
                        >
                            <h1 className='text-xl md:text-4xl font-black text-primary'>{item.school}</h1>
                            <p className='text-md md:text-2xl font-bold text-secondary'>{item.degree} - <span className=' font-normal'>{item.award}</span></p>
                            <p className='text-md md:text-xl text-tertiary'>{item.isGraduated  ? `Graduate, ${item.end}` : `Estimated Graduation: ${item.end}`}</p>
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
    let className = 'h-12 md:h-24 w-12 md:w-24'

    return(
        <div id='technologies' className='md:min-h-screen w-full px-2 md:px-4 md:pt-6'>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>My Tech Stack</h1>
            <h1 className='text-md md:text-xl text-center'>Tools and Frame Works</h1>

            <div className='w-full flex justify-center mt-6 md:mt-16 '>
                <div className='w-full mx-auto grid grid-cols-4 md:grid-cols-5 place-items-center gap-4 md:gap-10'>
                {
                    Tech.map((item, index)=> 
                        <Icon 
                            key={index} 
                            icon= {item.icon} 
                            className={className}  
                            data-tooltip-id="tooltip" 
                            data-tooltip-content={item['data-tooltip-content']} 
                        />)
                }
                </div>
            </div>
        </div>
    )
}

const Projects: React.FC = () =>
{
    const containerRef = useRef<HTMLDivElement>(null)

    const [currentChild, setCurrentChild] = useState<number>(0)

    useEffect(() => 
    {
        const observer = new IntersectionObserver((entries) => 
        {
            entries.forEach((entry) => { if (entry.isIntersecting) { setCurrentChild(Number(entry.target.getAttribute('index'))) }})
        }, { threshold: 0.9 })

        if (containerRef.current) 
        {
            const children = containerRef.current.children
            for (let i = 0; i < children.length; i++) 
            {
                observer.observe(children[i])
                children[i].setAttribute('index', String(i + 1))
            }
        }
        return () => { observer.disconnect() }
    }, [])

    
    return(
        <div id='projects' className='min-h-screen w-full px-2 md:px-4 pt-6 mb-4 md:mb-16 '>
            <h1 className='text-2xl md:text-5xl font-bold text-center md:mb-6'>My Projects</h1>
            

                <div 
                    ref={containerRef}
                    className='custom-scrollbar flex flex-row gap-4 overflow-y-auto max-w-screen-2xl mx-auto pb-6 md:pb-10 p-2 md:p-4'
                >
                
                    {
                        Project.map((item, index) =>
                        (
                            <div
                                key={index}
                                className='min-w-72 md:min-w-96 h-[45rem] md:h-[45rem] bg-tertiary rounded-[1.25rem] border-4 border-primary flex flex-col items-center justify-between p-3 gap-6 shadow-lg shadow-primary'
                            >
                                <div className='w-full mx-3 h-96 rounded-[0.5rem]'>
                                    <img src={item.picture} className='object-cover h-full w-full rounded-xl' alt='Picture' />
                                </div>
                                <div className='mx-auto max-w-[90%] flex flex-col h-full justify-between'>
                                    <h1 className = 'text-2xl md:text-4xl font-black text-white'>{item.title}</h1>
                                    <div className=' text-md md:text-lg text-justify text-white opacity-75'>{item.description}</div>

                                    <div className='flex flex-wrap w-full gap-1 md:gap-2 '>
                                    {
                                        item.technologies?.map((tech, index) => 
                                        (
                                            <div  key={index} className='flex gap-1 md:gap-2 items-center justify-center border-2 border-primary bg-secondary rounded-full px-1 md:px-2'>
                                                <Icon  icon={tech[0]} className='h-4 md:h-6 w-4 md:w-6 text-white p-0.5'/>
                                                <p className='text-sm md:text-md font-black text-white select-none'>{tech[1]}</p>
                                            </div>
                                        ))
                                    }
                                    
                                    </div>

                                    <button
                                        className=' w-full border-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out border-4 py-1 md:py-3 px-6 text-md md:text-xl rounded-3xl font-bold select-none'
                                        onClick={() => window.open(`${item.link}`, '_blank')}
                                    >
                                        Visit Website
                                    </button>
                                    <button
                                        className=' w-full border-primary  hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out border-4  py-1 md:py-3 px-6 text-md md:text-xl rounded-3xl font-bold select-none'
                                        onClick={() => window.open(`${item.repository}`, '_blank')}
                                    >
                                        Visit Github Repository
                                    </button>
                                    
                                </div>
                            </div>
                        ))
                    }
                    
                </div>

                <div className='flex gap-1 justify-center items-center mt-2 md:mt-6'>
                {
                    Project.map((_, index) =>
                    (
                        <div 
                            key={index} 
                            className=
                            {`
                                h-5 w-5  border-4 border-primary rounded-full 
                                ${currentChild  === index   ? 'bg-tertiary h-6 w-6': ''}  
                                ${currentChild  === index + 2 ? 'bg-tertiary h-6 w-6': ''} 
                                ${currentChild === index + 1 ? 'bg-primary h-7 w-7': ''}  
                                
                                
                            `}
                            > </div>
                    ))
                }
                </div>
        </div>
    )
}