import React, { useState } from 'react';
import { Search, Menu, Bell, User2, Home, Compass, PlaySquare, Clock, ThumbsUp, Film } from 'lucide-react';
import VideoCard from './components/VideoCard';
import Sidebar from './components/Sidebar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1074',
      title: 'Beautiful Cinematic Drone Footage of Nature',
      channel: 'Nature Explorers',
      views: '2.3M',
      timestamp: '3 days ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&q=80&w=1074',
      title: 'Advanced Web Development Tutorial 2024',
      channel: 'CodeMaster',
      views: '856K',
      timestamp: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=1074',
      title: 'Professional Photography Tips & Tricks',
      channel: 'Photo Pro',
      views: '1.1M',
      timestamp: '5 days ago',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] z-50 px-4 h-14 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1">
            <Film className="w-8 h-8 text-red-600" />
            <span className="text-xl font-semibold">ViewTube</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#121212] border border-gray-700 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 bg-[#222222] border border-l-0 border-gray-700 rounded-r-full hover:bg-[#303030]">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <User2 className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-14">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className="flex-1 p-6 ml-0 sm:ml-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;