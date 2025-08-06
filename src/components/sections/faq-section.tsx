"use client";

import { motion, Variants } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer:
      "Most customers see improvements within the first week of implementation. Our AI begins optimizing your campaigns immediately, with significant performance gains typically visible within 2-3 weeks as the system learns your audience and refines targeting.",
  },
  {
    question: "Do I need marketing experience to use ADmyBRAND effectively?",
    answer:
      "Not at all. ADmyBRAND is designed for business owners and marketers of all skill levels. The AI handles the complex technical aspects while providing simple, actionable insights. Our intuitive interface guides you through setup, and our smart recommendations make optimization effortless.",
  },
  {
    question: "Which platforms and channels does ADmyBRAND support?",
    answer:
      "ADmyBRAND integrates with all major advertising platforms including Facebook, Instagram, Google Ads, LinkedIn, TikTok, and Twitter. We also support email marketing platforms like Mailchimp and Klaviyo, plus website analytics and e-commerce platforms.",
  },
  {
    question: "Is my business data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and SOC 2 standards. Your data is never shared with third parties or used to train AI models for other customers. We maintain strict data isolation and offer detailed privacy controls.",
  },
  {
    question:
      "What happens if ADmyBRAND doesn't improve my marketing performance?",
    answer:
      "We're confident in our AI's ability to deliver results, which is why we offer a 60-day money-back guarantee. If you don't see measurable improvements in your marketing performance within 60 days, we'll provide a full refund—no questions asked.",
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FAQSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6 border border-violet-200">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Got{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Find answers to the most common questions about ADmyBRAND AI Suite
            and how it can transform your marketing.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl px-6 hover:bg-white/80 hover:border-white/60 transition-all duration-300 hover:shadow-lg"
                >
                  <AccordionTrigger className="font-manrope text-left text-lg font-semibold text-slate-900 hover:text-violet-700 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-slate-700 leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="font-manrope text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="font-inter text-violet-100 mb-6">
            Our team is here to help you get the most out of ADmyBRAND AI Suite.
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-all duration-300 hover:scale-105">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
