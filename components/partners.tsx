"use client"

// Якщо у вас будуть готові SVG-логотипи партнерів, імпортуйте їх сюди.
// Поки що використаємо текстові заглушки у преміум-стилі.
const partners = [
    { name: "BrandOne", logo: "BRAND ONE" },
    { name: "AlphaGroup", logo: "ALPHA GROUP" },
    { name: "LuxuryRetail", logo: "LUXURY RETAIL" },
    { name: "TechCorp", logo: "TECH.CORP" },
    { name: "VibeStudio", logo: "VIBE STUDIO" },
]

export function Partners() {
    return (
        <section className="border-y border-border bg-soft/50 py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                    Нам довіряють лідери ринку
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-60 grayscale transition-all">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="font-heading text-lg font-bold tracking-widest text-muted-foreground transition-colors hover:text-foreground hover:opacity-100 cursor-default select-none"
                        >
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}