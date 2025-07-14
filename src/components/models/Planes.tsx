import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Planes(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/fighter.glb')
  animations[0].name = "Plane"
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["Plane"].reset().play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="5216c7924b1b4afaadbbdb62187601b7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Samolot2"
                  position={[-88.565, 75.699, -99.816]}
                  rotation={[-1.484, 0, 0.175]}
                  scale={2.127}>
                  <group
                    name="Object_5"
                    position={[0, -9.463, -3.261]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Samolot2_Samolot2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Samolot2_Samolot2_0.geometry}
                      material={materials.Samolot2}
                    />
                    <mesh
                      name="Samolot2_Samolot2_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Samolot2_Samolot2_0_1.geometry}
                      material={materials.Samolot2}
                    />
                  </group>
                  <group name="Smiglo2" position={[0, -22.495, -3.114]} scale={0.47}>
                    <group
                      name="Object_9"
                      position={[0, 1.886, -0.012]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Smiglo2_Samolot2_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smiglo2_Samolot2_0.geometry}
                        material={materials.Samolot2}
                      />
                    </group>
                    <group name="Smiglo2OutLine">
                      <group
                        name="Object_12"
                        position={[0, 1.886, -0.012]}
                        rotation={[Math.PI / 2, 0, 0]}>
                        <mesh
                          name="Smiglo2OutLine_OutLine_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Smiglo2OutLine_OutLine_0.geometry}
                          material={materials.OutLine}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Samolot2OutLine">
                    <group
                      name="Object_15"
                      position={[0, -9.463, -3.261]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Samolot2OutLine_OutLine_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot2OutLine_OutLine_0.geometry}
                        material={materials.OutLine}
                      />
                      <mesh
                        name="Samolot2OutLine_OutLine_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot2OutLine_OutLine_0_1.geometry}
                        material={materials.OutLine}
                      />
                      <mesh
                        name="Samolot2OutLine_OutLine_0_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot2OutLine_OutLine_0_2.geometry}
                        material={materials.OutLine}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy001"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_20" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy001_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy001_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy002"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_23" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy002_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy002_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy003"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_26" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy003_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy003_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy004"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_29" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy004_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy004_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy005"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_32" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy005_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy005_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy006"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_35" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy006_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy006_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy007"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_38" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy007_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy007_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Lewy008"
                    position={[7.685, -8.198, -4.653]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_41" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Lewy008_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Lewy008_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy001"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_44" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy001_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy001_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy002"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_47" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy002_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy002_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy003"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_50" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy003_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy003_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy004"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_53" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy004_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy004_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy005"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_56" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy005_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy005_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy006"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_59" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy006_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy006_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy007"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_62" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy007_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy007_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk2Prawy008"
                    position={[-7.712, -8.203, -4.648]}
                    rotation={[1.569, 0, 0.007]}
                    scale={0.142}>
                    <group name="Object_65" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk2Prawy008_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk2Prawy008_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Samolot1"
                  position={[3.702, 26.938, 171.432]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Object_68"
                    position={[0, 7.993, -4.544]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Samolot1_Samolot1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Samolot1_Samolot1_0.geometry}
                      material={materials.Samolot1}
                    />
                  </group>
                  <group name="Smiglo1" position={[0, -35.577, -2.426]}>
                    <group name="Object_71" rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Smiglo1_Samolot1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smiglo1_Samolot1_0.geometry}
                        material={materials.Samolot1}
                      />
                    </group>
                    <group name="Smiglo1OutLine">
                      <group name="Object_74" rotation={[Math.PI / 2, 0, 0]}>
                        <mesh
                          name="Smiglo1OutLine_OutLine_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Smiglo1OutLine_OutLine_0.geometry}
                          material={materials.OutLine}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Samolot1OutLine">
                    <group
                      name="Object_77"
                      position={[0, 7.993, -4.544]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Samolot1OutLine_OutLine_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot1OutLine_OutLine_0.geometry}
                        material={materials.OutLine}
                      />
                      <mesh
                        name="Samolot1OutLine_OutLine_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot1OutLine_OutLine_0_1.geometry}
                        material={materials.OutLine}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Samolot3"
                  position={[80.002, 40.546, -185.917]}
                  rotation={[-1.484, 0.087, -0.087]}>
                  <group
                    name="Object_83"
                    position={[-8.442, 1.163, 0.206]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Samolot3_Samolot3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Samolot3_Samolot3_0.geometry}
                      material={materials.Samolot3}
                    />
                  </group>
                  <group name="Smiglo3" position={[0.004, -68.385, -1.986]}>
                    <group
                      name="Object_86"
                      position={[-8.446, 143.622, -0.294]}
                      rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                      <mesh
                        name="Smiglo3_Samolot3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smiglo3_Samolot3_0.geometry}
                        material={materials.Samolot3}
                      />
                    </group>
                    <group name="Smiglo3OutLine">
                      <group
                        name="Object_89"
                        position={[-8.446, 143.622, -0.294]}
                        rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                        <mesh
                          name="Smiglo3OutLine_OutLine_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Smiglo3OutLine_OutLine_0.geometry}
                          material={materials.OutLine}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Samolot3OutLine">
                    <group
                      name="Object_92"
                      position={[-8.442, 1.163, 0.206]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Samolot3OutLine_OutLine_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot3OutLine_OutLine_0.geometry}
                        material={materials.OutLine}
                      />
                      <mesh
                        name="Samolot3OutLine_OutLine_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Samolot3OutLine_OutLine_0_1.geometry}
                        material={materials.OutLine}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy001"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_96" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy001_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy001_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy002"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_99" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy002_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy002_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy003"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_102" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy003_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy003_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy004"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_105" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy004_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy004_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy005"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_108" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy005_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy005_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy006"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_111" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy006_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy006_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Lewy007"
                    position={[18.786, -16.669, -5.098]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.305}>
                    <group name="Object_114" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Lewy007_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Lewy007_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy001"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_117" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy001_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy001_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy002"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_120" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy002_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy002_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy003"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_123" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy003_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy003_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy004"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_126" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy004_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy004_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy005"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_129" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy005_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy005_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy006"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_132" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy006_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy006_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                  <group
                    name="Pocisk3Prawy007"
                    position={[-19.011, -16.619, -5.102]}
                    rotation={[1.579, 0.001, 0.095]}
                    scale={0.303}>
                    <group name="Object_135" position={[0, 0, -1.693]}>
                      <mesh
                        name="Pocisk3Prawy007_Pocisk_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Pocisk3Prawy007_Pocisk_0.geometry}
                        material={materials.Pocisk}
                      />
                    </group>
                  </group>
                </group>
                <group name="Chmurka1" position={[-195.208, 139.194, 884.582]} scale={1.29}>
                  <mesh
                    name="Chmurka1_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka1_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka1OutLine">
                    <mesh
                      name="Chmurka1OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka1OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
                  </group>
                </group>
                <group name="Chmurka2" position={[-113.676, -9.444, 872.923]} scale={1.29}>
                  <mesh
                    name="Chmurka2_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka2_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka2OutLine">
                    <mesh
                      name="Chmurka2OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka2OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
                  </group>
                </group>
                <group
                  name="Chmurka3"
                  position={[35.28, -38.23, 883.824]}
                  rotation={[-0.592, -0.398, 0.713]}
                  scale={1.29}>
                  <mesh
                    name="Chmurka3_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka3_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka3OutLine">
                    <mesh
                      name="Chmurka3OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka3OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
                  </group>
                </group>
                <group
                  name="Chmurka4"
                  position={[-135.727, -25.374, 883.824]}
                  rotation={[-0.592, -0.398, 0.713]}
                  scale={1.29}>
                  <mesh
                    name="Chmurka4_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka4_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka4OutLine">
                    <mesh
                      name="Chmurka4OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka4OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
                  </group>
                </group>
                <group
                  name="Chmurka5"
                  position={[136.497, 127.665, 859.228]}
                  rotation={[-0.031, -0.172, -0.177]}
                  scale={1.29}>
                  <mesh
                    name="Chmurka5_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka5_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka5OutLine">
                    <mesh
                      name="Chmurka5OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka5OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
                  </group>
                </group>
                <group name="Chmurka6" position={[-68.314, -16.052, 884.582]} scale={1.29}>
                  <mesh
                    name="Chmurka6_Chmurki_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chmurka6_Chmurki_0.geometry}
                    material={materials.Chmurki}
                  />
                  <group name="Chmurka6OutLine">
                    <mesh
                      name="Chmurka6OutLine_OutLine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chmurka6OutLine_OutLine_0.geometry}
                      material={materials.OutLine}
                    />
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

useGLTF.preload('/models/fighters.glb')
