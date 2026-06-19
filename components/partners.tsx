"use client"

import Image from "next/image"

const partners = [
    { name: "Continent", logo: "/continent.jpg" },
    { name: "Expert", logo: "/expert.jpg" },
    { name: "Greenville", logo: "/Greenville.jpg" },
    { name: "Integral Bud", logo: "/integral_bud.jpg" },
    { name: "Esculab", logo: "/Esculab.png" },
    { name: "Ekopolis", logo: "/ekopolis.jpg" },
    { name: "Well Towers", logo: "/WellTowers.svg" },
]

export function Partners() {
    return (
        <section id = 'partners' className="border-y border-border bg-soft/50 py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                    Нам довіряють
                </p>

                {/* Контейнер із великими відступами (gap-x-24) для масштабних логотипів */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-24 gap-y-12 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    {partners.map((partner) => {
                        const isImage = partner.logo.startsWith("/")

                        return (
                            <div
                                key={partner.name}
                                className="flex items-center justify-center h-24 transition-all duration-300"
                            >
                                {isImage ? (
                                    /* МАКСИМАЛЬНИЙ КОНТЕЙНЕР ДЛЯ ЗОБРАЖЕННЯ (висота 96px, ширина 256px) */
                                    <div className="relative h-24 w-64">
                                        <Image
                                            src={partner.logo}
                                            alt={`Логотип ${partner.name}`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 200px, 300px"
                                        />
                                    </div>
                                ) : (
                                    /* ВЕЛИКИЙ ПРЕМІУМ ШРИФТ ДЛЯ ЗАГЛУШОК (text-3xl) */
                                    <span className="font-heading text-2xl font-black tracking-[0.15em] text-muted-foreground sm:text-3xl select-none cursor-default">
                    {partner.logo}
                  </span>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}