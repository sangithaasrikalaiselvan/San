import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border-2 border-transparent"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, oklch(0.85 0.18 195), oklch(0.65 0.27 300), transparent)",
                WebkitMask: "radial-gradient(circle, transparent 38px, #000 40px)",
                mask: "radial-gradient(circle, transparent 38px, #000 40px)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.3em] text-gradient-neon"
            >
              SSK
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
