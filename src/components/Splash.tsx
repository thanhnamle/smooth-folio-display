import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashProps {
  onComplete: () => void;
}

// SVG signature path — a stylized cursive "JD"
const signaturePath =
  "M 20 50 C 20 20, 40 10, 45 30 C 50 50, 30 70, 25 55 C 20 40, 35 25, 50 30 L 55 35 C 60 40, 55 55, 65 50 C 75 45, 70 25, 80 30 C 90 35, 85 55, 75 60";

const Splash = ({ onComplete }: SplashProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    const sigTimer = setTimeout(() => setShowSignature(true), 900);

    const duration = 2800;
    const interval = 30;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 500);
          setTimeout(() => onComplete(), 1100);
          return 100;
        }
        return prev + step;
      });
    }, interval);
    return () => {
      clearInterval(timer);
      clearTimeout(sigTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-splash-foreground mb-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            John Doe
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base tracking-widest uppercase text-splash-foreground/40 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Signature stroke animation */}
          {showSignature && (
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                width="120"
                height="70"
                viewBox="0 0 100 80"
                fill="none"
                className="overflow-visible"
              >
                <motion.path
                  d={signaturePath}
                  stroke="hsl(var(--splash-foreground) / 0.35)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.6,
                    ease: [0.37, 0, 0.63, 1],
                  }}
                />
              </svg>
            </motion.div>
          )}

          <motion.div
            className="w-48 h-[2px] bg-splash-foreground/10 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-splash-foreground/30 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
