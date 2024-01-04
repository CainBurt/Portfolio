import {DepthOfField, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber';
import { OrbitControls, GradientTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'

const ballGeometry = new THREE.SphereGeometry()
// const ballColors = ['#E3FDFD', '#CBF1F5', '#A6E3E9', '#71C9CE']
const ballColors = ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060']

export default function Background()
{
    const balls = useRef([])

    useFrame((state, delta) => {

        balls.current.forEach((ball) => {
            const time = state.clock.getElapsedTime();
            const speed = 0.1; // Adjust the overall speed
        
            // Generate separate random values for each axis
            const randomX = Math.random() * 0.1 - 0.05;
            const randomY = Math.random() * 0.1 - 0.05;
            const randomZ = Math.random() * 0.1 - 0.05;
        
            // Calculate new positions for each axis
            const x = ball.position.x + Math.cos(time * speed + randomX) * 0.001;
            const y = ball.position.y + Math.sin(time * speed + randomY) * 0.001;
            const z = ball.position.z + Math.sin(time * speed + randomZ) * 0.001;
        
            // Set the new position
            ball.position.set(x, y, z);
          });
    })

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
                onPointerOver={(e) => console.log('over')}
            >
                {/* <meshStandardMaterial color={ballColors[Math.floor(Math.random() * ballColors.length)]} /> */}
                <meshBasicMaterial>
                    <GradientTexture
                        stops={[0, 1]} 
                        colors={[ballColors[Math.floor(Math.random() * ballColors.length)], ballColors[Math.floor(Math.random() * ballColors.length)]]} 
                    />
                </meshBasicMaterial>
            </mesh>
        )}

    </>
        
    
}