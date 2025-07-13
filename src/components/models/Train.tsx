import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react';

export function Train(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/train.glb')
  animations[0].name = 'Train';

  const { actions } = useAnimations(animations, group)



  useEffect(() => {
    actions["Train"].reset().play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Wheels_0" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Buffers_1" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Button_Silver}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Black_Rust}
                />
              </group>
              <group name="Main_Body_2" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials['Body.003']}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.White}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Yellow_Rust}
                />
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Black_Paint}
                />
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Cream}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Body}
                />
              </group>
              <group name="Undercarriage_Skirt_3" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Axel_Hubs_4" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Wheels}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Wishbone_Suspension_5" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Wheels}
                />
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Suspension_Mounts_6" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Skirt_Rovets_7" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Side_Panel_Doors_8" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Oval_Covers_9" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Box_Tops001_10" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Vented_side_Doors_11" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Rivets_12" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials['Body.003']}
                />
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials.Yellow_Rust}
                />
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Knob_13" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Hinges_Rear_Grille_14" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Small_Side_Boxes_15" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Hinges_16" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Sides_Rails_17" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.White}
                />
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Side_Rails_Long_Top_18" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.White}
                />
              </group>
              <group name="Box_Tops_19" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Side_Grilles_20" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials['Body.003']}
                />
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Latches_21" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Hinges001_22" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group
                name="Door_Handles_by_Helindu_Downloaded_from_Sketchfab_23"
                position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.Button_Silver}
                />
              </group>
              <group name="Pipe_24" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Axel_Hubs001_25" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Clock_26" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Taps_and_Pipes_27" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials.Silver_Gold}
                />
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.Button_Silver}
                />
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.Button_Silver}
                />
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.White}
                />
              </group>
              <group name="Undercarriage_Skirt001_28" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Undercarriage_Skirt002_29" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Bracket_30" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Brackets_31" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Rear_Tank_32" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Front_Tank_33" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Coupler_34" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Coupler001_35" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.Black_Rust}
                />
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Sockets_36" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.Yellow}
                />
                <mesh
                  name="Object_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Black_Paint}
                />
                <mesh
                  name="Object_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Front_Grill_37" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials.Yellow_Rust}
                />
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Front_Grille_Bottom_Deformed_38" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Rear_Steps_39" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Side_Box_Hinges_40" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials['Body.003']}
                />
              </group>
              <group name="Side_Grilles001_41" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Tag_42" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Handles_43" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Rear_Grill_Lever_44" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Front_Tank001_45" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.Wheels}
                />
                <mesh
                  name="Object_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.White}
                />
              </group>
              <group name="Underside_Things_46" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Rear_Tanks_47" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Blank_Box_48" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Front_Strip_Panel_49">
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.Black_Paint}
                />
                <mesh
                  name="Object_133"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Interior_Filler_Cube_50" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_135"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group name="Cabin_Interior_51" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_137"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.Roof_Black}
                />
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.Cream}
                />
              </group>
              <group name="Pipe001_52" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.Copper}
                />
              </group>
              <group name="Pipe002_53" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.Copper}
                />
              </group>
              <group name="Hopper_Pipe_54" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.Wheels}
                />
              </group>
              <group name="Rear_Pipes_55" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Nuts_56" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Ls_57" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Ls001_58" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Grille_Thing_59" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.Yellow}
                />
                <mesh
                  name="Object_155"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group name="Rear_Lights_60" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_157"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_157.geometry}
                  material={materials.Black_Paint}
                />
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_159"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_159.geometry}
                  material={materials.Button_Silver}
                />
              </group>
              <group name="Front_Lights_61" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_161"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161.geometry}
                  material={materials.Black_Paint}
                />
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_163"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_163.geometry}
                  material={materials.Button_Silver}
                />
              </group>
              <group name="thing_62" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials.Yellow}
                />
              </group>
              <group name="Brass_Pipe_63" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials.Copper}
                />
              </group>
              <group name="Brass_Pipe_Front_64" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_169"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169.geometry}
                  material={materials.Copper}
                />
              </group>
              <group name="BR_Logo_65" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_171"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171.geometry}
                  material={materials.Roof_Grey}
                />
              </group>
              <group name="Text_66" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_173"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173.geometry}
                  material={materials.Roof_Grey}
                />
              </group>
              <group name="Live_Wire_Sign_67" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials.Electric}
                />
              </group>
              <group name="Live_Wire_Sign_Front_68" position={[-0.007, 0, 0]}>
                <mesh
                  name="Object_177"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177.geometry}
                  material={materials.Electric}
                />
              </group>
              <group name="Wheels001_71" position={[0.792, 0.693, 1.78]}>
                <mesh
                  name="Object_179"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Wheels002_72" position={[0.799, 0.693, 0.039]}>
                <mesh
                  name="Object_181"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Wheels003_74" position={[0.805, 0.693, -1.702]}>
                <mesh
                  name="Object_183"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Connecting_Rod001_75" position={[1.066, 0.466, 1.673]}>
                <mesh
                  name="Object_185"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Wheel_Control_77" position={[2.529, -0.105, 0.994]} />
              <group
                name="Wheels004_79"
                position={[-0.812, 0.693, 1.78]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group
                name="Wheels005_80"
                position={[-0.806, 0.693, 0.039]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group
                name="Wheels006_82"
                position={[-0.8, 0.693, -1.702]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.Roof_Black}
                />
              </group>
              <group name="Connecting_Rod002_83" position={[-1.282, 0.483, 1.916]}>
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.Yellow_Rust}
                />
              </group>
              <group name="Text001_84">
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.Roof_Grey}
                />
              </group>
              <group
                name="Text002_85"
                position={[-0.033, 0, 5.508]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials.Roof_Grey}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/train.glb')
