'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from './ui/button'

interface Props {
  images: string[]
}

export const Carrousel = ({ images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="snap-x-mandatory flex items-center gap-5 overflow-x-scroll md:overflow-x-hidden "
        style={{ scrollSnapType: 'x mandatory', width: '100%' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-3/4 snap-center"
            style={{ flex: '0 0 auto', minWidth: '75%' }}
          >
            <img
              className="h-full max-h-28 w-full rounded object-cover md:h-full md:max-h-56"
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
      <Button
        size="sm"
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 h-6 w-8 -translate-y-1/2 transform rounded-full px-0 py-0 "
      >
        <ArrowLeft size={15} />
      </Button>
      <Button
        size="sm"
        onClick={scrollRight}
        className="absolute right-0 top-1/2 h-6 w-8 -translate-y-1/2 transform rounded-full px-0 py-0 "
      >
        <ArrowRight size={15} />
      </Button>
    </div>
  )
}
