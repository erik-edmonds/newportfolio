'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { ErrorModel } from "@/components/models/404";
import {Earth} from "@/components/canvas/Earth";
import {Planes} from "@/components/models/Planes";
import {Stars} from "@react-three/drei";

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

export default function NotFound() {
  return (
    <>
      <div className=' flex h-screen w-screen flex-col flex-wrap items-center md:flex-row bg-[#f6efe5]'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Sorry!</h1>
          <p className='mb-8 text-xl leading-normal'>Hit a snag, let's get you back on track!</p>
        </div>

        <div className='size-full text-center md:w-3/5'>
          <View className='flex size-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <ErrorModel />
              <Common/>
            </Suspense>
          </View>
        </div>
      </div>
    </>
  )
}
