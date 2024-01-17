import { useFrame, useThree } from '@react-three/fiber'
import { Stage, useHelper, OrbitControls, Environment, Lightformer } from '@react-three/drei'
import { useRef, useState } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

function Bubble({z, scale}){
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
        y: THREE.MathUtils.randFloatSpread(viewport.height * scale/10)
    })

    useFrame(() => {
        ref.current.position.set(data.x * viewport.width, (data.y += 0.1), z/5)
        if (data.y > viewport.height / 0.5 - (scale/100)  ){
            data.y = -viewport.height / 0.5 - (scale/100)
        }
    })

    return (
        <mesh castShadow receiveShadow ref={ref}>
            <sphereGeometry />
            <meshPhysicalMaterial 
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
            />
            {/* <meshBasicMaterial color='orange' /> */}
        </mesh> 
    )
}

export default function BubbleBackground()
{

    return <>
        {/* <Perf position="top-left" /> */}

        {/* <OrbitControls makeDefault /> */}

        <Environment>
            <Lightformer 
                position-x={ 5 }
                position-y={ 6 }
                position-z={ - 5 }
                scale={ 5 }
                color="white"
                intensity={ 10 }
                form="circle" 
            />
        </Environment>

        {/* <Bubble z={0}/> */}

        {Array.from({ length: 100 }, (_, i) => (<Bubble key={i} z={-i} scale={i} />))}

        {/* <mesh castShadow position-y={ 0 } position-x={ 0 }>
            <sphereGeometry />
            <meshPhysicalMaterial {...materialProps} toneMapped={ false } />
        </mesh>  */}

    </>
}