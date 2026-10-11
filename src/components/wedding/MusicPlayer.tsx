import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, VolumeX, Volume2 } from "lucide-react";
import { invitation } from "@/config/invitation";
import { useOpened } from "./OpenGate";

export function MusicPlayer() {
  const opened = useOpened();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const musicSrc = invitation.music?.src ?? "/music.m4a";

  const tryPlay = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      })
      .catch((err) => {
        console.log("Audio autoplay prevented, awaiting user interaction:", err);
        setIsPlaying(false);
      });
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
    setHasInteracted(true);
  };

  // Play immediately when gate opens
  useEffect(() => {
    if (opened) {
      tryPlay();
    }
  }, [opened]);

  // Listen to immediate click event on 'Open the invitation' button
  useEffect(() => {
    const handleTrigger = () => {
      tryPlay();
    };
    window.addEventListener("play-invitation-music", handleTrigger);
    return () => window.removeEventListener("play-invitation-music", handleTrigger);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="fixed top-4 right-4 z-40 sm:top-6 sm:right-6"
          >
            <button
              type="button"
              onClick={toggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              className="group relative flex size-11 items-center justify-center rounded-full border border-gold/70 bg-parchment/90 text-pine shadow-[0_8px_24px_-8px_var(--color-ink)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-parchment active:scale-95"
            >
              {/* Outer pulsing ring when playing */}
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping opacity-75 pointer-events-none" />
              )}

              {/* Rotating music disc icon */}
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={
                  isPlaying
                    ? { duration: 6, repeat: Infinity, ease: "linear" }
                    : { duration: 0.3 }
                }
                className="flex items-center justify-center"
              >
                <Music className="size-4.5 text-pine transition-colors group-hover:text-gold" />
              </motion.div>

              {/* Status indicator icon */}
              <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full border border-gold/60 bg-pine text-parchment shadow-sm">
                {isPlaying ? (
                  <Volume2 className="size-2.5 text-parchment" />
                ) : (
                  <VolumeX className="size-2.5 text-parchment" />
                )}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
