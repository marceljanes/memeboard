import Image from 'next/image'
import robert from '../public/roberthabeck1.png'
import fritz1 from '../public/friedrichmerz1.png'
import lindner1 from '../public/lindner1.png'
import { useState } from 'react'
import Backgrounds from './backgrounds'



export default function Politiker({currentPicture, setCurrentPicture, background, setCurrentBackground}) {

    const [topText, setTopText] = useState('')
    const politiker = [robert, fritz1, lindner1]
    const [gray, setGray] = useState(false)


    return (
        <>
        <div className="bg-gray-900 w-1/2 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 h-40">

                {politiker.map(poli => (
                    <div onClick={() => setCurrentPicture(poli)} key={poli} className="flex-none w-2/3 md:w-1/5 h-full mr-8 md:pb-4 relative rounded-xl border border-1">
                        <div className="bg-gray-200 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>
                        <Image src={poli}  layout='fill' className="object-cover rounded-xl border border-1"/>
                    </div>

                ))}
                
                
            
            </div>
        
        <div className="w-1/2 flex flex-col justify-center items-center h-10">
            <div>
                <input onChange={(e) => setTopText(e.target.value)}></input>
            </div>
        </div>

        <div className="w-full md:w-1/3 h-96 relative">
            <p className="ml-5 tracking-tighter w-[300px] absolute top-1/3 z-10 font-extrabold text-3xl italic font-sans uppercase text-white"><span className="bg-slate-800">{topText}</span></p>
            {background !== '' && <div className="bg-green-500 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>}
            <Image src={background} layout="fill" objectFit='contain' className="z-0 absolute bottom-0 " />
            <Image src={currentPicture} layout="fill" objectFit='contain' className="z-20 absolute bottom-0" />
            
            
        </div>
        <Backgrounds background={background} setCurrentBackground={setCurrentBackground} />
        
            

       </>
    )
}