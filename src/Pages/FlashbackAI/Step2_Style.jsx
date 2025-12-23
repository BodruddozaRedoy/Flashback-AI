import React from 'react';
import { Sparkles, Wind, History, Ghost, Sun, Check, Timer, PartyPopper } from 'lucide-react';

const styles = [
  { id: 1, name: 'Memory Match Motion', desc: 'AI analyzes your photo and picks the perfect animation style automatically.', icon: <Sparkles size={20} className="text-yellow-500"/>, recommended: true },
  { id: 2, name: 'Gentle Sway', desc: 'Subtle movement that breathes life into portraits with soft, natural motion.', icon: <Wind size={20} className="text-green-600"/> },
  { id: 3, name: 'Vintage Film', desc: 'Classic cinema feel with subtle grain and nostalgic motion effects.', icon: <History size={20} className="text-blue-500"/> },
  { id: 4, name: 'Dreamy Float', desc: 'Ethereal, cloud-like movement perfect for scenic and landscape memories.', icon: <Ghost size={20} className="text-gray-400"/> },
  { id: 5, name: 'Warm Glow', desc: 'Soft lighting shifts that add warmth and depth to cherished moments.', icon: <Sun size={20} className="text-orange-400"/> },
  { id: 6, name: 'Nature Breeze', desc: 'Organic motion that brings outdoor scenes to life with gentle wind effects.', icon: <Wind size={20} className="text-emerald-500"/> },
  { id: 7, name: 'Timeless Fade', desc: 'Elegant transitions that evoke the passage of time with grace.', icon: <Timer size={20} className="text-yellow-500"/> },
  { id: 8, name: 'Joyful Pulse', desc: 'Vibrant energy for celebrations and happy moments full of life.', icon: <PartyPopper size={20} className="text-orange-500"/> },
];

export const Step2_Style = ({ onNext }) => (
  <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-4 duration-500">
    <h1 className="text-4xl font-serif text-gray-900 mb-3 mx-auto leading-tight font-semibold">
        How would you like to bring your first <br /> photo to life?
    </h1>
    <p className="text-gray-500 mb-12">Choose an animation style that feels right for your memory</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
      {styles.map((style) => (
        <div 
          key={style.id}
          onClick={onNext}
          className={`p-6 rounded-[1.5rem] border text-left cursor-pointer transition-all hover:shadow-lg bg-white relative group ${
            style.recommended ? 'border-[#7c602e] ring-1 ring-[#7c602e]' : 'border-gray-100'
          }`}
        >
          {style.recommended && (
            <span className="absolute top-4 right-4 text-[10px] bg-[#fdf5e6] text-[#7c602e] px-2.5 py-1 rounded-md font-bold uppercase tracking-tight">
              Recommended
            </span>
          )}
          <div className="mb-4 p-2 bg-gray-50 w-fit rounded-lg group-hover:scale-110 transition-transform">{style.icon}</div>
          <h3 className="font-bold text-gray-900 mb-1">{style.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">{style.desc}</p>
        </div>
      ))}
    </div>

    <div className="inline-flex items-center gap-2 text-[11px] font-bold text-gray-500 bg-gray-50 px-6 py-2.5 rounded-full border border-gray-100">
      <Check size={14} className="text-green-500 stroke-[3px]" /> AI-guided animation styles — no guesswork
    </div>
  </div>
);