"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// 3 правильних блоки статистики з макета (надруковані площі та обладнання прибрали)
const stats = [
  { target: 10, suffix: "+", label: "Років досвіду" },
  { target: 1000, suffix: "+", label: "Проєктів" },
  { target: 100, suffix: "%", label: "Задоволених клієнтів" },
]

function formatValue(n: number) {
  return n.toLocaleString("uk-UA")
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !started.current) {
            started.current = true
            const duration = 1600
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.round(target * eased))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        },
        { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
      <div ref={ref} className="font-heading text-3xl font-extrabold text-[#8b2ca0] sm:text-4xl">
        {formatValue(value)}
        {suffix}
      </div>
  )
}

export function ProductionTrust() {
  return (
      <section id="production" className="relative px-4 py-24 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-purple-lg">
            <div className="grid gap-0 lg:grid-cols-12">

              {/* Ліва текстова частина (займає 7 колонок з 12) */}
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl relative pb-3 inline-block">
                      Про нас
                      <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#8b2ca0] rounded-full"></span>
                    </h2>
                  </div>

                  <div className="space-y-4 pt-2">
                    <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      Засновниця та керівниця агенції
                    </h3>

                    <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                      Ми, <strong className="text-foreground">LeVit AGENCY</strong>, команда, яка працює з душею. Ми слухаємо, розуміємо і шукаємо ідеї, що справді підходять саме Вам, бо наша мета - зробити Вашу рекламу живою, щирою та помітною. Кожен бренд має свій голос, а ми робимо його почутим.
                    </p>

                    <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                      Засновниця <strong className="text-foreground">LeVit AGENCY</strong> - Леся Микольців, присвятила більше 10 років BTL-маркетингу та офлайн-рекламі. Вона перетворила рекламу на інструмент, що базується на аналізі трафіку, правильних площинах і точних повідомленнях. Її команда не просто розміщує рекламу — вона формує видимість брендів.
                    </p>
                  </div>
                </div>

                {/* Статистика з плавним лічильником */}
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  {stats.map((stat) => (
                      <div key={stat.label} className="text-center sm:text-left">
                        <Counter target={stat.target} suffix={stat.suffix} />
                        <dd className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
                      </div>
                  ))}
                </dl>
              </div>

              {/* Права частина з фотографією (займає 5 колонок з 12) */}
              <div className="relative min-h-80 overflow-hidden lg:min-h-full lg:col-span-5">
                <Image
                    src="/main_logo.jpg"
                    alt="Виробництво LeVit AGENCY"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent lg:bg-gradient-to-l" />
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}