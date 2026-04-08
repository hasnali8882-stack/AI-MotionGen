import { EffectComposer, Bloom, Vignette, SMAA } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

interface Props {
  bloomIntensity: number
  vignetteIntensity: number
}

export default function PostProcessing({ bloomIntensity, vignetteIntensity }: Props) {
  return (
    <EffectComposer multisampling={0}>
      <SMAA />
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.55}
        luminanceSmoothing={0.3}
        mipmapBlur
        radius={0.7}
      />
      <Vignette
        offset={0.3}
        darkness={vignetteIntensity}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
