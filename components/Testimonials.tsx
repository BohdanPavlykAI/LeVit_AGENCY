"use client"

import { Star } from "lucide-react"

const reviews = [
    {
        name: "Олександр Коваленко",
        role: "СЕО, мережа ресторанів «Кіото»",
        text: "Замовляли комплексне брендування фасадів та виготовлення світлових мегабоксів. Інженерна точність вражає — конструкції витримують будь-яку негоду, а підсвітка привертає увагу за сотні метрів. Безкомпромісна якість.",
        rating: 5,
    },
    {
        name: "Марія Рева",
        role: "HR-директор, Synergy Tech",
        text: "LeVit AGENCY створили для нас унікальний преміум-мерч для топ-менеджменту. Кастомна упаковка, люксовий текстиль із вишивкою — усе виконано на найвищому рівні. Клієнти та партнери в захваті від подарунків.",
        rating: 5,
    },
    {
        name: "Дмитро Марченко",
        role: "Засновник бренду одягу 'STREETS'",
        text: "Шукали підрядника для якісного широкоформатного друку банерів та брендування автопарку. Швидкість фінішу та передача кольорів на вищому рівні. Будемо працювати далі.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="relative px-4 py-24 lg:px-8 bg-background">
            <div className="mx-auto max-w-7xl">

                {/* Заголовок секції */}
                <div className="mb-16 text-center mx-auto max-w-2xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Репутація
                    </p>
                    <h2 className="font-heading text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Що говорять наші клієнти
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        Відгуки тих, хто вже довірив нам свій бренд та отримав фізичне втілення своєї айдентики.
                    </p>
                </div>

                {/* Сітка з відгуками */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-purple"
                        >
                            <div>
                                {/* Зірочки рейтингу */}
                                <div className="mb-4 flex gap-1 text-amber-500">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star key={i} className="size-4 fill-current" />
                                    ))}
                                </div>

                                {/* Текст відгуку */}
                                <p className="text-sm leading-relaxed text-muted-foreground italic">
                                    “{review.text}”
                                </p>
                            </div>

                            {/* Автор відгуку */}
                            <div className="mt-6 border-t border-border pt-4">
                                <p className="text-sm font-bold text-foreground">
                                    {review.name}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {review.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}