interface Props {
  label: string
  value: boolean
  onChange: (v: boolean) => void
}

export default function ToggleButton({ label, value, onChange }: Props) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
        value
          ? 'bg-sky-500/20 border border-sky-500/40 text-sky-300'
          : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/8 hover:text-slate-300'
      }`}
    >
      <span className="tracking-wide uppercase">{label}</span>
      <div className={`w-7 h-3.5 rounded-full transition-colors duration-200 relative ${value ? 'bg-sky-500' : 'bg-white/20'}`}>
        <div className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-white shadow transition-transform duration-200 ${value ? 'translate-x-3.5' : 'translate-x-0.5'}`} />
      </div>
    </button>
  )
}
