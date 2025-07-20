'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import * as THREE from 'three'
import { useState } from 'react'
import { Menu } from '@/components/dom/Menu'

export default function Scene({ ...props }) {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <Canvas {...props}
              onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}>
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </Canvas>
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>
  )
}
