import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import profileImage from "figma:asset/ed31ff5697ed1e539fe401b06fde06f13932542b.png";

export const Character3D = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for the transforms
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -0.5 to 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* 3D Character Image */}
        <motion.img
          src={profileImage}
          alt="Thilina Jeewantha - 3D Character"
          className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl"
          style={{
            transform: "translateZ(50px)",
            filter: "drop-shadow(0 25px 50px rgba(0, 74, 173, 0.15))",
          }}
        />

        {/* Subtle glow effect behind character */}
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0, 74, 173, 0.3) 0%, transparent 70%)",
            transform: "translateZ(-20px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
