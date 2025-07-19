'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

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
      <div id="formholder">
        <div id="select">
          <select id="inds">
            <option value="county" selected="selected">County</option>
            <option value="state">State</option>
            <option value="race">Race</option>
            <option value="gender">Sex</option>
            <option value="age">Age</option>
            <option value="education">Education</option>
          </select>
        </div>

        <span id="searchform" name="myform">
          <input type="text" id="myVal" size="30" placeholder="NY, WI, Los Angeles County"/>
          <input id="search" name="Submit" type="button" value="Search" onClick={() => alert("Search")} />
          <input type="button" value="X" onClick={() => alert("reset")}/>
        </span>
        <form id="areaform">
          Weight:
          <input type="radio" name="area" value="vote" checked/>Vote
          <input type="radio" name="area" value="electoral"/> Electoral
          <input type="radio" name="area" value="vpi"/>VPI<br/>
        </form>
      </div>

      <button className="incrbtn" id="upclick">&#9650;</button>
      <button className="incrbtn" id="downclick">&#9660;</button>
    </>
  )
}
