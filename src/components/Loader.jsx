import React from 'react'
import { Html,useProgress } from '@react-three/drei'

const Loader = () => {
  const {progress}= useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
      style={{
        fontSize:14,
        fontWeight:800,
        color:'#000000',
        marginTop:40
      }}
      >{progress.toFixed(2)}%</p>
      
    </Html>
  )
}

export default Loader
//2 is two decimals