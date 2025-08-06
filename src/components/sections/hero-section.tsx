"use client";

import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-violet-200/20 via-purple-200/20 to-pink-200/20 blur-3xl -z-10" />

      <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6 border border-violet-200"
            variants={fadeInUp}
          >
            <Sparkles className="w-4 h-4" />
            AI-Powered Marketing Suite
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
            variants={fadeInUp}
          >
            Transform Your Brand with{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Marketing
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-inter text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            ADmyBRAND AI Suite empowers small to medium businesses with
            intelligent marketing automation, content generation, and
            data-driven insights to accelerate growth and maximize ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-25 pt-8 border-t border-slate-200"
            variants={fadeInUp}
          >
            <p className="font-inter text-sm text-slate-500">
              Trusted by 10,000+ businesses worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
