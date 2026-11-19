import { X } from 'lucide-react'

export default function Modal({ open, title, children, onClose, wide = false }) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4" onMouseDown={onClose}>
    <div className={`w-full ${wide ? 'max-w-3xl' : 'max-w-lg'} overflow-hidden rounded-2xl bg-white shadow-2xl`} onMouseDown={(event) => event.stopPropagation()}>
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4"><h2 className="font-display text-xl text-slate-900">{title}</h2><button onClick={onClose} className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={19} /></button></div>
      <div className="max-h-[80vh] overflow-y-auto p-6">{children}</div>
    </div>
  </div>
}
