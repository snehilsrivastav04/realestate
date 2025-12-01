import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

interface Layer {
  id: string;
  content: React.ReactNode;
  speed?: number;
  className?: string;
  mouseParallax?: boolean;
  zIndex?: number;
}

interface ParallaxLayersProps {
  layers: Layer[];
  className?: string;
  enableMouseParallax?: boolean;
}

const ParallaxLayers: React.FC<ParallaxLayersProps> = ({
  layers,
  className = '',
  enableMouseParallax = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Mouse parallax effect
  useEffect(() => {
    if (!enableMouseParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      layers.forEach((layer, index) => {
        if (!layer.mouseParallax) return;
        
        const element = document.getElementById(layer.id);
        if (element) {
          const strength = (index + 1) * 10;
          element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [layers, enableMouseParallax]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {layers.map((layer, index) => {
        const yOffset = useTransform(
          scrollYProgress,
          [0, 1],
          [0, (layer.speed || 0) * 100]
        );

        if (layer.speed !== undefined) {
          return (
            <Parallax key={layer.id} speed={layer.speed}>
              <motion.div
                id={layer.id}
                className={`absolute inset-0 ${layer.className || ''}`}
                style={{ 
                  zIndex: layer.zIndex || layers.length - index,
                  y: yOffset 
                }}
              >
                {layer.content}
              </motion.div>
            </Parallax>
          );
        }

        return (
          <motion.div
            key={layer.id}
            id={layer.id}
            className={`absolute inset-0 ${layer.className || ''}`}
            style={{ 
              zIndex: layer.zIndex || layers.length - index,
            }}
          >
            {layer.content}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxLayers;