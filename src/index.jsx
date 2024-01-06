import './style.css'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
import IntroText from './IntroText.jsx'
import Background from './Background.jsx'
import Pointer from './Pointer.jsx'
import { Html } from '@react-three/drei'


const root = createRoot(document.querySelector('#root'))

root.render(
    <>  
        <div className="canvas">
            <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
                <color attach="background" args={["#E0E0E6"]} />
                <Suspense>
                    <Physics 
                        gravity={[0, 0, 0]} 
                    >
                        <Pointer />
                        <Background />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
       
        <IntroText />
    </>
    
)