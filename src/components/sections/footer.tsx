"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Button } from "@components/ui/button";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API Documentation", href: "#api" },
    { name: "Changelog", href: "#changelog" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Help Center", href: "#help" },
    { name: "Webinars", href: "#webinars" },
    { name: "Case Studies", href: "#cases" },
    { name: "Templates", href: "#templates" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#facebook" },
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
  { name: "Instagram", icon: Instagram, href: "#instagram" },
  { name: "YouTube", icon: Youtube, href: "#youtube" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      {/* overflow-hidden */}
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/assets/blankpfp.png?height=800&width=800')] opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Newsletter section */}
        <motion.div
          className="py-16 border-b border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-manrope text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay ahead with AI marketing insights
            </h3>
            <p className="font-inter text-slate-300 mb-8 max-w-2xl mx-auto">
              Get the latest tips, strategies, and industry insights delivered
              to your inbox. Join 50,000+ marketers who trust our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main footer content */}
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="mb-6">
                <h2 className="font-manrope text-2xl font-bold text-white mb-2">
                  ADmyBRAND
                </h2>
                <p className="text-violet-400 font-medium">AI Suite</p>
              </div>
              <p className="font-inter text-slate-300 leading-relaxed mb-6">
                Empowering small to medium businesses with intelligent marketing
                automation, content generation, and data-driven insights to
                accelerate growth and maximize ROI.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span className="font-inter">hello@admybrand.ai</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span className="font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span className="font-inter">San Francisco, CA 94105</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:col-span-4 md:content-center gap-8">
              {/* Product links */}
              <motion.div variants={itemVariants}>
                <h4 className="font-manrope text-lg font-semibold text-white mb-6">
                  Product
                </h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter text-slate-300 hover:text-violet-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company links */}
              <motion.div variants={itemVariants}>
                <h4 className="font-manrope text-lg font-semibold text-white mb-6">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter text-slate-300 hover:text-violet-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources links */}
              <motion.div variants={itemVariants}>
                <h4 className="font-manrope text-lg font-semibold text-white mb-6">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter text-slate-300 hover:text-violet-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal links */}
              <motion.div variants={itemVariants}>
                <h4 className="font-manrope text-lg font-semibold text-white mb-6">
                  Legal
                </h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="font-inter text-slate-300 hover:text-violet-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="font-inter text-slate-400 text-center md:text-left">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Additional info */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span className="font-inter">SOC 2 Compliant</span>
              <span className="font-inter">GDPR Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
