import React from 'react';
import { ArrowRight } from 'lucide-react';

// This data would typically come from your API
const momentsData = [
  {
    id: 1,
    title: "Playful motion",
    imageUrl: "/moment-1.png",
  },
  {
    id: 2,
    title: "Playful motion",
    imageUrl: "/moment-2.jpg",
  },
  {
    id: 3,
    title: "Playful motion",
    imageUrl: "/moment-3.jpg",
  },
  {
    id: 4,
    title: "Playful motion",
    imageUrl: "/moment-4.jpg",
  },
];


const MomentCard = ({ moment }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer flex flex-col">
    {/* Image Container */}
    <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem]">
      <img 
        src={moment.imageUrl} 
        alt={moment.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    
    {/* Card Footer */}
    <div className="px-6 py-5 flex items-center justify-between">
      <span className="text-sm font-bold text-gray-800">{moment.title}</span>
      <ArrowRight size={18} className="text-gray-400 group-hover:text-[#7c602e] group-hover:translate-x-1 transition-all" />
    </div>
  </div>
);

export const MomentsGallery = () => {
  return (
    <div className="flex-1 bg-[#fdfcfb] p-6 md:p-10 animate-in fade-in duration-500 overflow-y-auto">
      {/* Grid Layout - 2 columns on mobile/tablet, adjustments for larger screens */}
      <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {momentsData.map((moment) => (
          <MomentCard key={moment.id} moment={moment} />
        ))}
      </div>
      
      {/* Optional: Add a "New Upload" Floating Action Button if needed */}
      <div className="fixed bottom-10 right-10">
          {/* You could add your upload button here if you want it always visible */}
      </div>
    </div>
  );
};