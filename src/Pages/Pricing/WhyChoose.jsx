import React from 'react';
import { Zap, ShieldCheck, Sliders, Heart, RefreshCw, Smartphone } from 'lucide-react';

const reasons = [
  { title: 'Lightning Fast', desc: 'Photos processed and animated in seconds with our optimized AI pipelines.', icon: <Zap /> },
  { title: 'Privacy First', desc: 'Your memories are yours. We encrypt and never store your images indefinitely.', icon: <ShieldCheck /> },
  { title: 'Style Control', desc: 'Choose from various animation styles that match the mood of your memories.', icon: <Sliders /> },
  { title: 'Emotional Impact', desc: 'Experience the deep emotional connection of seeing loved ones move again.', icon: <Heart /> },
  { title: 'Restore Old Photos', desc: 'Bring faded or black and white heritage photos back to life instantly.', icon: <RefreshCw /> },
  { title: 'Works Everywhere', desc: 'Download videos that are optimized for sharing on any social platform.', icon: <Smartphone /> },
];

export const WhyChoose = () => (
  <section className="py-24 px-6 bg-[#FAF9F5]">
    <div className="w-11/12 mx-auto text-center">
      <h2 className="text-3xl font-serif font-bold mb-4">Why Choose <span className="text-[#7c602e]">FlashbackAI</span></h2>
      <p className="text-gray-500 mb-16 font-medium">Results that last a lifetime, in seconds.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 text-left hover:shadow-lg transition-shadow">
            <div className="bg-[#fcfaf7] w-10 h-10 rounded-lg flex items-center justify-center text-[#7c602e] mb-6 border border-[#e5d5bc]/30">
              {React.cloneElement(item.icon, { size: 20 })}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);