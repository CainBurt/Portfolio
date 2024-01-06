import * as THREE from 'three'
import { useRef } from 'react'
import { BallCollider, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';


export default function Pointer({ vec = new THREE.Vector3() })
{
    const pointer = useRef()

    useFrame(({ mouse, viewport }) => {
        pointer.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0))
    })

    return (
      <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={pointer} >
        <BallCollider args={[1]} />
      </RigidBody>
    )
}