import { useState } from 'react'
import Slider from './Slider'
import ToggleButton from './ToggleButton'
import type { SceneState, ObjectShape, EnvironmentPreset } from '../../hooks/useSceneControls'

interface Props {
  state: SceneState
  update: <K extends keyof SceneState>(key: K, value: SceneState[K]) => void
  reset: () => void
}

const SHAPES: { value: ObjectShape; label: string }[] = [
  { value: 'torusKnot', label: 'Torus Knot' },
  { value: 'icosahedron', label: 'Icosahedron' },
  { value: 'octahedron', label: 'Octahedron' },
  { value: 'torus', label: 'Torus' },
]

const ENVS: { value: EnvironmentPreset; label: string }[] = [
  { value: 'city', label: 'City' },
  { value: 'sunset', label: 'Sunset' },
  { value: 'dawn', label: 'Dawn' },
  { value: 'night', label: 'Night' },
  { value: 'warehouse', label: 'Warehouse' },
  { value: 'forest', label: 'Forest' },
]

const COLORS = [
  '#38bdf8', '#22d3ee', '#34d399', '#a78bfa',
  '#f472b6', '#fb923c', '#facc15', '#ffffff',
]

const SECTION = 'mb-5 last:mb-0'
const LABEL = 'text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2 block'

export default function ControlPanel({ state, update, reset }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="glass-panel rounded-2xl overflow-hidden w-72 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-sm font-semibold text-white tracking-tight">Scene Controls</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reset}
            className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors px-2 py-1 rounded hover:bg-white/5 uppercase tracking-wider font-medium"
          >
            Reset
          </button>
          <button
            onClick={() => setCollapsed(c => !c)}
            className="w-6 h-6 flex items-center justify-center rounded text-slate-500 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {!collapsed && (
        <div className="p-4 space-y-5 max-h-[calc(100vh-180px)] overflow-y-auto">

          <div className={SECTION}>
            <span className={LABEL}>Geometry</span>
            <div className="grid grid-cols-2 gap-1.5">
              {SHAPES.map(s => (
                <button
                  key={s.value}
                  onClick={() => update('shape', s.value)}
                  className={`py-2 px-3 rounded-lg text-xs font-medium transition-all duration-150 ${
                    state.shape === s.value
                      ? 'bg-sky-500/20 border border-sky-400/50 text-sky-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/8'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Object Color</span>
            <div className="flex gap-2 flex-wrap">
              {COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => update('objectColor', c)}
                  className={`w-7 h-7 rounded-lg transition-all duration-150 ${
                    state.objectColor === c ? 'ring-2 ring-white/80 ring-offset-1 ring-offset-black/50 scale-110' : 'hover:scale-105'
                  }`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Material</span>
            <div className="space-y-3">
              <Slider label="Metalness" value={state.metalness} min={0} max={1} step={0.01} onChange={v => update('metalness', v)} />
              <Slider label="Roughness" value={state.roughness} min={0} max={1} step={0.01} onChange={v => update('roughness', v)} />
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Animation</span>
            <div className="space-y-3">
              <Slider
                label="Rotation Speed"
                value={state.rotationSpeed}
                min={0}
                max={2}
                step={0.05}
                onChange={v => update('rotationSpeed', v)}
                formatValue={v => `${v.toFixed(2)}x`}
              />
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Post Processing</span>
            <div className="space-y-3">
              <Slider label="Bloom" value={state.bloomIntensity} min={0} max={3} step={0.05} onChange={v => update('bloomIntensity', v)} />
              <Slider label="Vignette" value={state.vignetteIntensity} min={0} max={1} step={0.02} onChange={v => update('vignetteIntensity', v)} />
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Environment</span>
            <div className="grid grid-cols-3 gap-1.5">
              {ENVS.map(e => (
                <button
                  key={e.value}
                  onClick={() => update('envPreset', e.value)}
                  className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all duration-150 ${
                    state.envPreset === e.value
                      ? 'bg-sky-500/20 border border-sky-400/50 text-sky-300'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/8'
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          <div className={SECTION}>
            <span className={LABEL}>Options</span>
            <div className="space-y-2">
              <ToggleButton label="Wireframe" value={state.wireframe} onChange={v => update('wireframe', v)} />
              <ToggleButton label="Auto Rotate Camera" value={state.autoRotateCamera} onChange={v => update('autoRotateCamera', v)} />
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
