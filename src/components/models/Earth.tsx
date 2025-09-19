import { Sphere, useTexture, Outlines } from "@react-three/drei";
import { Color } from "three";
import { Marker } from "@/components/canvas/Marker";
import { EarthProps } from "@/helpers/components/Interfaces";
import { Avatar } from "@/components/models/Avatar";

export function Earth({coords}: EarthProps) {
  const [earthColor, earthBump, earthSpecular] = useTexture([
    "/models/textures/earth-borderless.png",
    "/models/textures/earth-bump.jpg",
    "/models/textures/earth-specular.png",
  ]);
  const radius = 1;

  return (
    <group rotation={[0, 0, 0]}>
      {coords.map((coord) => {
        if (coord.current) {
          //TODO: FIX LOCATION
          return <Avatar scale={0.05} rotation={[Math.PI/3.5,0,0]} position={[0,0.71,0.71]}/>;
        }
        else {
          return <Marker key={coord.hash} coord={coord} radius={radius} current={coord.current}/>;
        }
      })}
      <Sphere args={[radius, 32, 32]}>
        <meshPhongMaterial map={earthColor} bumpMap={earthBump} bumpScale={0.002} specularMap={earthSpecular} specular={new Color()} />
        <Outlines thickness={1.1} color="black"/>
      </Sphere>
    </group>
  )
}
