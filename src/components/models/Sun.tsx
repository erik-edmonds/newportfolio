import React, { useRef, useEffect } from 'react'
import {useGLTF, useAnimations, Outlines} from '@react-three/drei'

export function Sun(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/sun.glb')
  animations[0].name = 'Sun'
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Sun'].reset().play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="mesh_0"
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials.material}
        morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}>
        <meshStandardMaterial toneMapped={false} emissive="yellow" color="white" emissiveIntensity={10} />
        <Outlines thickness={1.1} color="black"/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/sun.glb')
