import React from "react";

interface MapTooltipProps {
  icon: React.ReactNode;
  title: string;
  location: string;
  zoom?: number;
}

const MapTooltip: React.FC<MapTooltipProps> = ({
  icon,
  title,
  location,
  zoom = 15,
}) => {
  const locationSearchQuery = encodeURIComponent(location);

  return (
    <div className="relative group w-full flex items-center gap-1">
      {icon}
      <b>{title}</b>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:motion-blur-in absolute bottom-full left-1/2 transform -translate-x-1/2 p-4 mb-2 bg-gray-200 text-white text-sm rounded-2xl shadow-md pointer-events-none">
        <iframe
          tabIndex={-1}
          className="motion-blur-in motion-delay-300 w-[300px] h-[200px] bg-gray-100 rounded-xl aria-hidden"
          height="600"
          src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${locationSearchQuery}&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapTooltip;
