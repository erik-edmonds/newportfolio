'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

//Homepage Scene
import { Earth } from "@/components/models/Earth";
import { Stars } from "@react-three/drei";
import { Sun } from "@/components/models/Sun";
import { Planes } from "@/components/models/Planes";
import { Astronaut } from "@/components/models/Astronaut";
import { OrbitingAstronaut } from "@/components/models/OrbitingAstronaut";
import { Satellite } from "@/components/models/Satellite";
import { Moon } from "@/components/models/Moon";
import { Fighter } from "@/components/models/Fighter";

import type { Coord } from "@/helpers/components/Types";
import {ToneMappingMode} from "postprocessing";

//TODO: Make list external
//TODO: Switch from countries to cities
const coords: Coord[] = [
  //Europe
  { lat: 51.525437, lng: -0.127108, current: false, hash: '#england-london'},
  { lat: 38.7223, lng: -9.1393, current: false, hash: '#portugal-lisbon'},
  { lat: 41.387, lng: 2.168, current: false, hash: '#spain-barcelona'},
  { lat: 48.8575, lng: 2.3514, current: false, hash: '#france-paris'},
  { lat: 43.7102, lng: 7.2620, current: false, hash: '#france-nice'},
  { lat: 45.4685, lng: 9.1824, current: false, hash: '#italy-milan'},
  { lat: 45.0703, lng: 7.6869, current: false, hash: '#italy-turin'},
  { lat: 50.8477, lng: 4.3572, current: false, hash: '#belguim-brussels'},
  { lat: 52.3676, lng: 4.9041, current: false, hash: '#dutch-amsterdam'},
  { lat: 50.1109, lng: 8.6821, current: false, hash: '#germany-frankfurt'},
  { lat: 48.1351, lng: 11.5820, current: false, hash: '#germany-munich'},
  { lat: 52.5200, lng: 13.4050, current: false, hash: '#germany-berlin'},
  { lat: 50.0755, lng: 14.4378, current: false, hash: '#czech-prague'},
  { lat: 50.0647, lng: 19.9450, current: false, hash: '#poland-krakow'},
  { lat: 47.4979, lng: 19.0402, current: false, hash: '#hungary-budapest'},
  //Asia
  { lat: -2.44314, lng: 133.139, current: false, hash: '#indonesia-bali' },
  { lat: -6.1944, lng: 106.8229, current: false, hash: '#indonesia-jakarta' },
  { lat: -0.8762, lng: 131.2558, current: false, hash: '#indonesia-rajaampat' },
  { lat: -7.8014, lng: 110.3648, current: false, hash: '#indonesia-yogyakarta' },
  { lat: 3.1319, lng: 101.6841, current: false, hash: '#malaysia-kuala' },
  { lat: 5.2632, lng: 100.4846, current: false, hash: '#malaysia-penang' },
  { lat: 7.8804, lng: 98.3923, current: false, hash: '#thailand-phuket' },
  { lat: 13.7563, lng: 100.5018, current: false, hash: '#thailand-bangkok' },
  { lat: 18.7883, lng: 98.9853, current: false, hash: '#thailand-chaingmai' },
  { lat: 19.9105, lng: 99.8406, current: false, hash: '#thailand-chaingrai' },
  { lat: 19.8833, lng: 102.1387, current: false, hash: '#cambodia-luangprabang' },
  { lat: 10.6056, lng: 104.1714, current: false, hash: '#cambodia-kampot' },
  { lat: 10.924067, lng: 106.713028, current: false, hash: '#vietnam-phuquoc' },
  { lat: 10.8231, lng: 106.6297, current: false, hash: '#vietnam-hcmc' },
  { lat: 11.9404, lng: 108.4583, current: false, hash: '#vietnam-dalat' },
  { lat: 25.0330, lng: 121.5654, current: false, hash: '#taiwan-taipei' },
  { lat: 22.6273, lng: 120.3014, current: false, hash: '#taiwan-kaohsiung' },
  { lat: 6.9271, lng: 79.8612, current: false, hash: '#srilanka-colombo' },
  { lat: 14.5995, lng: 120.9842, current: false, hash: '#phillipines-manila' },
  { lat: 9.8482, lng: 126.0458, current: false, hash: '#phillipines-siargao' },
  { lat: 1.3521, lng: 103.8198, current: false, hash: '#singapore' },
  { lat: 10.2926, lng: 123.9022, current: false, hash: '#phillipines-cebu' },
  //Middle East
  { lat: 41.0082, lng: 28.9784, current: false, hash: '#turkey-istanbul' },
  { lat: 24.7136, lng: 46.6753, current: false, hash: '#saudi-riyadh' },
  { lat: 25.2854, lng: 51.5310, current: false, hash: '#qatar-doha' },
  //Africa
  { lat: 34.0181, lng: -5.0078, current: false, hash: '#morocco-fes' },
  { lat: 31.5085, lng: -9.7595, current: false, hash: '#morocco-essaouira' },
  { lat: 31.6225, lng: -7.9898, current: false, hash: '#morocco-marrakech' },
  //South America
  { lat: -16.489689, lng: -68.119293, current: true, hash: '#bolivia-lapaz' },
  { lat: 4.7110, lng: -74.0721, current: false, hash: '#colombia-bogota' },
  { lat: -12.0467, lng: -77.0431, current: false, hash: '#peru-lima' },
  { lat: 21.1619, lng: -86.8515, current: false, hash: '#mexico-cancun' },
  { lat: 18.5601, lng: -68.3725, current: false, hash: '#dr-puntacana' },
  { lat: 19.7643, lng: -70.5143, current: false, hash: '#dr-sosua' },
  { lat: 18.4153, lng: -66.0594, current: false, hash: '#pr-sanjuan' },
  //North America
  { lat: 45.5019, lng: -73.5674, current: false, hash: '#canada-montreal' },
  { lat: 43.6532, lng: -79.3832, current: false, hash: '#canada-toronto' },
  { lat: 21.3099, lng: -157.8581, current: false, hash: '#us-hawaii' },
  { lat: 40.7128, lng: -74.0060, current: false, hash: '#us-nyc' },
  { lat: 42.3555, lng: -71.0565, current: false, hash: '#us-boston' },
  { lat: 41.8832, lng: -87.6324, current: false, hash: '#us-chicago' },
  { lat: 25.7617, lng: -80.1918, current: false, hash: '#us-miami' },
  { lat: 33.7501, lng: -84.3885, current: false, hash: '#us-atlanta' },
  { lat: 32.7767, lng: -96.7970, current: false, hash: '#us-dallas' },
  { lat: 39.7392, lng: -104.9903, current: false, hash: '#us-denver' },
  { lat: 38.6274, lng: -90.1982, current: false, hash: '#us-stlouis' },
  { lat: 34.0549, lng: -118.2426, current: false, hash: '#us-losangeles' },
  { lat: 37.7749, lng: -122.4194, current: false, hash: '#us-sanfrancisco' },
  { lat: 47.6061, lng: -122.3328, current: false, hash: '#us-seattle' },
  { lat: 43.4799, lng: -110.7624, current: false, hash: '#us-jacksonhole' },
  { lat: 44.9778, lng: -93.2650, current: false, hash: '#us-minneapolis' },
  { lat: 39.0997, lng: -94.5786, current: false, hash: '#us-kcmc' },
  { lat: 40.7606, lng: -111.8881, current: false, hash: '#us-saltlake' }
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
      <div className=' flex h-screen w-screen flex-col flex-wrap items-center md:flex-row bg-[#fcfaf7]'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Hi!</h1>
          <p className='mb-8 text-xl leading-normal tracking-tighter text-[#929296]'>I'm Erik Edmonds, a data scientist
            and digital nomad! Track where I am -- red dot. (Spin the globe!)</p>
        </div>

        <div className='size-full text-center md:w-3/5'>
          <View orbit className='flex size-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Earth coords={coords}/>
              <Planes scale={0.1} position={[0,1.25,0]}/>
              <Astronaut scale={0.1} position={[-1.5,0,0]} rotation-y={Math.PI/2}/>
              <Satellite position={[-1.5,0,0]} rotation-y={Math.PI/4}/>
              <Moon position={[3,3,-5]}/>
              <Sun position={[-3,3,-5]}/>
              <OrbitingAstronaut scale={0.1} position={[2,3,-5]} rotation-y={Math.PI/2}/>
              <Stars />
              <Fighter scale={0.1}/>
              <Common color="#01234e"/>
            </Suspense>
          </View>
        </div>
      </div>
    </>
  )
}
