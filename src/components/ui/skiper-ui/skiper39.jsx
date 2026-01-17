"use client";;
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CrowdCanvas = ({
  src,
  rows = 15,
  cols = 7
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = {
      src,
      rows,
      cols,
    };

    // UTILS
    const randomRange = (min, max) =>
      min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) =>
      removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) =>
      removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    // TWEEN FACTORIES
    const resetPeep = ({
      stage,
      peep
    }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return {
        startX,
        startY,
        endX,
      };
    };

    const normalWalk = ({
      peep,
      props
    }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, {
        duration: xDuration,
        x: endX,
        ease: "none",
      }, 0);
      tl.to(peep, {
        duration: yDuration,
        repeat: xDuration / yDuration,
        yoyo: true,
        y: startY - 10,
      }, 0);

      return tl;
    };

    const walks = [normalWalk];

    // FACTORY FUNCTIONS
    const createPeep = (
      {
        image,
        rect
      }
    ) => {
      const peep = {
        image,
        rect: [],
        width: 0,
        height: 0,
        drawArgs: [],
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        setRect: (rect) => {
          peep.rect = rect;
          peep.width = rect[2];
          peep.height = rect[3];
          peep.drawArgs = [peep.image, ...rect, 0, 0, peep.width, peep.height];
        },
        render: (ctx) => {
          ctx.save();
          ctx.translate(peep.x, peep.y);
          ctx.scale(peep.scaleX, 1);
          ctx.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          );
          ctx.restore();
        },
      };

      peep.setRect(rect);
      return peep;
    };

    // MAIN
    const img = document.createElement("img");
    const stage = {
      width: 0,
      height: 0,
    };

    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const createPeeps = () => {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(createPeep({
          image: img,
          rect: [
            (i % rows) * rectWidth,
            ((i / rows) | 0) * rectHeight,
            rectWidth,
            rectHeight,
          ],
        }));
      }
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({
          peep,
          stage,
        }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;

      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((peep) => {
        peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    };

    const init = () => {
      createPeeps();
      resize();
      gsap.ticker.add(render);
    };

    img.onload = init;
    img.src = config.src;

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });
    };
  }, []);
  return (<canvas ref={canvasRef} className="absolute bottom-0 h-[90vh] w-full" />);
};

const Skiper39 = () => {
  return (
    <div className="relative min-h-[100vh] w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #050A30 0%, #0a1245 50%, #050A30 100%)' }}>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orb - top left */}
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 255, 60, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Medium orb - top right */}
        <motion.div
          className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 234, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#c4ff3c]"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 15}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute top-[12%] left-0 right-0 flex justify-center gap-4 pointer-events-none">
        <motion.div
          className="h-px w-32 bg-gradient-to-r from-transparent via-[#c4ff3c]/30 to-transparent"
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="h-px w-48 bg-gradient-to-r from-transparent via-[#c4ff3c]/50 to-transparent"
          animate={{ scaleX: [0.7, 1, 0.7], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="h-px w-32 bg-gradient-to-r from-transparent via-[#c4ff3c]/30 to-transparent"
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Eyebrow text */}
          <motion.span
            className="inline-block text-[#c4ff3c]/70 text-xs sm:text-sm uppercase tracking-[0.3em] mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ✦ Join the Movement ✦
          </motion.span>

          {/* Main headline */}
          <motion.h2
            className="text-white text-4xl sm:text-6xl md:text-8xl font-light uppercase tracking-tight leading-[0.95] mb-8"
            style={{ fontFamily: "'Bebas Neue', display" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Join{" "}
            <span
              className="text-[#c4ff3c] inline-block"
              style={{
                textShadow: '0 0 40px rgba(196, 255, 60, 0.5), 0 0 80px rgba(196, 255, 60, 0.3)',
              }}
            >
              KIXTIX?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed tracking-wide mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Be part of the movement that's redefining music promotion.
            Connect with artists and grow your influence today.
          </motion.p>

          {/* Animated vertical line */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="h-24 w-px bg-gradient-to-b from-[#c4ff3c] via-[#c4ff3c]/50 to-transparent" />
            <motion.div
              className="absolute top-0 h-10 w-px bg-[#c4ff3c]"
              animate={{ y: [0, 70, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: '0 0 10px rgba(196, 255, 60, 0.8)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Crowd Canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full">
        {/* Gradient overlay on top of crowd */}
        <div
          className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #050A30 0%, transparent 100%)' }}
        />
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={30} cols={1} />
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to top, #050A30 0%, transparent 100%)' }}
      />
    </div>
  );
};


export { CrowdCanvas, Skiper39 };

/**
 * Skiper 39 Canvas_Landing_004 — React + Canvas
 * Inspired by and adapted from https://codepen.io/zadvorsky/pen/xxwbBQV
 * illustration by https://www.openpeeps.com/
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the codepen.io . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
