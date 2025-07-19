import React, {useEffect, useRef} from 'react'
import {useGLTF, useAnimations, Outlines} from '@react-three/drei'

export function Satellite(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/satellite.glb')
  animations[0].name = 'Satellite'

  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["Satellite"].reset().play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="MinisatelliteFBX" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Minisatellite"
                  position={[0, 118.983, 9.761]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.355}>
                  <group name="Object_5" position={[0, 0, -34]}>
                    <mesh
                      name="Minisatellite_Material_#211_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Minisatellite_Material_#211_0'].geometry}
                      material={materials.Material_211}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Miniantenna"
                  position={[-5.481, 134.513, 14.426]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.355}>
                  <group name="Object_8" position={[0, 13.148, -80.693]}>
                    <mesh
                      name="Miniantenna_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Miniantenna_02_-_Default_0'].geometry}
                      material={materials['02_-_Default']}>
                      <Outlines thickness={2} color="black"/>
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/satellite.glb')
