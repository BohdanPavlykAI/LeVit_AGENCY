"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

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

  // Спільна функція для плавного переходу до секцій
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
              scrolled ? "glass shadow-purple" : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">

          {/* Логотип з плавним підняттям вгору */}
          <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="flex items-center transition-opacity hover:opacity-90"
              aria-label="LeVit AGENCY — головна"
          >
            <Image
                src="/main_logo.png"
                alt="LeVit AGENCY"
                width={130}
                height={45}
                className="object-contain"
                priority
            />
          </a>

          {/* Десктопна навігація з плавною анімацією скролу */}
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

          {/* Блок контактів (Десктоп) */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* Виправлено href для виклику з мобільного */}
            <a
                href="tel:+380965106295"
                className="flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-[#8b2ca0]"
            >
              <Phone className="size-4 text-[#8b2ca0]" />
              +38 (096) 510 62 95
            </a>

            {/* ЗАКОМЕНТОВАНО ПРОКОЛ: Кнопка "Залишити заявку" більше не потрібна
          <Button className="rounded-full bg-[#8b2ca0] hover:bg-[#722384] text-white shadow-purple-lg">
            Залишити заявку
          </Button>
          */}
          </div>

          {/* Кнопка мобільного меню */}
          <button
              className="grid size-10 place-items-center rounded-lg border border-border lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Мобільне меню */}
        {open && (
            <div className="glass border-t border-border lg:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Мобільна навігація">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          setOpen(false);
                          handleScroll(e, link.href);
                        }}
                        className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-[#8b2ca0]"
                    >
                      {link.label}
                    </a>
                ))}
                <a
                    href="tel:+380965106295"
                    className="flex items-center gap-2 px-3 py-3 text-sm font-bold text-foreground transition-colors hover:text-[#8b2ca0]"
                >
                  <Phone className="size-4 text-[#8b2ca0]" />
                  +38 (096) 510 62 95
                </a>

                {/* ЗАКОМЕНТОВАНО ПРОКОЛ У МОБІЛЬНОМУ МЕНЮ
            <Button className="mt-2 w-full rounded-full bg-[#8b2ca0] hover:bg-[#722384] text-white">
              Залишити заявку
            </Button>
            */}
              </nav>
            </div>
        )}
      </header>
  )
}