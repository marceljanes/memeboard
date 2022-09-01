import Image from 'next/image'
import fritz1 from '../public/friedrichmerz1.png'
import lindner1 from '../public/lindner1.png'
import annalena1 from '../public/annalena1.png'
import habeck1 from '../public/habeck1.png'
import habeck2 from '../public/habeck2.png'
import schnabel1 from '../public/schnabel1.png'
import boeri1 from '../public/boeri1.png'
import tom1 from '../public/tom1.png'
import { useState } from 'react'
import Backgrounds from './backgrounds'
import { useEffect } from 'react'



export default function Politiker({currentPicture, setCurrentPicture, background, setCurrentBackground}) {
    const [bonus, setBonus] = useState('')
    const [topText, setTopText] = useState('')
    const [offsetTop, setOffsetTop] = useState(100)
    const [offsetLeft, setOffsetLeft] = useState(50)
    const politiker = [ fritz1, lindner1, annalena1, habeck2, habeck1, tom1, boeri1]
    const [gray, setGray] = useState(false)
    const [rotate, setRotate] = useState('rotate-0')

    const rotateText = (e) => {
        if(rotate == 'rotate-0') {
            setRotate('rotate-12')
        } else {
            setRotate('rotate-0')
        }
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
        setCurrentPicture(fritz1)
        
    }, [])

    return (
        <>
        <div className="bg-gray-900 w-1/2 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 h-40">

                {politiker.map((poli, i) => (
                    <div onClick={() => setCurrentPicture(poli)} key={i} className="flex-none w-2/3 md:w-1/5 h-full mr-8 md:pb-4 relative rounded-xl border border-1">
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
            {topText !== '' && <p style={{paddingTop: `${offsetTop}px`, marginLeft: `${offsetLeft}px`, maxWidth: "300px"}} className={`focus:border-white ${rotate} ml-5 tracking-tighter absolute z-10 font-bold text-3xl italic font-sans uppercase text-white text-left rounded leading-relaxed `}><span className=" relative inline-block rounded pt-1 pb-1 pr-1 pl-1 bg-slate-800">{topText}<span className="absolute text-white font-extrabold text-7xl -top-4 z-100 left-0 bg-slate-50 w-20 h-3"></span><span className="absolute text-white font-extrabold text-7xl -bottom-4 z-100 right-0 bg-slate-50 w-20 h-3"></span></span></p>}
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
        <div>
                <span className="text-white mr-5 font-italic">Geheimcodes für Extra-Levels...</span><input className="mt-5" onChange={(e) => setBonus(e.target.value)}></input>
            </div>
        
        
        <Backgrounds background={background} setCurrentBackground={setCurrentBackground} />
        
            

       </>
    )
}