import React from "react";
import { Star, Square, BadgeCheck } from "lucide-react";
import { Button } from "../FlashbackAI/Button";

// Import your curly arrow SVG here
import CurlyArrow from "../../assets/curly-arrow.svg"; 

const CurlyArrowPlaceholder = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" className="text-yellow-500">
    <path d="M10 35C15 35 25 30 25 20C25 15 20 12 18 15C16 18 20 25 35 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M30 20L36 25L30 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const testimonials = [
  {
    name: "Michael R.",
    loc: "London, UK",
    quote: "Seeing my grandfather smile again through this AI was a moment I'll never forget. The technology is simply magical.",
    avatar: "MR",
  },
  {
    name: "Elena D.",
    loc: "Madrid, Spain",
    quote: "The way it handles old black and white photos is incredible. It gave my family history a whole new dimension.",
    avatar: "ED",
  },
  {
    name: "Sarah J.",
    loc: "Berlin, Germany",
    quote: "I used it for my wedding photos and the subtle movements added so much emotion. Highly recommend to everyone!",
    avatar: "SJ",
  },
  {
    name: "John K.",
    loc: "Toronto, Canada",
    quote: "Simple, fast and results are better than any other tool I've tried. Worth every penny.",
    avatar: "JK",
  },
  {
    name: "Anika L.",
    loc: "Mumbai, India",
    quote: "It's like seeing a video that was never filmed. The movement feels very natural and respectful to the original photo.",
    avatar: "AL",
  },
  {
    name: "David W.",
    loc: "Sydney, Australia",
    quote: "Customer support was great when I had a question, but the app is so easy you won't need them.",
    avatar: "DW",
  },
];

const TestimonialCard = ({ user }) => (
  <div className="bg-[#f2ede4] p-6 rounded-[2.5rem] border border-black/5 flex flex-col shadow-sm text-left">
    {/* Stacked Image Container */}
    <div className="relative mb-10 pt-4">
      
      {/* Main Large Image (After) */}
      <div className="relative z-0 ml-10 shadow-xl rounded-[2rem] overflow-hidden border-[3px] border-[#7c602e] aspect-square">
        <img
          src={`https://i.pravatar.cc/400?u=${user.name}`}
          className="w-full h-full object-cover grayscale brightness-90"
          alt="Animated result"
        />
        {/* Play/Stop Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
            <Square size={16} fill="white" className="text-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Small "Before" Thumbnail */}
      <div className="absolute top-0 left-0 z-20 w-28 aspect-square rounded-[1.5rem] border-2 border-[#7c602e] overflow-hidden shadow-lg bg-gray-200">
        <img
          src={`https://i.pravatar.cc/150?u=${user.name}`}
          className="w-full h-full object-cover grayscale blur-[0.5px]"
          alt="Before"
        />
      </div>

      {/* Curly Arrow */}
      <div className="absolute top-14 left-[80px] z-30 scale-85 md:scale-100">
        <img src={CurlyArrow} alt="" />
      </div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col h-full">
      {/* Stars - Matches Brown Theme */}
      <div className="flex text-[#7c602e] gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] text-gray-800 font-medium leading-relaxed tracking-tight mb-6 italic">
        "{user.quote}"
      </p>

      {/* Footer Info */}
      <div className="mt-auto border-t border-gray-300/60 pt-5 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#7c602e] text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
            {user.avatar}
          </div>
          <div className="text-left">
            <p className="text-[15px] font-bold text-gray-900 leading-none mb-1">
              {user.name}
            </p>
            <p className="text-[12px] text-gray-500 font-medium">
              {user.loc}
            </p>
          </div>
        </div>

        {/* Verified Badge */}
        <div className="flex items-center gap-1.5">
          <BadgeCheck size={18} fill="#3b82f6" className="text-white" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Verified user</span>
        </div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => (
  <section className="py-24 px-6 bg-[#fdfcfb]">
    <div className="w-11/12 mx-auto text-center">
      <p className="text-[10px] text-[#7c602e] font-bold tracking-[0.3em] uppercase mb-4">
        Testimonials
      </p>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
        Loved by Thousands
      </h2>
      <p className="text-gray-500 text-sm md:text-base mb-16 max-w-xl mx-auto font-medium">
        Thousands have already brought their treasured photos to life with
        gentle, lifelike motion — now it's your turn.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((u, i) => (
          <TestimonialCard key={i} user={u} />
        ))}
      </div>

      <div className="mt-20">
        <Button className="px-12 py-5 shadow-2xl hover:translate-y-[-2px] bg-[#7c602e] text-white rounded-full font-bold text-lg">
          Bring Your Photos To Life
        </Button>
      </div>
    </div>
  </section>
);