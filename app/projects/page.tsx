'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import { Gltf, MeshReflectorMaterial } from "@react-three/drei";

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const Frame = dynamic(() => import('@/components/canvas/Frame').then((mod)=> mod.Frame), {ssr: false,})
const Rig = dynamic(() => import('@/components/canvas/Frame').then((mod) => mod.Rig), {ssr: false})
export default function Page() {
  return (
    <>
      <div className=' flex h-screen w-screen flex-col flex-wrap items-center md:flex-row '>
        <View orbit className='flex size-full flex-col items-center justify-center'>
          <Suspense fallback={null}>
            <Frames />
            <mesh position={[0,-1.5,0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[100, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={100}
                roughness={0.5}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#49484a"
                metalness={0.1}
              />
            </mesh>
            <fog attach="fog" args={['#130136', 2, 10]} />
            <Rig />
            <Common color="#130136" position={[0,0,0]}/>
          </Suspense>
        </View>
      </div>

    </>
  )
}

const Frames = () => {
  return (
    <>
      <Frame id="cv" name="trains"  bg="#d1d1ca" position={[-3.5, 0, -5]} rotation={[0, 0.5, 0]} scale={1.5}>
        <Gltf src="models/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
      </Frame>
      <Frame id="visualization" name="election" bg="#e4cdac" position={[-1.75,0,-5]} rotation={[0, 0.25, 0]} scale={1.5}>
        <Gltf src="models/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
      </Frame>
      <Frame id="work" name="nft" position={[0,0,-5]} scale={1.5}>
        <Gltf src="models/fiesta_tea-transformed.glb" position={[0, -2, -5]} />
      </Frame>
      <Frame id="education" name={`gaussian\nsplatting`}  bg="#d1d1ca" position={[1.75, 0, -5]} rotation={[0, -0.25, 0]} scale={1.5}>
        <Gltf src="models/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
      </Frame>
      <Frame id="modeling" name="spiderverse" bg="#e4cdac" position={[3.5,0,-5]} rotation={[0, -0.5, 0]} scale={1.5}>
        <Gltf src="models/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
      </Frame>
    </>
  )
}
