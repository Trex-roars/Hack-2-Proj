"use client";

import React, { useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const Loop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      quote:
        "I love how quickly I can get detailed insights into my social media performance.",
      name: "Abhijeet Kumar",
      title: "Instagram",
      photo: "/loop/abhi.jpeg",
    },
    {
      quote:
        "This tool has completely transformed the way I analyze my social media. So easy to use!",
      name: "Rohit",
      title: "Facebook",
      photo: "/loop/rohit.jpeg",
    },
    {
      quote:
        "A game-changer for tracking engagement across all platforms in one place.",
      name: "Manisha Chaudhary",
      title: "Twitter",
      photo: "/loop/manisha.jpeg",
    },
    {
      quote:
        "The analytics are clear and actionable. It's helped me improve my content strategy!",
      name: "Somesh Biswal",
      title: "LinkedIn",
      photo: "/loop/sanu.jpeg",
    },
  ];

  const items2 = [
    {
      quote:
        "I now understand my audience better than ever. This platform is a must-have.",
      name: "Nisita Subramani",
      title: "Instagram",
      photo: "/loop/nishita.jpeg",
    },
    {
      quote:
        "The real-time data has made decision-making so much easier and more effective.",
      name: "Punit Kumar",
      title: "WhatsApp",
      photo: "/loop/punit.jpeg",
    },
    {
      quote:
        "Incredible insights that have helped boost my social media presence.",
      name: "Himant Yadav",
      title: "LinkedIn",
      photo: "/loop/himant.jpeg",
    },
    {
      quote:
        "The dashboard is super user-friendly, and the reports are spot-on!",
      name: "Kushagra Chaudhary",
      title: "Facebook",
      photo: "/loop/kushagra.jpeg",
    },
    {
      quote:
        "I've seen a significant increase in engagement since I started using this tool.",
      name: "Nainsi Sharma",
      title: "Pinterest",
      photo: "/loop/nainsi.jpeg",
    },
  ];

  const items3 = [
    {
      quote:
        "The detailed metrics help me fine-tune my social media strategy for better results.",
      name: "Subham Kumar",
      title: "Telegram",
      photo: "/loop/subham.jpeg",
    },
    {
      quote:
        "This platform is a lifesaver for anyone serious about growing their social media!",
      name: "Himant Yadav",
      title: "Discord",
      photo: "/loop/himant.jpeg",
    },
    {
      quote:
        "The analytics are so thorough, I now feel confident in my social media decisions.",
      name: "Sriti Sareen",
      title: "Snapchat",
      photo: "/loop/sriti.jpeg",
    },
    {
      quote:
        "This platform has taken my social media management to the next level.",
      name: "Radha Raman",
      title: "Twitter",
      photo: "/loop/radha.jpeg",
    },
  ];

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden ">
      {/* Animated Header */}
      <motion.div
        className="relative z-10 text-center mb-16 w-full max-w-4xl px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <h2 className="text-6xl font-bold mb-2">
            {"Voice of Our Users".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  color: index % 2 ? "#ec4899" : "#a855f7",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                className="inline-block transition-all duration-200 text-white cursor-pointer"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        <motion.p
          className="text-xl text-zinc-400 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover what our community has achieved with our platform
        </motion.p>
      </motion.div>

      {/* First Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-4"
        />
      </motion.div>

      {/* Second Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items2}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="mt-10"
        />
      </motion.div>

      {/* Third Card Set */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <InfiniteMovingCards
          items={items3}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="mt-10"
        />
      </motion.div>

      {/* Bottom Decorative Line */}
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mt-16"
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </main>
  );
};

export default Loop;
