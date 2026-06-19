"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Sparkles, CheckCircle2, Check } from "lucide-react"

const scrollingParams = [
  "Білборди",
  "Скроли",
  "Мегабокси",
  "Екрани",
  "Сувенірна продукція",
  "Широкоформатний друк",
]

const projectSteps = [
  "Проєктування та розрахунок вітрових навантажень",
  "Зварювальні роботи та збирання каркаса",
  "Друк банера високої роздільної здатності",
  "Електромонтаж та підключення LED-модулів",
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
          </div>

          {/* Right column */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md w-full">
              <div className="absolute inset-x-4 top-0 h-full rounded-3xl border border-border bg-soft shadow-purple translate-y-4" />

              <div className="relative rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 shadow-purple-lg flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Activity className="size-5" />
                </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">Контроль виробництва</p>
                    <p className="text-xs text-muted-foreground">Проєкт: Мегабокс #014 — Монтаж</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-soft/40 px-4 py-2.5">
                    <span className="text-xs text-muted-foreground">Формат adolescent</span>
                    <span className="text-xs font-bold text-foreground">Масштаб 12×4 м</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-soft/40 px-4 py-2.5">
                    <span className="text-xs text-muted-foreground">Енергоефективна LED</span>
                    <span className="text-xs font-bold text-primary flex items-center gap-1">
                    <CheckCircle2 className="size-3.5" /> 100% Яскравість
                  </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border bg-soft/40 px-4 py-2.5">
                    <span className="text-xs text-muted-foreground">Гарантійне покриття</span>
                    <span className="text-xs font-bold text-foreground">24 місяці</span>
                  </div>
                </div>

                <div className="space-y-3 py-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Виконані процеси:</p>
                  <ul className="space-y-2.5">
                    {projectSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-500">
                        <Check className="size-3 stroke-[3]" />
                      </span>
                          <span className="text-muted-foreground/90 leading-tight">{step}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5 border-t border-border pt-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground font-medium">Поточна готовність об'єкта</span>
                    <span className="font-bold text-primary">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-[#8b2ca0]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ІДЕАЛЬНИЙ БЕЗШОВНИЙ СКРОЛЕР */}
        <div className="relative mt-16 w-full overflow-hidden border-y border-border bg-soft py-4 flex">
          {/* Стиль-заглушка на випадок, якщо у tailwind.config немає анімації marquee */}
          <style dangerouslySetInnerHTML={{__html: `
          @keyframes inlineMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-perfect {
            display: flex;
            width: max-content;
            animation: inlineMarquee 25s linear infinite;
          }
        `}} />

          <div className="animate-marquee-perfect gap-14 pr-14">
            {/* Перша (основна) стрічка */}
            {scrollingParams.map((p, i) => (
                <span key={`orig-${i}`} className="flex items-center gap-3 text-sm font-medium text-muted-foreground whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-[#8b2ca0]" />
                  {p}
            </span>
            ))}
          </div>

          {/* Друга (дублююча) стрічка, яка склеюється без швів */}
          <div className="animate-marquee-perfect gap-14 pr-14" aria-hidden="true">
            {scrollingParams.map((p, i) => (
                <span key={`dup-${i}`} className="flex items-center gap-3 text-sm font-medium text-muted-foreground whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-[#8b2ca0]" />
                  {p}
            </span>
            ))}
          </div>
        </div>
      </section>
  )
}