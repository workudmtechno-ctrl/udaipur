import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<string>("0:01");
  const containerRef = useRef<HTMLDivElement>(null);
  const totalDuration = 79; // 1:19 in seconds

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 1;
          const mins = Math.floor(next / 60);
          const secs = next % 60;
          setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setProgress(val);
    const mins = Math.floor(val / 60);
    const secs = val % 60;
    setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
  };

  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section className="w-full py-8 px-4 sm:px-6 bg-[#fcf5f5] flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Video Container with Locantoz Red border */}
        <div 
          ref={containerRef}
          className="relative rounded-xl overflow-hidden border-4 border-[#e61924] shadow-xl bg-black aspect-video group"
        >
          {/* Background Video Poster / Frame */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>

          {/* Big Play Overlay Button when paused */}
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 bg-black/30 hover:bg-black/20 transition-all"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e61924]/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
              </div>
            </div>
          )}

          {/* Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 z-20 flex flex-col gap-2">
            {/* Progress Scrubber */}
            <div className="relative w-full flex items-center">
              <input
                type="range"
                min={0}
                max={totalDuration}
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#e61924]"
              />
            </div>

            {/* Bottom Controls row */}
            <div className="flex items-center justify-between text-white text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="hover:text-red-400 transition-colors p-1"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </button>

                {/* Timecode */}
                <span className="font-mono text-xs text-gray-200">
                  {currentTime} / 1:19
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Mute/Unmute */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-red-400 transition-colors p-1"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={handleToggleFullscreen}
                  className="hover:text-red-400 transition-colors p-1"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
