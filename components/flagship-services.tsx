import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"

const flagship = [
  {
    index: "01",
    tag: "Зовнішня реклама",
    title: "Зовнішня реклама",
    description:
      "Монументальні формати, що домінують у міському просторі. Проєктуємо, виготовляємо та монтуємо рекламні конструкції міського масштабу з інженерною точністю.",
    image: "/outdoor-light.png",
    imageAlt: "Чистий білборд та світловий короб на сучасному білому фасаді вдень",
    services: [
      { name: "Білборди 3×6", note: "Призматрони та стандарт" },
      { name: "Скроли", note: "Динамічна зміна постерів" },
      { name: "Світлові короби", note: "LED-підсвітка, об'ємні букви" },
      { name: "Мегабокси", note: "Великоформатні конструкції" },
      { name: "Брендування фасадів", note: "Архітектурне освітлення" },
      { name: "Драпірування та банери", note: "Монтаж на висоті" },
    ],
    params: [
      { k: "Макс. формат", v: "до 240 м²" },
      { k: "Монтаж", v: "власна бригада" },
      { k: "Гарантія", v: "до 5 років" },
    ],
  },
  {
    index: "02",
    tag: "Сувенірна продукція",
    title: "Сувенірна продукція & Мерч",
    description:
      "Преміальна айдентика у фізичній формі. Від подарунків для топ-менеджменту до повних мерч-лайнів, виготовлених за люксовим стандартом якості.",
    image: "/souvenirs-light.png",
    imageAlt: "Преміальний набір корпоративних подарунків на світлій поверхні",
    services: [
      { name: "VIP-подарунки", note: "Ексклюзивні набори" },
      { name: "Лазерне гравіювання", note: "Метал, дерево, скло" },
      { name: "Корпоративний мерч", note: "Айдентика бренду" },
      { name: "Текстиль на замовлення", note: "Вишивка та друк" },
      { name: "Брендована упаковка", note: "Кастом-дизайн" },
      { name: "Бізнес-аксесуари", note: "Щоденники, ручки" },
    ],
    params: [
      { k: "Мін. тираж", v: "від 10 шт" },
      { k: "Брендування", v: "8 технологій" },
      { k: "Дизайн", v: "власна студія" },
    ],
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
              className="group grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-purple transition-shadow duration-300 hover:shadow-purple-lg lg:grid-cols-2"
            >
              {/* Image side */}
              <div className={`relative min-h-72 overflow-hidden bg-card ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute left-5 top-5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {item.tag}
                </span>
                <span className="absolute bottom-5 right-5 font-heading text-6xl font-extrabold text-background/80 mix-blend-overlay">
                  {item.index}
                </span>
              </div>

              {/* Content side */}
              <div className="bg-card p-7 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl text-balance">
                    {item.title}
                  </h3>
                  {/*<span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </span>*/}
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {item.services.map((s) => (
                    <li key={s.name} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
                        <Check className="size-3" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">{s.name}</span>
                        <span className="block text-xs text-muted-foreground">{s.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {item.params.map((p) => (
                    <div key={p.k}>
                      <dt className="text-xs text-muted-foreground">{p.k}</dt>
                      <dd className="mt-1 font-heading text-base font-bold text-primary">{p.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
