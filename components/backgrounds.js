import Image from 'next/image'
import bgcdu1 from '../public/bgcdu1.png'
import bundestag from '../public/bundestag.png'
import bgcool1 from '../public/bgcool1.png'
import bggreen1 from '../public/bggreen1.png'
import bggray1 from '../public/bggray1.png'
import bgyellow1 from '../public/bgyellow1.png'
import bgred1 from '../public/bgred1.png'



import { useState } from 'react'



export default function Backgrounds({background, setCurrentBackground}) {

   
    const backgrounds = [bgcdu1, bundestag, bgcool1, bggreen1, bgyellow1, bggray1, bgred1]


    return (
        <>
        <div className="bg-gray-900 w-1/2 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 h-20 mt-10">

                {backgrounds.map(bg => (
                    <div onClick={() => setCurrentBackground(bg)} key={bg} className="flex-none w-2/3 md:w-20 h-full mr-4 md:pb-4 relative rounded-xl border border-1">
                        <div className="bg-gray-200 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>
                        <Image src={bg}  layout='fill' className="object-cover rounded-xl border border-1"/>
                    </div>

                ))}
                
            
            </div>
       
            

       </>
    )
}