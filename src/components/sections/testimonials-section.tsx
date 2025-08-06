"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Founder of GreenLeaf Organics",
    content:
      "ADmyBRAND increased our conversion rates by 340% in just 6 weeks. The AI literally reads our customers' minds—it knows exactly what messaging makes them buy. This tool paid for itself 10x over.",
    rating: 5,
    avatar: "/assets/blankpfp.png?height=60&width=60",
  },
  {
    name: "Marcus Rodriguez",
    title: "Marketing Director at TechFlow Solutions",
    content:
      "We went from spending 20 hours a week on ad creation to just 2 hours. The AI generates better copy than our expensive agency ever did, and our cost per acquisition dropped by 60%. Game changer.",
    rating: 5,
    avatar: "/assets/blankpfp.png?height=60&width=60",
  },
  {
    name: "Lisa Thompson",
    title: "Owner of Bloom Boutique",
    content:
      "I was skeptical about AI, but ADmyBRAND feels like having a marketing genius on my team. My Facebook ads finally work, my email campaigns convert, and I actually understand my customers now. Worth every penny.",
    rating: 5,
    avatar: "/assets/blankpfp.png?height=60&width=60",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/assets/blankpfp.png?height=800&width=800')] opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their marketing
            with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            className="relative w-full max-w-5xl mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="flex -ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/15">
                    <CardContent className="p-8">
                      {/* Quote icon */}
                      <div className="flex justify-between items-start mb-6">
                        <Quote className="w-8 h-8 text-violet-400 flex-shrink-0" />
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="font-inter text-lg text-slate-200 leading-relaxed mb-8">
                        &quot;{testimonial.content}&quot;
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar || "/assets/blankpfp.png"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full border-2 border-white/20"
                        />
                        <div>
                          <div className="font-manrope font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="font-inter text-sm text-slate-400">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 text-white" /> */}
            {/* <CarouselNext className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 text-white" /> */}
          </Carousel>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="font-manrope text-4xl font-bold text-white mb-2">
              10,000+
            </div>
            <div className="font-inter text-slate-300">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="font-manrope text-4xl font-bold text-white mb-2">
              340%
            </div>
            <div className="font-inter text-slate-300">
              Average Conversion Increase
            </div>
          </div>
          <div className="text-center">
            <div className="font-manrope text-4xl font-bold text-white mb-2">
              4.9/5
            </div>
            <div className="font-inter text-slate-300">
              Customer Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
