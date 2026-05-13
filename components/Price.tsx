"use client";
import { motion } from "framer-motion";

const services = [
    {
        category: "Маникюр",
        items: [
            {
                name: "Маникюр с покрытием гель-лак",
                desc: "Снятие, маникюр, выравнивание, покрытие",
                price: "2500 ₽",
                duration: "1.5 ч",
            },
            {
                name: "Аппаратный маникюр + гель-лак",
                desc: "Бережная обработка кутикулы",
                price: "2300 ₽",
                duration: "1.5 ч",
            },
            {
                name: "Наращивание ногтей",
                desc: "Гелевое, длина и форма по желанию",
                price: "3500 ₽",
                duration: "2.5 ч",
            },
        ],
    },
    {
        category: "Педикюр",
        items: [
            {
                name: "Педикюр с покрытием",
                desc: "Обработка стоп, покрытие гель-лак",
                price: "2800 ₽",
                duration: "2 ч",
            },
            {
                name: "Экспресс-педикюр",
                desc: "Гигиенический уход без покрытия",
                price: "1800 ₽",
                duration: "1 ч",
            },
        ],
    },
    {
        category: "Дизайн",
        items: [
            {
                name: "Дизайн 1-2 ногтя",
                desc: "Стемпинг, втирка, стразы",
                price: "от 200 ₽",
                duration: "15 мин",
            },
            {
                name: "Сложный дизайн",
                desc: "Роспись, объёмные элементы",
                price: "от 500 ₽",
                duration: "30+ мин",
            },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Price() {
    return (
        <section id="price" className="bg-milk py-12">
            <div className="mx-auto max-w-5xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center font-heading text-4xl text-dark"
                >
                    Прайс-лист
                </motion.h2>

                <div className="mt-12 space-y-12">
                    {services.map((group) => (
                        <motion.div
                            key={group.category}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <h3 className="mb-6 border-b border-gold/40 pb-2 font-heading text-2xl text-gold">
                                {group.category}
                            </h3>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {group.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={itemVariants}
                                        className="rounded-2xl border border-creme-brulee bg-white/70 p-6 shadow-sm transition hover:shadow-md"
                                    >
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-semibold text-dark">{item.name}</h4>
                                            <span className="whitespace-nowrap text-lg font-bold text-gold">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-dark/60">{item.desc}</p>
                                        <p className="mt-1 text-xs text-dark/40">⏱ {item.duration}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}