"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Aditya",
    company: "Brewdies - Discord Server",
    role: "Owner",
    rating: 5,
    review:
      "Astera did a very good job, of making a website which met our demand of a website for our server, which also required search engine optimization .",
    avatar: "/omega.png",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === reviews.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
      }
    });
  };

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don&apos;t just take our word for it - hear from the companies
            we&apos;ve helped transform
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <Card className="h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(reviews[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>
                      <blockquote className="text-lg leading-relaxed mb-6 text-pretty">
                        &quot;{reviews[currentIndex].review}&quot;
                      </blockquote>
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={
                            reviews[currentIndex].avatar || "/placeholder.svg"
                          }
                          alt={reviews[currentIndex].name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <div className="font-semibold">
                            {reviews[currentIndex].name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {reviews[currentIndex].role} at{" "}
                            {reviews[currentIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent"
            onClick={() => paginate(-1)}
            data-cursor-hover
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent"
            onClick={() => paginate(1)}
            data-cursor-hover
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                data-cursor-hover
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
