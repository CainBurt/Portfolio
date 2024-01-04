import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import {DepthOfField, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const ballGeometry = new THREE.SphereGeometry()
const ballColors = ['#E3FDFD', '#CBF1F5', '#A6E3E9', '#71C9CE']

export default function Background()
{
    const balls = useRef([])

    return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls makeDefault /> */}

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <EffectComposer disableNormalPass>
            <DepthOfField 
                focusDistance={ 0.025 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            /> 
            <ToneMapping/>
        </EffectComposer>

        <color args={ [ '#ffffff' ] } attach='background' />


        {[...Array(69)].map((value, index) => 
            <mesh
                ref={ (element) => {balls.current[index] = element} }
                key={ index }
                geometry={ ballGeometry }
                position={[
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ]}
                scale={ 0.2 + Math.random() * 0.5 }
            >
                <meshStandardMaterial color={ballColors[Math.floor(Math.random() * ballColors.length)]} />
            </mesh>
        )}

    </>
        
    
}