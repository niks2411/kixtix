import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <div className="testimonials-modern-container">
      <style>{`
        .testimonials-modern-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2rem;
          color: #fff;
        }
        .testimonials-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .image-stack-area {
          position: relative;
          aspect-ratio: 4/5;
          width: 100%;
        }
        .ghost-card {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          backdrop-filter: blur(4px);
        }
        .content-area {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .author-name {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          color: #fff;
        }
        .author-designation {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }
        .quote-text {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2rem;
        }
        .nav-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        .nav-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .testimonials-grid-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .author-name {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="testimonials-grid-layout">
        {/* Left Column: Image Stack */}
        <div className="image-stack-area">
          {/* Static Ghost Cards for Stack Effect */}
          <div className="ghost-card" style={{ transform: 'rotate(-8deg) scale(0.96)', opacity: 0.4, background: 'rgba(255, 255, 255, 0.07)' }}></div>
          <div className="ghost-card" style={{ transform: 'rotate(5deg) scale(0.98)', opacity: 0.3, background: 'rgba(255, 255, 255, 0.05)' }}></div>
          <div className="ghost-card" style={{ transform: 'rotate(-3deg) scale(0.94)', opacity: 0.2, background: 'rgba(255, 255, 255, 0.03)' }}></div>

          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full"
              >
                <img
                  src={testimonials[active].src || testimonials[active].image}
                  alt={testimonials[active].name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="content-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="author-name">{testimonials[active].name}</h3>
              <p className="author-designation">{testimonials[active].designation}</p>

              <p className="quote-text">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="nav-buttons">
            <button onClick={handlePrev} className="nav-btn">
              <IconArrowLeft size={24} />
            </button>
            <button onClick={handleNext} className="nav-btn">
              <IconArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
