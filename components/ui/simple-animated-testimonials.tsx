"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, Quote, Star } from 'lucide-react'
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  showVerifiedBadge?: boolean
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

function getInitials(name: string): string {
  if (!name) return "TL"
  const parts = name.trim().split(" ")
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

export function TestimonialsSection({
  title = "Góc Nhìn Từ Các Nhà Lãnh Đạo",
  subtitle = "Cảm nhận thực tế từ các Giám đốc & CEO đã tham gia chương trình huấn luyện kỹ năng lãnh đạo dựa trên EQ từ The New Leaders.",
  testimonials = [],
  autoRotateInterval = 7000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = "ĐƯỢC TIN TƯỞNG BỞI ĐỘI NGŨ QUẢN LÝ & LÃNH ĐẠO TẠI",
  className,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [testimonials.length, autoRotateInterval])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  if (testimonials.length === 0) return null

  return (
    <section
      ref={sectionRef}
      id="seli-testimonials"
      className={cn("py-16 md:py-24 relative overflow-hidden flex justify-center w-full bg-background", className)}
    >
      <div className="container max-w-[1140px] px-4 md:px-6">
        
        <!-- Header -->
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-xl font-bold tracking-tight text-foreground">SELI</span>
            <span className="w-[1px] h-4 bg-border"></span>
            <span className="text-xs font-medium text-muted-foreground">thenewleaders.</span>
          </div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            STRATEGIC EQ LEADERSHIP INDEX
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-[680px] mx-auto text-base md:text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Wide Card Slider + Vertical Side Controller */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center max-w-[1040px] mx-auto relative mb-16">
          
          {/* Subtle Quote Decor */}
          <div className="absolute -top-6 -left-4 text-foreground/5 pointer-events-none z-0">
            <Quote className="h-16 w-16 stroke-[1.2]" />
          </div>

          {/* Cards Track */}
          <div className="relative min-h-[340px] sm:min-h-[290px] w-full z-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 rounded-[18px] border bg-card p-6 md:p-10 flex flex-col justify-between shadow-sm",
                  index === activeIndex
                    ? "opacity-100 translate-x-0 scale-100 z-10 shadow-md"
                    : "opacity-0 translate-x-10 scale-95 pointer-events-none z-0",
                )}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between space-y-4">
                  {/* Top Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-13 w-13 border border-border shadow-sm">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-display font-bold">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg text-foreground leading-snug">{testimonial.name}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground font-medium">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Body Quote */}
                  <p className="text-sm md:text-base leading-relaxed italic text-foreground/90 py-2">
                    "{testimonial.content}"
                  </p>

                  {/* Bottom Row */}
                  {showVerifiedBadge && (
                    <div className="flex justify-end pt-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Đã xác minh</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vertical Side Controller */}
          <div className="flex md:flex-col items-center justify-center gap-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-11 w-11 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95 transition-all"
              aria-label="Slide trước"
            >
              <ChevronUp className="h-5 w-5 hidden md:block" />
              <ChevronDown className="h-5 w-5 rotate-90 md:hidden" />
            </Button>

            <div className="flex md:flex-col gap-2.5 items-center justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-primary w-2.5 h-6 md:w-2.5 md:h-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2.5 h-2.5",
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-11 w-11 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-95 transition-all"
              aria-label="Slide tiếp theo"
            >
              <ChevronDown className="h-5 w-5 hidden md:block" />
              <ChevronDown className="h-5 w-5 -rotate-90 md:hidden" />
            </Button>
          </div>

        </div>

        {/* Logo Cloud */}
        {trustedCompanies.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border text-center space-y-6">
            <h3 className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {trustedCompanies.map((company) => (
                <span key={company} className="font-display text-lg md:text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
