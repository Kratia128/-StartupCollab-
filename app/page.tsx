"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slides = [
    {
      title: "Welcome Back PARI",
      content: (
        <div className="space-y-6">
          <p className="text-lg md:text-xl">
            After all this time, I finally get to talk to you again. My heart is so full knowing we've reconnected. This
            little website is my way of showing you just how much you mean to me.
          </p>
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="text-rose-500 animate-pulse h-16 w-16 md:h-24 md:w-24" />
              <Heart
                className="text-rose-300 absolute top-0 left-0 animate-ping h-16 w-16 md:h-24 md:w-24"
                strokeWidth={1}
              />
            </div>
          </div>
          <p className="text-lg italic">Swipe or use the arrows to see more...</p>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-rose-100 to-pink-200",
      textColor: "text-rose-900",
    },
    {
      title: "Childhood Memories",
      content: (
        <div className="space-y-6">
          <p className="text-lg md:text-xl">
            Remember when we were kids? Those magical days with blue butterfly headbands and those school performances
            where we dressed up in traditional costumes. All those adventures, secrets, and laughter we shared. The way
            we'd spend hours playing make-believe and telling each other stories that only we understood. You've been my
            rock since childhood, through every up and down.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white/80 rounded-lg p-3 shadow-md transform rotate-[-3deg]">
              <div className="aspect-square overflow-hidden rounded">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%208.21.32%20PM-XzfIZVKFspA0Wnj6mB5J5RLrm2qp9j.jpeg"
                  alt="Childhood memories"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2">Blue butterfly days</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3 shadow-md transform rotate-[3deg]">
              <div className="aspect-square overflow-hidden rounded">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-22%20at%208.21.31%20PM-UabYJx04CaoUNohmuTtf22cC49JDSj.jpeg"
                  alt="School performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2">Cultural celebrations</p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-blue-100 to-purple-200",
      textColor: "text-indigo-900",
    },
    {
      title: "Your Endless Support",
      content: (
        <div className="space-y-6">
          <p className="text-lg md:text-xl">
            Through every challenge and triumph, you've been there. Your support has meant everything to me. You
            listened when I needed an ear, advised when I was lost, and celebrated every victory. When others walked
            away, you stayed. When I doubted myself, you believed in me. Your kindness and wisdom guided me through my
            darkest moments, and your laughter brightened my happiest days. The way you always know exactly what to say
            - whether it's tough love or gentle encouragement - has shaped who I am today.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-500 blur-xl opacity-30 rounded-full"></div>
              <div className="relative bg-white/90 rounded-xl p-4 shadow-lg">
                <p className="text-center font-medium">
                  "A friend is someone who understands your past, believes in your future, and accepts you just the way
                  you are."
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-amber-100 to-yellow-200",
      textColor: "text-amber-900",
    },
    {
      title: "I've Missed You",
      content: (
        <div className="space-y-6">
          <p className="text-lg md:text-xl">
            All this time apart, not a day went by when I didn't think of you. I'd see something funny and wish I could
            share it with you, or face a challenge and wonder what advice you'd give. Having you back in my life feels
            like finding a piece of myself I'd been missing - like the world has shifted back into its proper alignment.
            I promise to cherish our friendship always, to make up for lost time, and to never again let distance come
            between the bond we've shared since we were just kids with big dreams and matching smiles. Some friendships
            fade with time, but ours has only grown stronger in absence.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/80 rounded-full p-6 shadow-lg">
              <div className="text-6xl animate-bounce">💌</div>
            </div>
          </div>
          <p className="text-center font-medium text-lg">Thank you for being you. Thank you for being my friend.</p>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-green-100 to-teal-200",
      textColor: "text-teal-900",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <div
        className={cn("flex-1 transition-colors duration-700 ease-in-out flex flex-col", slides[currentSlide].bgColor)}
      >
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
            <div
              className={cn(
                "w-full transition-all duration-700",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                slides[currentSlide].textColor,
              )}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-8 relative">
                <span className="relative">
                  {slides[currentSlide].title}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-current opacity-30 rounded-full"></span>
                </span>
              </h1>
              <div className="transition-all duration-500">{slides[currentSlide].content}</div>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className={cn("rounded-full", slides[currentSlide].textColor)}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentSlide === index ? cn("w-6", slides[currentSlide].textColor) : "bg-gray-300",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className={cn("rounded-full", slides[currentSlide].textColor)}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

