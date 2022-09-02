import Image from 'next/image'
import fritz1 from '../public/friedrichmerz1.png'
import lindner1 from '../public/lindner1.png'
import lindner2 from '../public/lindner2.png'
import annalena1 from '../public/annalena1.png'
import habeck1 from '../public/habeck1.png'
import habeck2 from '../public/habeck2.png'
import schnabel1 from '../public/schnabel1.png'
import boeri1 from '../public/boeri1.png'
import tom1 from '../public/tom1.png'
import { useState } from 'react'
import Backgrounds from './backgrounds'
import { useEffect } from 'react'



export default function Politiker({backgrounds, setBackgrounds, currentPicture, setCurrentPicture, background, setCurrentBackground}) {
    const [bonus, setBonus] = useState('')
    const [textBackground, setTextBackground] = useState('bg-slate-800')    
    const [textFarbe, setTextFarbe] = useState('text-white')
    const [topText, setTopText] = useState('')
    const [offsetTop, setOffsetTop] = useState(100)
    const [offsetLeft, setOffsetLeft] = useState(50)
    const [backlight, setBackLight] = useState(false)
    const [politiker, setPolitiker] = useState([lindner2, fritz1, lindner1, annalena1, habeck2, habeck1, tom1, boeri1])
    const [gray, setGray] = useState(false)
    const [rotate, setRotate] = useState('rotate-0')

    const rotateText = (e) => {
        if(rotate == 'rotate-0') {
            setRotate('rotate-12')
        } else {
            setRotate('rotate-0')
        }
    }


    const changeBacklight = (e) => command => {
        setBackLight(command)
    }

    const changeTextBackground = (e) => command => {
        setTextBackground(command)
    }

    const changeTextFarbe = (e) => command => {
        setTextFarbe(command)
    }

   



    const moveText = (e) => (pos )=> {

        if(pos == 'runter') {
            const new_offset = parseInt(offsetTop) + 10
            setOffsetTop(new_offset)
            console.log(offsetTop)
        } else if(pos == 'hoch') {
            const new_offset = parseInt(offsetTop) - 10
            setOffsetTop(new_offset)
            console.log(offsetTop)
        } else if(pos == 'links' && offsetLeft > 20) {
            const new_offset = parseInt(offsetLeft) - 10
            setOffsetLeft(new_offset)
            console.log(offsetLeft)
        } else {
            const new_offset = parseInt(offsetLeft) + 10
            setOffsetLeft(new_offset)
            console.log(offsetLeft)
        }
        

    }

    useEffect(() => {
        setCurrentPicture(lindner2)
        
    }, [])

    return (
        <>
        <div className="bg-gray-900 w-full md:w-1/2 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 h-40">

                {politiker.map((poli, i) => (
                    <div onClick={() => setCurrentPicture(poli)} key={i} className="flex-none w-1/3 md:w-1/5 h-full mr-8 md:pb-4 relative rounded-xl border border-1">
                        <div className="bg-gray-200 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>
                        <Image src={poli}  layout='fill' className={`object-cover rounded-xl border border-1 ${poli == schnabel1 && bonus !== 'Friebe' && 'invisible'}`}/>
                    </div>

                ))}
                
                
            
            </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-10 mb-5">
            <div>
                <span className="text-white mr-5 font-italic">Ich will sagen, dass...</span><textarea className="border border-1 border-white rounded-md " onChange={(e) => setTopText(e.target.value)}></textarea>
            </div>
        </div>

        <div className="w-full md:w-1/3 h-96 relative">
            {topText !== '' && <p style={{paddingTop: `${offsetTop}px`, marginLeft: `${offsetLeft}px`, maxWidth: "300px"}} className={`focus:border-white ml-5 tracking-tighter absolute z-50 font-bold text-3xl italic font-sans uppercase text-left rounded leading-relaxed `}><span className={` relative inline-block rounded ${textFarbe} pt-1 pb-1 pr-1 pl-1 ${textBackground}`}>{topText}<span className="absolute text-white font-extrabold text-7xl -top-4 z-100 left-0 bg-slate-50 w-20 h-3"></span><span className="absolute text-white font-extrabold text-7xl -bottom-4 z-100 right-0 bg-slate-50 w-20 h-3"></span></span></p>}
            {backlight  && <div className={`${backlight} z-20 cursor-pointer absolute w-full h-full opacity-60 hover:opacity-20`}></div>}
            {background !== '' && <div className="bg-green-500 z-20 cursor-pointer absolute w-full h-full opacity-0 hover:opacity-20"></div>}
            
            {background && <Image src={background} layout="fill" objectFit='contain' className="z-0 absolute bottom-0 " />}
            {currentPicture && <Image src={currentPicture} layout="fill" objectFit='contain' className="z-20 absolute bottom-0" />}
            
            
        </div>
        <div className="flex flex-row mt-3 gap-3 text-xs">
          
            <button className="bg-green-400 rounded p-1 cursor-pointer text-green-900 font-bold " onClick={(e) => moveText(e)('runter') }> Text runter </button>
            <button className="bg-green-400 rounded p-1 cursor-pointer text-green-900 font-bold " onClick={(e) => moveText(e)('hoch') }> Text hoch </button>
            <button className="bg-green-400 rounded p-1 cursor-pointer text-green-900 font-bold " onClick={(e) => moveText(e)('links') }> Text links </button>
            <button className="bg-green-400 rounded p-1 cursor-pointer text-green-900 font-bold " onClick={(e) => moveText(e)('rechts') }> Text rechts </button>
            <button className="bg-gray-200 rounded p-1 cursor-pointer text-gray-900 font-bold " onClick={(e) => rotateText(e)}> Text schief </button>
        </div>
        <div className="flex flex-row mt-3 gap-3 text-xs">
            <button className="bg-gray-200 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeBacklight(e)('') }> Hintergrund Normal </button>
            <button className="bg-gray-800 rounded p-1 cursor-pointer text-gray-200 font-bold " onClick={(e) => changeBacklight(e)('bg-gray-800') }> Hintergrund Dunkel </button>          
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded p-1 cursor-pointer text-white font-bold " onClick={(e) => changeBacklight(e)('bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500') }> Hintergrund Overlay </button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded p-1 cursor-pointer text-white font-bold " onClick={(e) => changeBacklight(e)('bg-gradient-to-r from-cyan-500 to-blue-500') }> Hintergrund Overlay </button>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded p-1 cursor-pointer text-white font-bold " onClick={(e) => changeBacklight(e)('bg-gradient-to-r from-yellow-500 to-orange-600') }> Hintergrund Overlay </button>
            

            
        </div>
        <div className="flex flex-row mt-3 gap-3 text-xs">
            <button className="bg-gray-500 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextFarbe(e)('text-gray-500') }> Text Farbe </button>
            <button className="bg-gray-100 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextFarbe(e)('text-gray-100') }> Text Farbe </button>
            <button className="bg-yellow-500 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextFarbe(e)('text-yellow-500') }> Text Farbe </button>
            <button className="bg-pink-500 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextFarbe(e)('text-pink-500') }> Text Farbe </button>
            

            
        </div>

        {/* TEXT HINTERGRUND */}

        <div className="flex flex-row mt-3 gap-3 text-xs">
            <button className="bg-yellow-300 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextBackground(e)('bg-yellow-300') }> Text Hintergrund </button>
            <button className="bg-gray-800 rounded p-1 cursor-pointer text-gray-200 font-bold " onClick={(e) => changeTextBackground(e)('bg-gray-800') }> Text Hintergrund </button>
            <button className="bg-pink-500 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextBackground(e)('bg-pink-500') }> Text Hintergrund </button>
            <button className="bg-green-500 rounded p-1 cursor-pointer text-gray-800 font-bold " onClick={(e) => changeTextBackground(e)('bg-green-500') }> Text Hintergrund </button>
            

            
        </div>
       
        
        
        <Backgrounds politiker={politiker} setPolitiker={setPolitiker} background={background} setCurrentBackground={setCurrentBackground} backgrounds={backgrounds} setBackgrounds={setBackgrounds} />
        
            

       </>
    )
}