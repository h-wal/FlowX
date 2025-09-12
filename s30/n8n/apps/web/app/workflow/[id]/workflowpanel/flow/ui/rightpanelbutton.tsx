import React from "react";

interface PanelButtonProps {
  icon: React.ReactNode;   // you can pass an <img /> or lucide-react icon
  title: string;
  description: string;
  onClick?: () => void;
}

export default function PanelButton({ icon, title, description, onClick }: PanelButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-start cursor-pointer gap-3 p-4 mt-4 rounded-lg bg-[#2e2e2e] hover:bg-[#3a3a3a] border border-transparent hover:border-[#fa491d] text-left transition"
    >
      <div className="text-2xl flex-shrink-0 mt-4">{icon}</div>
      <div className="flex flex-col">
        <span className="font-medium text-white">{title}</span>
        <span className="text-sm text-gray-400">{description}</span>
      </div>
    </button>
  );
}
