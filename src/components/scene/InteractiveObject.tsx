import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import type { ObjectShape } from '../../hooks/useSceneControls'

interface Props {
  shape: ObjectShape
  color: string
  metalness: number
  roughness: number
  rotationSpeed: number
  wireframe: boolean
}

function GeometryByShape({ shape }: { shape: ObjectShape }) {
  switch (shape) {
    case 'torusKnot':
      return <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
    case 'icosahedron':
      return <icosahedronGeometry args={[1.4, 1]} />
    case 'octahedron':
      return <octahedronGeometry args={[1.5, 2]} />
    case 'torus':
      return <torusGeometry args={[1.2, 0.45, 64, 128]} />
  }
}

export default function InteractiveObject({
  shape,
  color,
  metalness,
  roughness,
  rotationSpeed,
  wireframe,
}: Props) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * rotationSpeed * 0.5
    meshRef.current.rotation.y += delta * rotationSpeed
    meshRef.current.rotation.z += delta * rotationSpeed * 0.25
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.06 : 1}
      castShadow
      receiveShadow
    >
      <GeometryByShape shape={shape} />
      <MeshDistortMaterial
        color={hovered ? '#ffffff' : color}
        metalness={metalness}
        roughness={roughness}
        wireframe={wireframe}
        distort={hovered ? 0.25 : 0.1}
        speed={2}
        envMapIntensity={1.5}
      />
    </mesh>
  )
}
