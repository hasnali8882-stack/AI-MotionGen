import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import SceneLights from './SceneLights'
import InteractiveObject from './InteractiveObject'
import GroundPlane from './GroundPlane'
import Particles from './Particles'
import PostProcessing from './PostProcessing'
import type { SceneState } from '../../hooks/useSceneControls'

interface Props {
  state: SceneState
}

export default function Scene3D({ state }: Props) {
  return (
    <Canvas
      shadows
      dpr={1.5}
      camera={{ position: [5, 5, 5], fov: 45, near: 0.1, far: 200 }}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: 'high-performance',
        toneMapping: 4,
        toneMappingExposure: 1.1,
      }}
      style={{ background: '#050810' }}
    >
      <Suspense fallback={null}>
        <SceneLights />

        <InteractiveObject
          shape={state.shape}
          color={state.objectColor}
          metalness={state.metalness}
          roughness={state.roughness}
          rotationSpeed={state.rotationSpeed}
          wireframe={state.wireframe}
        />

        <Particles />
        <GroundPlane />

        <Stars
          radius={60}
          depth={40}
          count={3000}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />

        <Environment preset={state.envPreset} />

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={20}
          autoRotate={state.autoRotateCamera}
          autoRotateSpeed={0.5}
          makeDefault
        />

        <PostProcessing
          bloomIntensity={state.bloomIntensity}
          vignetteIntensity={state.vignetteIntensity}
        />
      </Suspense>
    </Canvas>
  )
}
