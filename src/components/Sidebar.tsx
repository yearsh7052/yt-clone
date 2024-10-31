import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Flame, Music2, Gamepad2, Newspaper, Trophy, Lightbulb } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

function Sidebar({ isOpen }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Flame, label: 'Trending' },
    { icon: PlaySquare, label: 'Subscriptions' },
    { icon: Film, label: 'Library' },
    { icon: Clock, label: 'History' },
    { icon: ThumbsUp, label: 'Liked Videos' },
    { icon: Music2, label: 'Music' },
    { icon: Gamepad2, label: 'Gaming' },
    { icon: Newspaper, label: 'News' },
    { icon: Trophy, label: 'Sports' },
    { icon: Lightbulb, label: 'Learning' },
  ];

  return (
    <aside
      className={`fixed left-0 top-14 h-[calc(100vh-56px)] bg-[#0f0f0f] transition-all duration-300 ${
        isOpen ? 'w-60' : 'w-[70px]'
      } border-r border-gray-800`}
    >
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center px-3 py-2 hover:bg-gray-800 rounded-lg mx-2"
          >
            <item.icon className="w-6 h-6 min-w-[24px]" />
            {isOpen && <span className="ml-4">{item.label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;