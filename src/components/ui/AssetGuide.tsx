import { useState } from 'react'

const ASSET_EXAMPLES = [
  { icon: '📦', label: '3D Models (.glb / .gltf)', path: '/models/myModel.glb', code: `useGLTF('/models/myModel.glb')` },
  { icon: '🖼', label: 'Textures & Images', path: '/images/texture.png', code: `useTexture('/images/texture.png')` },
  { icon: '🎬', label: 'Video Textures', path: '/videos/bg.mp4', code: `<video src="/videos/bg.mp4" />` },
  { icon: '🎵', label: 'Audio Files', path: '/audio/ambient.mp3', code: `new Audio('/audio/ambient.mp3')` },
]

export default function AssetGuide() {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-panel rounded-2xl overflow-hidden w-72 shadow-2xl">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2.5">
          <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span className="text-sm font-semibold text-white tracking-tight">Asset Loader Guide</span>
        </div>
        <svg
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-white/[0.06] p-4 space-y-3">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Place your assets in <code className="text-sky-400 font-mono">/public</code> subfolders. Reference them with absolute paths:
          </p>
          {ASSET_EXAMPLES.map(ex => (
            <div key={ex.path} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">{ex.icon}</span>
                <span className="text-[11px] font-medium text-slate-300">{ex.label}</span>
              </div>
              <div className="font-mono text-[10px] text-slate-500">
                Path: <span className="text-amber-400">{ex.path}</span>
              </div>
              <div className="font-mono text-[10px] text-slate-500">
                Usage: <span className="text-emerald-400">{ex.code}</span>
              </div>
            </div>
          ))}
          <div className="rounded-lg bg-sky-500/[0.08] border border-sky-500/20 p-2.5">
            <p className="text-[10px] text-sky-300 font-mono leading-relaxed">
              {`// Example: load a GLB model\nimport { useGLTF } from '@react-three/drei'\nconst { scene } = useGLTF('/models/myModel.glb')`}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
