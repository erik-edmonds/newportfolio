import React, { useRef, useEffect } from 'react'
import {useGLTF, useAnimations, Outlines} from '@react-three/drei'

export function Moon(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/moon.glb')
  animations[0].name = 'Moon'
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["Moon"].reset().play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
          <group name="b132ba4ac4cd4639851e6905b96e7e48fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Moon" rotation={[-0.52, 0.876, -0.93]}>
                  <mesh
                    name="Moon_2_-__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0'].geometry}
                    material={materials.material}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_2_-__0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0_1'].geometry}
                    material={materials.material}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_2_-__0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0_2'].geometry}
                    material={materials.material}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_2_-__0_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0_3'].geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="Moon_2_-__0_4"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0_4'].geometry}
                    material={materials.material}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_2_-__0_5"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_2_-__0_5'].geometry}
                    material={materials.material}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_1_-__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_1_-__0'].geometry}
                    material={materials.material_1}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_4_-__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_4_-__0'].geometry}
                    material={materials.material_2}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <mesh
                    name="Moon_3_-__0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Moon_3_-__0'].geometry}
                    material={materials.material_3}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                </group>
                <group
                  name="Object001"
                  position={[-36.689, -4.2, -33.062]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_15" position={[10.16, -7.765, 47.888]}>
                    <mesh
                      name="Object001_2_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object001_2_-__0'].geometry}
                      material={materials.material}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object002"
                  position={[-20.183, 4.902, -57.726]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_18" position={[12.252, -38.68, 46.015]}>
                    <mesh
                      name="Object002_2_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object002_2_-__0'].geometry}
                      material={materials.material}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object003"
                  position={[-33.958, 15.161, -49.174]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_21" position={[27.002, -49.174, 25.572]}>
                    <mesh
                      name="Object003_1_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object003_1_-__0'].geometry}
                      material={materials.material_1}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object003_4_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object003_4_-__0'].geometry}
                      material={materials.material_2}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object003_3_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object003_3_-__0'].geometry}
                      material={materials.material_3}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object004"
                  position={[0.205, 42.107, -33.763]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_26" position={[38.823, -37.131, 5.202]}>
                    <mesh
                      name="Object004_1_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object004_1_-__0'].geometry}
                      material={materials.material_1}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object004_4_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object004_4_-__0'].geometry}
                      material={materials.material_2}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object004_3_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object004_3_-__0'].geometry}
                      material={materials.material_3}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object005"
                  position={[8.568, 35.456, -38.741]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_31" position={[29.478, -44.148, 3.66]}>
                    <mesh
                      name="Object005_2_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object005_2_-__0'].geometry}
                      material={materials.material}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object006"
                  position={[-27.649, -0.275, -40.706]}
                  rotation={[-0.385, 0.561, -1.132]}>
                  <group
                    name="Object_34"
                    position={[16.507, -2.31, 50.337]}
                    rotation={[-0.326, 0.055, 0.121]}>
                    <mesh
                      name="Object006_2_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object006_2_-__0'].geometry}
                      material={materials.material}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object007"
                  position={[-18.945, -43.549, -31.342]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_37" position={[-32.781, 0.131, 41.597]}>
                    <mesh
                      name="Object007_1_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object007_1_-__0'].geometry}
                      material={materials.material_1}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object007_4_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object007_4_-__0'].geometry}
                      material={materials.material_2}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Object007_3_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object007_3_-__0'].geometry}
                      material={materials.material_3}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                </group>
                <group
                  name="Object008"
                  position={[34.69, 40.488, -14.294]}
                  rotation={[-0.52, 0.876, -0.93]}>
                  <group name="Object_42" position={[24.13, -38.299, -31.59]}>
                    <mesh
                      name="Object008_2_-__0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object008_2_-__0'].geometry}
                      material={materials.material}>
                      <Outlines thickness={1.1} color="black"/>
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

useGLTF.preload('/models/moon.glb')
