 import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
 
 const App = () => {
   return (
    <div className='w-full h-screen  '>
      <div className='navbar line  flex gap-10 pt-10 pb-3 cursor-pointer  absolute top-0 left-1/2 -translate-x-1/2 '>
        {["iPhone", "iPad", 'Services', 'ios', 'mac', 'products', "iPhone", "iPad", 'Services', 'ios', 'mac', 'products' ].map(e =>
           <a href='' className='text-white font-[400] capitalize text-md'>
            {e}
           </a>)}
      </div>
      <div className='absolute top-20 flex flex-col items-center  left-1/2 text-white  -translate-x-1/2  '>
      <h3 className='masked text-4xl tracking-tighter font-[700] '>macbook pro.</h3>
      <h5>Oh so pro!</h5>
      <p className='text-center w-3/4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eveniet non ipsam dignissimos. Quae. </p>
      </div>
     <Canvas camera={{fov:12, position: [0, -10, 220]}}>
       <Environment files={[
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
       ]}/>
       <ScrollControls>
     <MacContainer />
       </ScrollControls>
     </Canvas>
    </div>
   )
 }
 
 export default App
 