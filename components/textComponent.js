import React, { useEffect } from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import { useState } from "react";


export default function TextComponent({textBackground, topText, textFarbe}) {




    
    

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",             
        zIndex: "100",        
      };


    return (
        
        
        
                <Rnd
                    className={`${textBackground}  font-bold text-2xl p-3 rounded-lg overflow-hidden ${textFarbe} hover:border-2 border-dashed`}
                    style={style}
                    default={{
                    x: 200,
                    y: 150,
                    width: 160,
                    height: 100
                    }}
                    >
                    {topText}
                </Rnd>
            
            
        
        )
}