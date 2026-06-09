import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

const WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2400; // 2400ms total
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentProgress = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(currentProgress * 100);
      setCount(currentCount);

      // Word cycling logic based on time elapsed:
      // Word 0: 0-800ms, Word 1: 800-1600ms, Word 2: 1600-2400ms
      const wordStep = Math.min(Math.floor(progress / 800), WORDS.length - 1);
      setWordIdx(wordStep >= 0 ? wordStep : 0);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(100);
        setWordIdx(WORDS.length - 1);
        setIsReady(true);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      id="loading-screen-overlay"
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-14 select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Top Left: Portfolio label */}
      <div className="flex justify-start items-center">
        <motion.span
          id="loading-portfolio-label"
          className="text-xs text-muted uppercase tracking-[0.3em] font-body"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Portfolio
        </motion.span>
      </div>

      {/* Center: Rotating Words or Enter Button */}
      <div className="flex items-center justify-center flex-grow">
        <AnimatePresence mode="wait">
          {!isReady ? (
            <motion.div
              key="words-anim"
              className="h-20 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  id={`loading-word-${wordIdx}`}
                  className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="enter-experience"
              className="flex flex-col items-center gap-4 text-center px-4"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                id="enter-site-action-btn"
                onClick={onComplete}
                className="group relative cursor-pointer px-10 py-5 rounded-full bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#38bdf8] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] border border-white/15 hover:border-transparent"
              >
                Enter Experience
                {/* Visual border glow aura */}
                <span className="absolute -inset-1 rounded-full bg-[#38bdf8]/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
              
              <span
                id="enter-site-sound-indicator"
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
                </span>
                With Background Music & Sound
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Counter & Progress Bar Row */}
      <div className="flex flex-col gap-6 md:gap-8 justify-end w-full">
        <div className="flex justify-end items-end">
          <motion.div
            id="loading-counter"
            className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[3px] bg-stroke/30 rounded-full overflow-hidden relative">
          <div
            id="loading-progress-filled"
            className="accent-gradient h-full rounded-full transition-transform duration-75 ease-out origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
