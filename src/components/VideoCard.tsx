import React from 'react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  avatar: string;
}

function VideoCard({ thumbnail, title, channel, views, timestamp, avatar }: VideoCardProps) {
  return (
    <div className="cursor-pointer group">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex gap-3 mt-4">
        <img
          src={avatar}
          alt={channel}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{channel}</p>
          <div className="text-gray-400 text-sm">
            <span>{views} views</span>
            <span className="mx-1">•</span>
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;