"use client"

import Image from "next/image"
// Імпортуємо іконку Instagram
import { Mail, Phone, Camera } from "lucide-react"

const footerLinks = [
  { label: "Основні послуги", href: "#services" },
  { label: "Додаткові послуги", href: "#secondary" },
  { label: "Про нас", href: "#production" },
  { label: "Партнери", href: "#partners" },
  { label: "Відгуки", href: "#testimonials" },
]

export function SiteFooter() {
  // Функція для плавного скролу до потрібного блоку
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <footer id="footer" className="relative bg-soft px-4 pb-10 pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-purple-lg lg:grid-cols-5">

            {/* Фіолетовий лівий блок з логотипом та контактами */}
            <div className="bg-[#8b2ca0] p-8 text-white sm:p-10 lg:col-span-2 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, "home")}
                    className="flex items-center transition-opacity hover:opacity-90"
                >
                  <Image
                      src="/main_logo.png"
                      alt="LeVit AGENCY"
                      width={140}
                      height={50}
                      className="object-contain brightness-0 invert"
                      priority
                  />
                </a>
                <p className="text-sm leading-relaxed text-purple-100 max-w-xs">
                  Рекламна агенція повного циклу. Власне виробництво зовнішньої реклами та сувенірної продукції.
                </p>
              </div>

              {/* Блок контактів (телефон, пошта, інстаграм) */}
              <div className="space-y-4">
                <a
                    href="tel:+380965106295"
                    className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-purple-200"
                >
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Phone className="size-4" />
                </span>
                  +380 96 510 62 95
                </a>
                <a
                    href="mailto:mukoltsiv.lesia@gmail.com"
                    className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-purple-200"
                >
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Mail className="size-4" />
                </span>
                  mukoltsiv.lesia@gmail.com
                </a>

                {/* НОВЕ ПОСИЛАННЯ НА INSTAGRAM */}
                <a
                    href="https://www.instagram.com/levit_agency?igsh=aThtMHU0aTdyMzFk"
                    target="_blank" // Відкривати в новій вкладці
                    rel="noopener noreferrer" // Безпека для зовнішніх посилань
                    className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-purple-200"
                >
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Camera className="size-4" />
                </span>
                  @levit_agency
                </a>
              </div>
            </div>

            {/* Блок навігації */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3 lg:pl-16">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
                Навігація
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {footerLinks.map((l) => (
                    <li key={l.label}>
                      <a
                          href={l.href}
                          onClick={(e) => handleScroll(e, l.href)}
                          className="text-base font-medium text-muted-foreground transition-colors hover:text-[#8b2ca0]"
                      >
                        {l.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Нижня плашка */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} LeVit AGENCY. Усі права захищені.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="transition-colors hover:text-[#8b2ca0]">Політика конфіденційності</a>
              <a href="#" className="transition-colors hover:text-[#8b2ca0]">Умови використання</a>
            </div>
          </div>
        </div>
      </footer>
  )
}