const Playlist = () => {
  return (
    <div className="intersect-once motion-duration-1500 intersect:motion-translate-y-in-[20%] intersect:motion-blur-in relative group flex flex-col items-center justify-center w-full h-full bg-gray-100 text-gray-600 p-6 gap-8 rounded-3xl hover:scale-[101%] hover:shadow-sm transition-all">
      <iframe
        className="z-20 rounded-xl bg-gray-300 min-h-[400px]"
        src="https://open.spotify.com/embed/playlist/58bwbCuxsfTTbfI9gd6kK0?utm_source=generator"
        width="100%"
        height="100%"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-br from-davblue via-blue-400 to-pink-300 opacity-0 group-hover:opacity-70 rounded-3xl transition-opacity z-10" />
    </div>
  );
};

export default Playlist;
