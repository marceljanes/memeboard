import Image from 'next/image'
import bgcdu1 from '../public/bgcdu1.png'
import bundestag from '../public/bundestag.png'
import bgcool1 from '../public/bgcool1.png'
import bgcool2 from '../public/bgcool2.png'
import bggreen1 from '../public/bggreen1.png'
import bggray1 from '../public/bggray1.png'
import bgyellow1 from '../public/bgyellow1.png'
import bgred1 from '../public/bgred1.png'
import friebe1 from '../public/friebe1.png'
import dirk1 from '../public/dirk1.png'
import pride1 from '../public/pride1.png'
import frosch1 from '../public/frosch1.png'
import kernkraft1 from '../public/kernkraft1.png'
import { useEffect } from 'react'



import { useState } from 'react'



export default function Backgrounds({background, setCurrentBackground, backgrounds, setBackgrounds, politiker, setPolitiker}) {

    const [bonus, setBonus] = useState('')
    // const [backgrounds, setBackgrounds] = useState([bgcool2, bgcdu1, bundestag, bgcool1, bggreen1, kernkraft1, bgyellow1, bggray1, bgred1, pride1, frosch1])

    
    const changeGeheimCode = (e) => {
        console.log(bonus)
        if(bonus === 'Friebe') {           
            
            setPolitiker(politiker => [...politiker, friebe1])
            
        }
        if(bonus === 'Nase') {
            
            setPolitiker(politiker => [...politiker, dirk1])
        }

    }


    useEffect(() => {
        setCurrentBackground(bggreen1)
        setBackgrounds([bgcool2, bgcdu1, bundestag, bgcool1, bggreen1, kernkraft1, bgyellow1, bggray1, bgred1, pride1, frosch1])
    }, [])

    return (
        <>
        <div className="bg-gray-900 w-full md:w-1/2 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 h-20 mt-10">

                {backgrounds.map((bg, i) => (
                    <div onClick={() => setCurrentBackground(bg)} key={i} className="flex-none w-1/3 md:w-20 h-full mr-4 md:pb-4 relative rounded-xl border border-1">
                        <div className="bg-gray-200 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>
                        <Image src={bg} layout='fill' className="object-cover rounded-xl border border-1"/>
                    </div>

                ))}
                
            
            </div>
            <div className="mb-5 mr-1 text-sm">
                <span className="text-white mr-5 font-italic">Geheimcodes für Extra-Levels...</span><input className="mt-5" onChange={(e) => setBonus(e.target.value)}></input><button className="ml-3 pr-1 pl-1 bg-green-500 text-white rounded-lg cursor-pointer" onClick={(e) => changeGeheimCode(e)}> 🥳 Open Magic</button>
             </div>
             
       
            

       </>
    )
}