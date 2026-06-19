"use client"

import { useState } from "react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"

const reviews = [
    {
        name: "CONTINENT",
        text: "Співпрацюємо з п.Лесею декілька років.Чуйна,відповідальна у своїй работе.Пропонує повний спектр послуг у сфері рекламної індустрії. Швидко справляється з поставленими задачами. Дуже раді співпраці.",
        rating: 5,
    },
    {
        name: "Експерт",
        text: "Співпрацюємо вже не вперше і завжди залишаємося задоволені. Все робиться швидко, чітко і вчасно. Люди завжди на зв’язку, готові допомогти і запропонувати зручні рішення. Маємо позитивний досвід і щиро рекомендуємо підрядника до співпраці.",
        rating: 5,
    },
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const isSlider = reviews.length > 3

    const nextSlide = () => {
        if (currentIndex < reviews.length - 3) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    return (
        <section id="testimonials" className="relative px-4 py-24 lg:px-8 bg-background overflow-hidden">
            <div className="mx-auto max-w-7xl">

                {/* ШАПКА: Повністю виправлено вирівнювання заголовка строго по центру */}
                <div className="mb-16 relative flex flex-col items-center justify-center">
                    <h2 className="font-heading text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Відгуки
                    </h2>

                    {/* Кнопки слайдера — позиціонуються абсолютно праворуч, щоб не зсувати заголовок */}
                    {isSlider && (
                        <div className="flex gap-2 mt-4 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted disabled:opacity-40 disabled:hover:bg-card"
                            >
                                <ArrowLeft className="size-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= reviews.length - 3}
                                className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted disabled:opacity-40 disabled:hover:bg-card"
                            >
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Контейнер відгуків з автоматичним центруванням */}
                <div className="relative w-full">
                    <div
                        className={`flex gap-6 transition-transform duration-500 ease-out ${
                            isSlider ? "justify-start" : "justify-center"
                        }`}
                        style={
                            isSlider
                                ? { transform: `translateX(calc(-${currentIndex * 33.3333}% - ${currentIndex * 16}px))` }
                                : undefined
                        }
                    >
                        {reviews.map((review, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-purple shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)]"
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
                                        {review.role || "Клієнт"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}