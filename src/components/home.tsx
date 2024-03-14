import Picture from '../assets/1x1.png'
import { Icon } from '@iconify/react';

const home: React.FC = () => 
{
    return (
        <div className='h-screen w-full flex flex-wrap items-center justify-center gap-6 bg-tertiary px-4'>
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
                            className='h-14 w-14 text-primary'
                        />
                        <Icon 
                            icon="mdi:linkedin"  
                            className='h-14 w-14 text-primary'
                        />
                        <Icon 
                            icon="tabler:brand-leetcode" 
                            className='h-14 w-14 text-primary'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home