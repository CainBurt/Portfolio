import './style.css'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import IntroText from './IntroText'
import Background from './Background'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>  
        <div className="canvas">
            <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
                <Background />
            </Canvas>
        </div>
       
        <IntroText />
    </>
    
)