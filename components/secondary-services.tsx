import { Maximize, Copy, Truck, Shirt } from "lucide-react"

const services = [
  {
    icon: Maximize,
    title: "Широкоформатний друк",
    desc: "Банери, постери, плакати, фотошпалери. Високоякісний широкоформатний друк для інтер'єру та зовнішньої реклами."
  },
  {
    icon: Copy,
    title: "Поліграфія",
    desc: "Візитки, листівки, флаєри, каталоги, брошури. Повний спектр поліграфічних послуг для вашого бізнесу."
  },
  {
    icon: Truck,
    title: "Реклама на транспорті",
    desc: "Брендування автомобілів, громадського транспорту, вантажівок. Ваша реклама в русі по всьому місту."
  },
  {
    icon: Shirt,
    title: "Вишивка і друк",
    desc: "Друк на одязі, вишивка логотипів, корпоративний текстиль. Якісне нанесення зображення на будь-які матеріали."
  },
]

export function SecondaryServices() {
  return (
      <section id="secondary" className="relative bg-soft px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Додаткові послуги
              </p>
              <h2 className="font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Усе інше — також на власних потужностях
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Допоміжні виробничі послуги, що доповнюють будь-яку кампанію без втрати
              швидкості та якості фінішу.
            </p>
          </div>

          {/* СІТКА: Змінено на lg:grid-cols-4 для рівного відображення 4 карток у ряд */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
                <div
                    key={s.title}
                    className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-purple flex flex-col justify-between"
                >
                  <div>
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                    <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}