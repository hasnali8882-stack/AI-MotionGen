import Scene3D from './components/scene/Scene3D'
import Overlay from './components/ui/Overlay'
import { useSceneControls } from './hooks/useSceneControls'

export default function App() {
  const { state, update, reset } = useSceneControls()

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Scene3D state={state} />
      </div>
      <Overlay state={state} update={update} reset={reset} />
    </div>
  )
}
