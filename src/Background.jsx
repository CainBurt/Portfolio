import { EffectComposer, ToneMapping, Bloom, Noise } from '@react-three/postprocessing'
import { useFrame } from '@react-three/fiber';
import { GradientTexture, OrbitControls, Sky, Stars } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef, useState, useEffect } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'


const ballGeometry = new THREE.SphereGeometry()
const ballColors = ['#00a3e2', '#1ba548', '#fdc800', '#f1860e', '#e41b13']
// const ballColors = ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060']

export default function Background()
{
    const vec = new THREE.Vector3()
    const balls = useRef([])
    const initialPositions = useRef([]);

    // Set up initial positions on mount
    useEffect(() => {
        balls.current.forEach((ball, index) => {
        initialPositions.current[index] = ball.translation();
        });
    }, []);

    useFrame((state, delta) => {
        delta = Math.min(0.1, delta);
        const scale = 0.01;
    
        balls.current.forEach((ball, index) => {
            const initialPosition = initialPositions.current[index];
    
            const direction = vec
                .copy(ball.translation())
                .sub(initialPosition)
                .normalize();
    
            const gravityForce = direction.multiplyScalar(-200 * delta * scale);
            
            // Apply gravity force
            ball.applyImpulse(gravityForce);
    
            // Apply linear damping
            const linearDampingFactor = 0.99;
            const linearVel = vec.copy(ball.linvel()).multiplyScalar(linearDampingFactor);
            ball.setLinvel(linearVel.clampScalar(-2, 2));
    
            // Apply angular damping
            const angularDampingFactor = 0.5;
            const angularVel = vec.copy(ball.angvel()).multiplyScalar(angularDampingFactor);
            ball.setAngvel(angularVel.clampScalar(-2, 2));
            
        });
    });
    
    
    
    

    return <>
        {/* <OrbitControls> */}
        {/* <Perf position="top-left" /> */}
        <Stars />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <EffectComposer disableNormalPass multisampling={8}>
            <Bloom 
                luminanceThreshold={ 0 } 
                mipmapBlur
                intensity={ 0.3 }
            />
            {/* <ToneMapping /> */}
            <Noise opacity={ 0.4 } />
        </EffectComposer>


        {[...Array(150)].map((value, index) => 
            <RigidBody
                ref={ (element) => {balls.current[index] = element} }
                key={ index }  
                position={[
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10,
                    0
                ]}
                colliders="ball"
            >
                <mesh
                    geometry={ ballGeometry }
                    scale={ 0.3 + Math.random() * 0.5 }
                >
                    <meshPhongMaterial shininess={ 100 } color={ballColors[Math.floor(Math.random() * ballColors.length)]} emissive="#000000" emissiveIntensity={ 0.2 } toneMapped={false} />
                </mesh>
            </RigidBody>

        )}


    </>
        
    
}