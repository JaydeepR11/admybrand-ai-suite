"use client";

import { motion, Variants } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    description:
      "Perfect for small businesses getting started with AI marketing",
    icon: Zap,
    features: [
      "AI Content Generation (50 pieces/month)",
      "Basic Analytics Dashboard",
      "Email Campaign Automation",
      "Social Media Scheduling",
      "Customer Support",
      "1 Brand Profile",
    ],
    buttonText: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 79,
    period: "month",
    description: "Most popular choice for growing businesses",
    icon: Star,
    features: [
      "AI Content Generation (Unlimited)",
      "Advanced Analytics & Insights",
      "Multi-Channel Campaign Management",
      "A/B Testing & Optimization",
      "Customer Journey Mapping",
      "Priority Support",
      "5 Brand Profiles",
      "API Access",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    period: "month",
    description: "Advanced features for large organizations",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Custom AI Model Training",
      "White-label Solutions",
      "Advanced Integrations",
      "Dedicated Account Manager",
      "Custom Reporting",
      "Unlimited Brand Profiles",
      "24/7 Phone Support",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function PricingSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Marketing
            </span>{" "}
            Plan
          </h2>
          <p className="font-inter text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto pb-5">
            Scale your marketing efforts with our flexible pricing plans
            designed for businesses of all sizes.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group ${
                  isPopular ? "lg:scale-110 lg:-mt-4 lg:mb-4" : ""
                } w-full max-w-sm lg:max-w-xs xl:max-w-sm`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isPopular
                      ? "bg-white/80 border-violet-200 hover:border-violet-300 shadow-xl shadow-violet-500/10"
                      : "bg-white/60 border-white/40 hover:border-white/60 hover:bg-white/70"
                  }`}
                >
                  {/* Gradient overlay for popular card */}
                  {isPopular && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-purple-500/5" />
                  )}

                  <div className="relative z-10">
                    {/* Icon and plan name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                          isPopular
                            ? "bg-gradient-to-br from-violet-500 to-purple-600"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-manrope text-2xl font-bold text-slate-900">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-slate-600 mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-slate-900">
                          ${plan.price}
                        </span>
                        <span className="text-slate-600">/{plan.period}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              isPopular ? "bg-violet-100" : "bg-slate-100"
                            }`}
                          >
                            <Check
                              className={`w-3 h-3 ${
                                isPopular ? "text-violet-600" : "text-slate-600"
                              }`}
                            />
                          </div>
                          <span className="font-inter text-slate-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                        isPopular
                          ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/25"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>

                  {/* Subtle glow effect for popular card */}
                  {isPopular && (
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-inter text-slate-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="font-inter text-sm text-slate-500">
            Need a custom solution?{" "}
            <a
              href="#"
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
