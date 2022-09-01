import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Politiker from '../components/politiker'
import { useState } from 'react'
import Backgrounds from '../components/backgrounds'


export default function Home() {
  const [currentPicture, setCurrentPicture] = useState('')
  const [background, setCurrentBackground] = useState('')
 


  return (
    <div className="bg-black">
      <Head>
        <title>Politik Kann Mehr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-200 text-center mt-5 font-extrabold text-3xl mb-10">
      🚀 WELCOME TO POLITIK-KANN-MEHR
      </h1>

      <div className="flex flex-col justify-center items-center w-full">
            
                <Politiker currentPicture={currentPicture} setCurrentPicture={setCurrentPicture} background={background} setCurrentBackground={setCurrentBackground} />
            
            
                
            
       
      </div>

      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Marccello
          
        </a>
      </footer>
    </div>
  )
}
