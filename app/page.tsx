'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Earth } from "@/components/canvas/Earth";
import { Stars} from "@react-three/drei";
import { Planes } from "@/components/models/Planes";

import type { Coord } from "@/helpers/components/Types";
//TODO: Make list external
//TODO: Switch from countries to cities
const coords: Coord[] = [
  { lat: 51.525437, lng: -0.127108, hash: '#england-londa'},
  { lat: -2.44314, lng: 133.139, hash: '#indonesia' },
  { lat: -16.489689, lng: -68.119293, hash: '#bolivia-lapaz' },
  { lat: 4.7110, lng: -74.0721, hash: '#colombia-bogota' },
  { lat: -12.0467, lng: -77.0431, hash: '#peru-lima' },
  { lat: 34.0181, lng: -5.0078, hash: '#morocco-fes' },
  { lat: 31.5085, lng: -9.7595, hash: '#morocco-essaouira' },
  { lat: 31.6225, lng: -7.9898, hash: '#morocco-marrakech' }
]

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

export default function Page() {
  return (
    <>
      <div className=' flex h-screen w-screen flex-col flex-wrap items-center md:flex-row bg-[#f6efe5]'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Hi!</h1>
          <p className='mb-8 text-xl leading-normal'>My name is Erik Edmonds, and this is my portfolio!
            Scroll to learn more about me!</p>
        </div>

        <div className='size-full text-center md:w-3/5'>
          <View orbit className='flex size-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Earth coords={coords}/>
              <Planes scale={0.1} position={[0,1.25,0]}/>
              <Stars />
              <Common color="black"/>
            </Suspense>
          </View>
        </div>
      </div>
    </>
  )
}
