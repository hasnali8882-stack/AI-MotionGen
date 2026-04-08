const SHORTCUTS = [
  { keys: ['Left drag'], desc: 'Rotate camera' },
  { keys: ['Right drag'], desc: 'Pan view' },
  { keys: ['Scroll'], desc: 'Zoom in / out' },
  { keys: ['Hover'], desc: 'Distort object' },
]

export default function HelpTooltip() {
  return (
    <div className="glass-panel rounded-xl px-4 py-3 shadow-xl">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2.5">Navigation</p>
      <div className="space-y-1.5">
        {SHORTCUTS.map(s => (
          <div key={s.desc} className="flex items-center justify-between gap-6">
            <span className="text-[11px] text-slate-500">{s.desc}</span>
            <div className="flex gap-1">
              {s.keys.map(k => (
                <kbd key={k} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                  {k}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
