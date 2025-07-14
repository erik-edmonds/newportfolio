import type { MarkerProps } from "@/helpers/components/Interfaces";
import { useSpring, animated } from "@react-spring/three";
import { Sphere } from "@react-three/drei";
import { useState } from "react";

//TODO: Update pin with more complex shape
const Planet = { Sphere: animated(Sphere) };

function placeObject(lat: number, lng: number, radius: number): Record<'position' | 'rotation', [number, number, number]> {
  const latRad = lat * (Math.PI / 180);
  const lngRad = -lng * (Math.PI / 180);

  return {
    position: [
      Math.cos(latRad) * Math.cos(lngRad) * radius,
      Math.sin(latRad) * radius,
      Math.cos(latRad) * Math.sin(lngRad) * radius
    ],
  }
}

export function Marker({ coord, radius }: MarkerProps ) {
  const [isHovered, setHovered] = useState(false);
  const springProps = useSpring({ scale: isHovered ? 3:1.5})
  const { rotation, position } = placeObject(coord.lat, coord.lng, radius );

  return (
    <Planet.Sphere
      onClick={() => (window.location.hash = coord.hash)}
      position={position}
      rotation={rotation}
      args={[0.01, 10, 10]}
      onPointerEnter={() => {setHovered(true); document.body.style.cursor = 'pointer';}}
      onPointerLeave={() => {setHovered(false); document.body.style.cursor = 'default';}}
      scale={springProps.scale}
    >
      <meshBasicMaterial color={0xff8e38} />
    </Planet.Sphere>
  )
}
