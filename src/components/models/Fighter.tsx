import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, Outlines } from '@react-three/drei'

export function Fighter(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/fighter.glb')
  animations[0].name = 'Fighter'
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["Fighter"].reset().play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e2c40466c197424eb81a39138530f7d6fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Camera"
                  position={[2524.852, 2101.753, 830.201]}
                  rotation={[-Math.PI, -0.716, 2.728]}
                  scale={100}>
                  <group name="Object_5" />
                </group>
                <group
                  name="Sphere_-_Base"
                  position={[344.95, 831.466, 2728.375]}
                  rotation={[-1.583, 0.194, 1.635]}
                  scale={100}>
                  <mesh
                    name="Sphere_-_Base_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_-_Base_Material001_0'].geometry}
                    material={materials['Material.001']}>
                    <Outlines thickness={1.1} color="black"/>
                  </mesh>
                  <group
                    name="Light"
                    position={[-0.051, 0.449, 6.462]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_9" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_10" />
                    </group>
                  </group>
                  <group name="Window_Glass" rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Window_Glass_Material003_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Window_Glass_Material003_0.geometry}
                      material={materials['Material.003']}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <group name="Window_Rim" position={[0, 0, 0.045]} rotation={[Math.PI, 0, 0]}>
                      <mesh
                        name="Window_Rim_Material001_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_Rim_Material001_0.geometry}
                        material={materials['Material.001']}>
                        <Outlines thickness={1.1} color="black"/>
                      </mesh>
                    </group>
                  </group>
                  <group name="Plane" rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      name="Plane_Material001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_Material001_0.geometry}
                      material={materials['Material.001']}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Plane_Material002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_Material002_0.geometry}
                      material={materials['Material.002']}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                  <group name="Cylinder" rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      name="Cylinder_Material001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Material001_0.geometry}
                      material={materials['Material.001']}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                  </group>
                  <group name="Cube" position={[0, -0.226, -0.753]} scale={0.257}>
                    <mesh
                      name="Cube_Material001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_Material001_0.geometry}
                      material={materials['Material.001']}>
                      <Outlines thickness={1.1} color="black"/>
                    </mesh>
                    <mesh
                      name="Cube_Material002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_Material002_0.geometry}
                      material={materials['Material.002']}>
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

useGLTF.preload('/models/fighter.glb')
