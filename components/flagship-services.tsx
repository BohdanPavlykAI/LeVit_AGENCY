import Image from "next/image"
import { Check } from "lucide-react"

const flagship = [
  {
    index: "01",
    tag: "Зовнішня реклама",
    title: "Зовнішня реклама",
    description:
        "Монументальні формати, що домінують у міському просторі. Проєктуємо, виготовляємо та монтуємо рекламні空間 конструкції міського масштабу з інженерною точністю.",
    image: "/outdoor-light.png",
    imageAlt: "Чистий білборд та світловий короб на сучасному білому фасаді вдень",
    services: [
      { name: "Білборди" },
      { name: "Скроли" },
      { name: "Сітілайти" },
      { name: "Арки" },
      { name: "Мегабокси" },
      { name: "Брендмауери" },
    ],
    params: [], // Порожній масив залишаємо, але рендер тепер безпечний
  },
  {
    index: "02",
    tag: "Сувенірна продукція",
    title: "Сувенірна продукція & Мерч",
    description:
        "Преміальна айдентика у фізичній формі. Від подарунків для топ-менеджменту до повних мерч-лайнів, виготовлених за люксовим стандартом якості.",
    image: "/merch.jpg",
    imageAlt: "Преміальний набір корпоративних подарунків на світлій поверхні",
    services: [
      { name: "Подарункові набори" },
      { name: "Корпоративний мерч" },
      { name: "Бізнес-аксесуари" },
    ],
    params: [],
  },
]

export function FlagshipServices() {
  return (
      <section id="services" className="relative px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Основні напрямки
            </p>
            <h2 className="font-heading text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Два напрямки. Один безкомпромісний стандарт.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Глибока експертиза у кожній деталі — від конструкції до фінального монтажу.
            </p>
          </div>

          <div className="space-y-10">
            {flagship.map((item, i) => (
                <article
                    key={item.title}
                    className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-purple transition-shadow duration-300 hover:shadow-purple-lg lg:grid-cols-2"
                >
                  {/* Image side */}
                  <div className={`relative min-h-72 overflow-hidden bg-card ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={i === 0} // Перше зображення завантажується швидше для LCP
                    />
                    <span className="absolute left-5 top-5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {item.tag}
                </span>
                    <span className="absolute bottom-5 right-5 font-heading text-6xl font-extrabold text-background/80 mix-blend-overlay">
                  {item.index}
                </span>
                  </div>

                  {/* Content side */}
                  <div className="p-7 sm:p-10 flex flex-col justify-center border-t border-border lg:border-t-0 lg:first:border-r">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl text-balance">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                      {item.services.map((s) => (
                          <li key={s.name} className="flex items-center gap-3">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
                        <Check className="size-3" />
                      </span>
                            <span className="text-sm font-semibold text-foreground">
                        {s.name}
                      </span>
                          </li>
                      ))}
                    </ul>

                    {/* Рендеримо блок характеристик лише якщо в масиві params є елементи */}
                    {item.params && item.params.length > 0 && (
                        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                          {item.params.map((p) => (
                              <div key={p.k}>
                                <dt className="text-xs text-muted-foreground">{p.k}</dt>
                                <dd className="mt-1 font-heading text-base font-bold text-primary">{p.v}</dd>
                              </div>
                          ))}
                        </dl>
                    )}
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  )
}