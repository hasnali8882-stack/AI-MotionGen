import { useState, useCallback } from 'react'

export type ObjectShape = 'torusKnot' | 'icosahedron' | 'octahedron' | 'torus'
export type EnvironmentPreset = 'city' | 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest'

export interface SceneState {
  shape: ObjectShape
  rotationSpeed: number
  bloomIntensity: number
  vignetteIntensity: number
  objectColor: string
  metalness: number
  roughness: number
  envPreset: EnvironmentPreset
  wireframe: boolean
  autoRotateCamera: boolean
}

const defaults: SceneState = {
  shape: 'torusKnot',
  rotationSpeed: 0.4,
  bloomIntensity: 0.6,
  vignetteIntensity: 0.5,
  objectColor: '#38bdf8',
  metalness: 0.8,
  roughness: 0.15,
  envPreset: 'city',
  wireframe: false,
  autoRotateCamera: false,
}

export function useSceneControls() {
  const [state, setState] = useState<SceneState>(defaults)

  const update = useCallback(<K extends keyof SceneState>(key: K, value: SceneState[K]) => {
    setState(prev => ({ ...prev, [key]: value }))
  }, [])

  const reset = useCallback(() => setState(defaults), [])

  return { state, update, reset }
}
