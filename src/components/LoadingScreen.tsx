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

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2700; // 2700ms total
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const currentProgress = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(currentProgress * 100);
      setCount(currentCount);

      // Word cycling logic based on time elapsed:
      // Word 0: 0-900ms, Word 1: 900-1800ms, Word 2: 1800-2700ms
      const wordStep = Math.min(Math.floor(progress / 900), WORDS.length - 1);
      setWordIdx(wordStep >= 0 ? wordStep : 0);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(100);
        setWordIdx(WORDS.length - 1);
        // Delay 400ms before onComplete
        const timer = setTimeout(() => {
          onComplete();
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

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

      {/* Center: Rotating Words */}
      <div className="flex items-center justify-center flex-grow">
        <div className="h-20 flex items-center justify-center overflow-hidden">
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
        </div>
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
