"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Float, MeshGradientMaterial } from '@react-three/drei'

const Blob3D = () => {
  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 128, 128]} scale={2.5}>
        <MeshDistortMaterial
          color="#818cf8"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          emissive="#4f46e5"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  )
}

const Hero3DModel = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} alpha={true}>
        <Suspense fallback={null}>
          {/* Intense Lighting Setup */}
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#c084fc" intensity={1} />
          <pointLight position={[10, -10, 10]} color="#818cf8" intensity={1} />
          
          <Blob3D />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Hero3DModel
