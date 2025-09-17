"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance"
          >
            Innovative Software
            <span className="text-primary block">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Empowering businesses with cutting-edge technology and exceptional
            software development services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group"
              data-cursor-hover
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              data-cursor-hover
            >
              Learn More
            </Button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card hover:bg-accent/10 transition-colors">
              <Code className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Clean Code</h3>
              <p className="text-muted-foreground text-center">
                Well-structured, maintainable code that scales with your
                business
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card hover:bg-accent/10 transition-colors">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Fast Performance</h3>
              <p className="text-muted-foreground text-center">
                Optimized solutions that deliver exceptional speed and
                efficiency
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card hover:bg-accent/10 transition-colors">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-lg font-semibold">Secure & Reliable</h3>
              <p className="text-muted-foreground text-center">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
