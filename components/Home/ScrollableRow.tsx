'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function ScrollableRow({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const scrollByAmount = 300

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollByAmount : scrollByAmount,
        behavior: 'smooth',
      })
    }
  }

  const checkScrollPosition = () => {
    const el = containerRef.current
    if (!el) return

    setAtStart(el.scrollLeft <= 0)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    checkScrollPosition()
    el.addEventListener('scroll', checkScrollPosition)
    return () => el.removeEventListener('scroll', checkScrollPosition)
  }, [])

  return (
    <div className="relative w-full">
      {/* Gradient overlays */}
      {!atStart && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white dark:from-[#131314] to-transparent z-10 opacity-90" />
      )}
      {!atEnd && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white dark:from-[#131314] to-transparent z-10" />
      )}

      {/* Scroll Buttons */}
      {!atStart && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white dark:bg-[#131314]/70 p-1 rounded-full shadow"
        >
          <ChevronsLeft className="w-5 h-5" />
        </button>
      )}
      {!atEnd && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white dark:bg-[#131314]/70 p-1 rounded-full shadow"
        >
          <ChevronsRight className="w-5 h-5" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="no-scrollbar gap-y-2.5 grid grid-rows-[auto_auto] grid-flow-col md:flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth py-2 px-4"
      >
        {children}
      </div>
    </div>
  )
}
