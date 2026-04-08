import ControlPanel from './ControlPanel'
import AssetGuide from './AssetGuide'
import HelpTooltip from './HelpTooltip'
import type { SceneState } from '../../hooks/useSceneControls'

interface Props {
  state: SceneState
  update: <K extends keyof SceneState>(key: K, value: SceneState[K]) => void
  reset: () => void
}

export default function Overlay({ state, update, reset }: Props) {
  }
  return (
    <div className="fixed inset-0 pointer-events-none z-10">

      <div className="absolute top-6 left-6 pointer-events-auto flex flex-col gap-3">
        <div>
          <h1 className="text-white font-semibold text-xl tracking-tight leading-none">3D Scene Studio</h1>
          <p className="text-slate-500 text-xs mt-1 tracking-wide">Three.js + React Three Fiber</p>
        </div>
      </div>

      <div className="absolute top-6 right-6 pointer-events-auto flex flex-col gap-3">
        <ControlPanel state={state} update={update} reset={reset} />
        <AssetGuide />
      </div>

      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <HelpTooltip />
      </div>

      <div className="absolute bottom-6 right-6 pointer-events-none">
        <p className="text-[10px] text-slate-600 font-mono text-right">
          @react-three/fiber &bull; @react-three/drei &bull; postprocessing
        </p>
      </div>

    </div>
  )
}
