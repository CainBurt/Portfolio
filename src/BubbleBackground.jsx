import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Float, Lightformer, Text, Html, ContactShadows, Environment, MeshTransmissionMaterial, OrbitControls, Stage } from "@react-three/drei"
import { useRef, useState } from 'react'
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

function Bubble({ z, scale }) {
    // const materialProps = useControls({
    //     thickness: { value: 5, min: 0, max: 20 },
    //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    //     clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
    //     clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    //     transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    //     ior: { value: 1, min: 1, max: 2.3, step: 0.05 },
    //     envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    //     color: '#d5d5d5',
    //     attenuationTint: '#ffe79e',
    //     attenuationDistance: { value: 1, min: 0, max: 1 }
    // })

    const ref = useRef();
    const { viewport } = useThree();

    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(1) * (scale / 10),
        y: THREE.MathUtils.randFloatSpread(viewport.height * scale/10),
        originalX: THREE.MathUtils.randFloatSpread(2) * (scale / 10),
        direction: Math.random() > 0.5 ? 1 : -1,
        offset: Math.random() * 2 * Math.PI // random value between 0 and 2π
    })

    useFrame((state) => {
        data.x = data.originalX + Math.sin(state.clock.elapsedTime + data.offset) * 0.1 * data.direction;
        ref.current.position.set(data.x * viewport.width, (data.y += 0.01), z/5)
        if (data.y > viewport.height / 0.5 - (scale/100)  ){
            data.y = -viewport.height / 0.5 - (scale/100)
        }
    })

    return (
        <mesh receiveShadow castShadow ref={ref}>
            <sphereGeometry />
            {/* <meshPhysicalMaterial 
                // {...materialProps} 
                thickness={ 5 }
                roughness={ 0 }
                clearcoat={ 0 }
                clearcoatRoughness={ 0 }
                transmission={ 1 }
                ior={ 1 }
                envMapIntensity={ 25 }
                color={ '#d5d5d5' }
                attenuationTint={ '#ffe79e' }
                attenuationDistance={ 1 }
                toneMapped={ false } 
            /> */}
            <meshPhysicalMaterial
                backsideThickness={2}
                samples={10}
                resolution={2048}
                backsideResolution={1024}
                transmission={1}
                roughness={0.0}
                ior={1.5}
                thickness={0.25}
                chromaticAberration={0.4}
                anisotropy={0.3}
                distortion={0.0}
                distortionScale={0.3}
                temporalDistortion={0.65}
                attenuationDistance={0.5}
                clearcoat={0}
                attenuationColor={'#ffffff'}
                color={'#fefefe'}
            />
            {/* <meshBasicMaterial color='orange' /> */}
        </mesh>
    )
}

export default function BubbleBackground() {

    return <>
        {/* <Perf position="top-left" /> */}

        {/* <OrbitControls makeDefault /> */}
        {/* <ambientLight intensity={0.75} /> */}
        {/* <Bubble /> */}
        <OrbitControls makeDefault />

        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" background >
            <color args={ [ 'blue' ] } attach="background" />

            <mesh position-z={ - 5 } scale={ 10 }>
                <planeGeometry args={[ 2, 1, 1 ]} />
                <meshBasicMaterial color="#2b2b33" opacity={ 0.1 } />
            </mesh>
        </Environment>
        {/* <Perf position="top-left" style={{ transform: 'scale(0.8)' }} /> */}

        {/* <Bubble z={0}/> */}


            {Array.from({ length: 100 }, (_, i) => (<Bubble key={i} z={-i} scale={i} />))}

        {/* <mesh castShadow position-y={ 0 } position-x={ 0 }>
            <sphereGeometry />
            <meshPhysicalMaterial {...materialProps} toneMapped={ false } />
        </mesh>  */}

    </>
}