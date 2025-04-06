import { cn, getTechLogos } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const DisplayTechIcons = async({techStack}:TechIconProps) => {
  const techIcons = await getTechLogos(techStack)
  return (
    <div className='flex flex-row'>{techIcons.slice(0,3).map(({tech,url},index)=>(
      <div key={index} className={cn('relative group bg-dark-300 rounded-full p-2 flex-center', index >= 1 && "-ml-3")}>
        <Image src={url} alt={tech} className='size-5' width={100} height={100}/>
        <span className='tech-tooltip'>
          {tech}
        </span>
      </div>
    ))}</div>
  )
}

export default DisplayTechIcons