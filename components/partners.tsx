"use client"

import Image from "next/image"

const partners = [
    { name: "Continent", logo: "/continent.jpg" },
    { name: "Expert", logo: "/expert.jpg" },
    { name: "Greenville", logo: "/Greenville.jpg" },
    { name: "Integral Bud", logo: "/integral_bud.jpg" },
    { name: "Esculab", logo: "/Esculab.png" },
    { name: "Ekopolis", logo: "/ekopolis.jpg" },
    { name: "Well Towers", logo: "/Welltowers.svg" },
]

export function Partners() {
    return (
        <section id='partners' className="border-y border-border bg-soft/50 py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                    Нам довіряють
                </p>

                {/* Прибрали загальне залізобетонне приглушення з батьківського контейнера */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 sm:gap-x-24 gap-y-10 sm:gap-y-12">
                    {partners.map((partner) => {
                        const isImage = partner.logo.startsWith("/")

                        return (
                            <div
                                key={partner.name}
                                className="flex items-center justify-center h-20 sm:h-24 transition-all duration-300
                                           /* НА ТЕЛЕФОНІ: Повна яскравість та оригінальний колір */
                                           opacity-100 grayscale-0
                                           /* НА ДЕСКТОПІ: Стильне приглушення, що оживає при наведенні на конкретний логотип */
                                           md:opacity-40 md:grayscale md:hover:opacity-100 md:hover:grayscale-0"
                            >
                                {isImage ? (
                                    /* Адаптивні розміри контейнера для мобільних (щоб великі логотипи не вилізали за екран) */
                                    <div className="relative h-16 w-44 sm:h-24 sm:w-64">
                                        <Image
                                            src={partner.logo}
                                            alt={`Логотип ${partner.name}`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 176px, 256px"
                                        />
                                    </div>
                                ) : (
                                    <span className="font-heading text-xl font-black tracking-[0.15em] text-muted-foreground sm:text-3xl select-none cursor-default">
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