import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ErrorModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/404.glb')
  animations[0].name = 'Error'
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Error"].reset().play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_7" position={[-1.218, 1.775, 0.077]} scale={0.518}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.DARK_BLUE}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.BLACK}
                />
                <group
                  name="Cube002_6"
                  position={[-0.044, 0.013, 0.016]}
                  rotation={[0, 0, Math.PI]}>
                  <mesh
                    name="Object_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.BLACK}
                  />
                  <mesh
                    name="Object_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.BLUE}
                  />
                </group>
              </group>
              <group
                name="Plane005_8"
                position={[-1.213, 1.775, 0.077]}
                rotation={[-1, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group
                name="Plane006_10"
                position={[-1.223, 1.775, 0.077]}
                rotation={[0.997, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group name="Cube001_13" position={[-0.453, 1.507, -0.893]} scale={0.518}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.DARK_BLUE}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.BLACK}
                />
                <group
                  name="Cube003_12"
                  position={[-0.044, 0.013, 0.016]}
                  rotation={[0, 0, Math.PI]}>
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.BLACK}
                  />
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.BLUE}
                  />
                </group>
              </group>
              <group
                name="Plane007_14"
                position={[-0.452, 1.507, -0.888]}
                rotation={[-1, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group
                name="Plane008_16"
                position={[-0.454, 1.507, -0.897]}
                rotation={[0.997, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group name="Cube004_19" position={[0.231, 1.632, 0.67]} scale={0.518}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.DARK_BLUE}
                />
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.BLACK}
                />
                <group
                  name="Cube005_18"
                  position={[-0.044, 0.013, 0.016]}
                  rotation={[0, 0, Math.PI]}>
                  <mesh
                    name="Object_31"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.BLACK}
                  />
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.BLUE}
                  />
                </group>
              </group>
              <group
                name="Plane009_20"
                position={[0.234, 1.632, 0.674]}
                rotation={[0.997, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group
                name="Plane010_22"
                position={[0.227, 1.631, 0.667]}
                rotation={[-1, 0, 0]}
                scale={0.518}>
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.WHITE}
                />
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.BLACK}
                />
              </group>
              <group
                name="Armature_59"
                position={[0.621, 0.403, -1.878]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.53}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials.CIRCUIT}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name="Object_45"
                    geometry={nodes.Object_45.geometry}
                    material={materials['BODY.002']}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <skinnedMesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.CIRCUIT}
                    skeleton={nodes.Object_46.skeleton}
                  />
                  <group name="Circle001_57" />
                  <group name="Retopo_Cube005_58" />
                </group>
              </group>
              <group
                name="Armature001_95"
                position={[1.397, 0.523, 0]}
                rotation={[-Math.PI / 2, 0.147, Math.PI / 2]}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_86"
                    geometry={nodes.Object_86.geometry}
                    material={materials['CIRCUIT.001']}
                    skeleton={nodes.Object_86.skeleton}
                  />
                  <skinnedMesh
                    name="Object_88"
                    geometry={nodes.Object_88.geometry}
                    material={materials['BODY.001']}
                    skeleton={nodes.Object_88.skeleton}
                  />
                  <skinnedMesh
                    name="Object_89"
                    geometry={nodes.Object_89.geometry}
                    material={materials['CIRCUIT.001']}
                    skeleton={nodes.Object_89.skeleton}
                  />
                  <group name="Plane001_93" />
                  <group name="Retopo_Cube001_94" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/404.glb')
