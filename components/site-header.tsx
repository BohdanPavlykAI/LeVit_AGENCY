"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Menu, X, Mail, Camera } from "lucide-react"

const navLinks = [
  { label: "Головна", href: "#home" },
  { label: "Основні напрями", href: "#services" },
  { label: "Додаткові послуги", href: "#secondary" },
  { label: "Про нас", href: "#production" },
  { label: "Партнери", href: "#partners" },
  { label: "Відгуки", href: "#testimonials" },
  { label: "Контакти", href: "#footer" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Блокуємо прокрутку основної сторінки, коли мобільне меню відкрите
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Функція для плавного переходу до секцій сайту
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <>
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled || open ? "glass shadow-purple" : "bg-transparent"
            }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">

            {/* Логотип */}
            <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="flex items-center transition-opacity hover:opacity-90 z-50"
                aria-label="LeVit AGENCY — головна"
            >
              <Image
                  src="/main_logo.png"
                  alt="LeVit AGENCY"
                  width={130}
                  height={45}
                  className="object-contain w-auto h-9 sm:h-11"
                  priority
              />
            </a>

            {/* Десктопна навігація */}
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Головна навігація">
              {navLinks.map((link) => (
                  <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#8b2ca0]"
                  >
                    {link.label}
                  </a>
              ))}
            </nav>

            {/* Блок контактів (Десктоп) з доданим Instagram */}
            <div className="hidden items-center gap-6 lg:flex">
              <a
                  href="tel:+380965106295"
                  className="flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-[#8b2ca0]"
              >
                <Phone className="size-4 text-[#8b2ca0]" />
                +38 (096) 510 62 95
              </a>

              <a
                  href="https://www.instagram.com/levit_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-[#8b2ca0]"
                  aria-label="Наш Instagram"
              >
                <Camera className="size-4 text-[#8b2ca0]" />
                Instagram
              </a>
            </div>

            {/* Кнопка мобільного меню (Гамбургер / Хрестик) */}
            <button
                className="grid size-10 place-items-center rounded-xl border border-border lg:hidden z-50 bg-background/50 backdrop-blur-sm"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Закрити меню" : "Відкрити меню"}
                aria-expanded={open}
            >
              {open ? <X className="size-5 text-foreground" /> : <Menu className="size-5 text-foreground" />}
            </button>
          </div>

          {/* ПОВНОЕКРАННЕ МОБІЛЬНЕ МЕНЮ З ПОВНИМ ВЕРТИКАЛЬНИМ СКРОЛОМ */}
          {open && (
              <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md lg:hidden flex flex-col p-6 pt-28 overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-300">

                {/* Посилання навігації */}
                <nav className="flex flex-col gap-1" aria-label="Мобільна навігація">
                  {navLinks.map((link) => (
                      <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            setOpen(false);
                            handleScroll(e, link.href);
                          }}
                          className="rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-all active:bg-accent hover:text-[#8b2ca0] border border-transparent active:border-border"
                      >
                        {link.label}
                      </a>
                  ))}
                </nav>

                {/* Блок контактів у самому низу з інтегрованим Instagram */}
                <div className="flex flex-col gap-3 border-t border-border/80 pt-6 mt-8 pb-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground px-4 mb-1">
                    Зв'язатися з нами:
                  </p>

                  <a
                      href="tel:+380965106295"
                      className="flex items-center gap-3 rounded-xl bg-soft border border-border/40 px-4 py-3 text-sm font-bold text-foreground transition-colors active:text-[#8b2ca0]"
                  >
                <span className="grid size-8 place-items-center rounded-lg bg-[#8b2ca0]/10 text-[#8b2ca0]">
                  <Phone className="size-4" />
                </span>
                    +38 (096) 510 62 95
                  </a>

                  <a
                      href="mailto:mukoltsiv.lesia@gmail.com"
                      className="flex items-center gap-3 rounded-xl bg-soft border border-border/40 px-4 py-3 text-sm font-bold text-foreground transition-colors active:text-[#8b2ca0] break-all"
                  >
                <span className="grid size-8 place-items-center rounded-lg bg-[#8b2ca0]/10 text-[#8b2ca0]">
                  <Mail className="size-4" />
                </span>
                    mukoltsiv.lesia@gmail.com
                  </a>

                  <a
                      href="https://www.instagram.com/levit_agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl bg-soft border border-border/40 px-4 py-3 text-sm font-bold text-foreground transition-colors active:text-[#8b2ca0]"
                  >
                <span className="grid size-8 place-items-center rounded-lg bg-[#8b2ca0]/10 text-[#8b2ca0]">
                  <Camera className="size-4" />
                </span>
                    @levit_agency
                  </a>
                </div>

              </div>
          )}
        </header>
      </>
  )
}