"use client";

import { motion, Variants } from "framer-motion";
import { Brain, Target, BarChart3, Zap, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Create compelling marketing copy, social media posts, and email campaigns with advanced AI that understands your brand voice.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description:
      "Identify and reach your ideal customers with precision using machine learning algorithms and behavioral analysis.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Get actionable insights with real-time analytics and predictive modeling to optimize your marketing ROI.",
  },
  {
    icon: Zap,
    title: "Automated Campaigns",
    description:
      "Set up intelligent marketing workflows that adapt and optimize themselves based on performance data.",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description:
      "Visualize and optimize every touchpoint in your customer's journey with AI-powered recommendations.",
  },
  {
    icon: Sparkles,
    title: "Brand Intelligence",
    description:
      "Monitor brand sentiment, track competitors, and discover trending topics relevant to your industry.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/assets/blankpfp.png?height=800&width=800')] opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful AI Features for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how our AI-powered suite transforms your marketing strategy
            with intelligent automation and data-driven insights.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className="relative h-full p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-manrope text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-inter text-slate-300 mb-6">
            Ready to transform your marketing with AI?
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Explore All Features
            <Sparkles className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
