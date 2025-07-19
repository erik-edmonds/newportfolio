import React, { useRef, useEffect } from 'react'
import {useGLTF, useAnimations, Outlines} from '@react-three/drei'

export function OrbitingAstronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/orbit_astronaut.glb')

  animations[0].name = "Astronaut"
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Astronaut"].reset().play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.687}>
          <group name="a2d102a266ba49a28c0b4ae14e745f31fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_7.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_8.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_9.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials['Mat.1']}
                    skeleton={nodes.Object_10.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials['Mat.4']}
                    skeleton={nodes.Object_11.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials['Mat.3']}
                    skeleton={nodes.Object_12.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['Mat.2']}
                    skeleton={nodes.Object_13.skeleton}>
                    <Outlines thickness={1.1} color="black"/>
                  </skinnedMesh>
                  <group name="Object_6" position={[0, 0, -1.878]} />
                  <group name="Subdivision_Surface_1">
                    <group name="Astronaut_mesh_1" position={[0, 0, -1.878]} />
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

useGLTF.preload('/models/orbit_astronaut.glb')
