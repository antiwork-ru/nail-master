// src/components/Reviews.tsx
"use client";
import { motion } from "framer-motion";

const reviews = [
    { text: "Лучший мастер! Очень аккуратно, покрытие держится 4 недели. Всем советую!", author: "Анна" },
    { text: "Хожу только к ней уже год. Всегда красиво, уютная атмосфера и приятное общение.", author: "Мария" },
    { text: "Прошла обучение – теперь сама мастер. Всё чётко, структурировано, много практики.", author: "Екатерина" },
    { text: "Невероятный дизайн! Всё как на картинке. Очень довольна.", author: "Ольга" },
    { text: "Педикюр — это сказка. Мастер с золотыми руками, рекомендую.", author: "Татьяна" },
    { text: "Вся семья теперь ходит только сюда. Качество 10/10!", author: "Светлана" },
];

const duplicated = [...reviews, ...reviews]; // удваиваем для бесконечной петли

export default function Reviews() {
    return (
        <section id="reviews" className="overflow-hidden bg-milk py-12 sm:py-12">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center font-heading text-4xl text-dark">Отзывы клиентов</h2>
                <p className="mt-2 text-center text-sm text-dark/50">Что говорят те, кто уже влюблён в свой маникюр</p>
            </div>

            {/* Лента */}
            <div className="relative mt-12 flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,_transparent_100%)]">
                <motion.div
                    className="flex gap-6 pr-6"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                >
                    {duplicated.map((review, i) => (
                        <div
                            key={i}
                            className="w-[280px] flex-shrink-0 rounded-2xl border border-creme-brulee bg-white p-6 shadow-md sm:w-[320px]"
                        >
                            <p className="text-m italic leading-relaxed text-dark/80">«{review.text}»</p>
                            <p className="mt-4 font-semibold text-gold">— {review.author}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}