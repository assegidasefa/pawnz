"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomCarouselProps {
  items: ReactNode[];
  autoPlayInterval?: number;
  className?: string;
  showArrows?: boolean;
}

export default function CustomCarousel({
  items,
  autoPlayInterval = 4000,
  className = "",
  showArrows = true,
}: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Main Customcarousel container */}
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showArrows && items.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-lg z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-none shadow-lg z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* Bar indicators */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#BBEE4D] w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-6"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
