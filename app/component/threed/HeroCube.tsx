"use client";

import React from 'react';
import {Canvas} from "@react-three/fiber"

const HeroCube = () => {
  return (
    <div className='w-full min-h-[70svh] '>
        <Canvas>
            <boxGeometry args={[1,1,1]}/>
        </Canvas>
    </div>
  )
}

export default HeroCube