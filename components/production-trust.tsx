"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  { target: 10, suffix: "+", label: "Років досвіду" },
  { target: 1000, suffix: "+", label: "Проєктів" },
  { target: 100, suffix: "%", label: "Задоволених клієнтів" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  // Стартуємо одразу з реального значення, щоб на сторінці НІКОЛИ не було 0
  const [value, setValue] = useState(target)

  useEffect(() => {
    // Для анімації спочатку скидаємо до 0 після гідратації в браузері
    setValue(0)

    const duration = 1200
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(tick)
    }, 100)

    return () => clearTimeout(timer)
  }, [target])

  return (
      <div className="font-heading text-3xl font-extrabold text-[#8b2ca0] sm:text-4xl">
        {value.toLocaleString("uk-UA")}
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

              {/* Ліва текстова частина (6 колонок) */}
              <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl relative pb-3 inline-block">
                      Про нас
                      <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#8b2ca0] rounded-full"></span>
                    </h2>
                  </div>

                  <div className="space-y-4 pt-2">
                    <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      Засновниця та керівниця агенції
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                      Ми, <strong className="text-foreground">LeVit AGENCY</strong>, команда, яка любить свою справу. Ми слухаємо клієнтів, розуміємо їхні потреби та допомагаємо знаходити найкращі рекламні рішення. Для нас важливо, щоб реклама була не лише помітною, а й ефективною.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                      Засновниця <strong className="text-foreground">LeVit AGENCY</strong> — Леся Микольців. Вона понад 10 років працює у сфері BTL-маркетингу та офлайн-реклами. Завдяки її досвіду ми знаємо, як правильно підібрати рекламні площини та донести повідомлення до потрібної аудиторії.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty">
                      Ми не просто розміщуємо рекламу — ми допомагаємо бізнесам ставати більш помітними та знаходити своїх клієнтів.
                    </p>
                  </div>
                </div>
              </div>

              {/* Права частина (Статистика зверху + Логотип знизу) */}
              <div className="lg:col-span-6 flex flex-col justify-between">

                {/* Верхня частина з лічильниками */}
                <div className="p-8 sm:p-12 border-b border-border">
                  <dl className="grid grid-cols-3 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-left">
                          <Counter target={stat.target} suffix={stat.suffix} />
                          <dd className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</dd>
                        </div>
                    ))}
                  </dl>
                </div>

                {/* Нижня частина з логотипом */}
                <div className="p-12 flex-1 flex items-center justify-center bg-card/50">
                  <div className="relative w-full max-w-[280px] aspect-[4/3]">
                    <Image
                        src="/main_logo.png"
                        alt="LeVit AGENCY logo"
                        fill
                        className="object-contain"
                        priority
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
  )
}