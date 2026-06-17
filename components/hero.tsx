"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Sparkles } from "lucide-react"

const scrollingParams = [
  "Білборди 6×3",
  "Скроли",
  "Мегабокси",
  "Екрани",
  "Сувенірна продукція",
  "Широкоформатний друк",
]

export function Hero() {
  // @ts-ignore
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="absolute -right-24 -top-24 size-[28rem] rounded-full bg-accent blur-3xl opacity-60" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        {/* Left column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-purple">
            <Sparkles className="size-4" />
            Повний цикл рекламного виробництва
          </div>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Рішення для{" "}
            <span className="gradient-tag inline-block rounded-xl px-3 py-0.5 shadow-purple-lg">
              видимості
            </span>{" "}
            бренду
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Ми проєктуємо та виробляємо зовнішню рекламу й преміальну сувенірну продукцію
            на власних потужностях. Інженерна точність, контроль якості та швидке
            розгортання на будь-якому масштабі.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* ЗАКОМЕНТОВАНО: Кнопка "Розрахувати проєкт"
  <Button size="lg" className="rounded-full bg-[#8b2ca0] hover:bg-[#722384] text-white shadow-purple-lg">
    Розрахувати проєкт
    <ArrowRight className="size-4" />
  </Button>
  */}

            {/* ОНОВЛЕНО: Ширша кнопка зі стрілкою та плавним скролом */}
            <a
                href="#services"
                className="inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 rounded-full bg-[#8b2ca0] hover:bg-[#722384] text-white shadow-purple-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                Переглянути напрямки
                <ArrowRight className="size-4 animate-pulse" />
              </Button>
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { value: "10+", label: "років на ринку" },
              { value: "1 000+", label: "реалізованих проєктів" },
              { value: "100%", label: "клієнтів повертаються" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — structural abstract layers */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md">
            <div className="absolute inset-x-6 top-0 h-3/4 rounded-3xl border border-border bg-soft shadow-purple" />
            <div className="absolute inset-x-0 top-10 h-3/4 translate-x-4 rounded-3xl border border-primary/20 bg-card shadow-purple-lg">
              <div className="flex h-full flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Layers className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">Виробничий макет</p>
                    <p className="text-xs text-muted-foreground">Шар 03 / Конструкція</p>
                  </div>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-soft" />
                  <div className="rounded-2xl bg-primary/10 ring-1 ring-primary/30" />
                  <div className="col-span-2 rounded-2xl border border-border bg-soft" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-primary/30" />
                  <div className="h-2 w-1/2 rounded-full bg-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling trust params */}
      <div className="relative mt-16 overflow-hidden border-y border-border bg-soft py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap pr-10">
          {[...scrollingParams, ...scrollingParams].map((p, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
