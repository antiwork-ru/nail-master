const courses = [
    { title: "Базовый курс «Маникюр с нуля»", desc: "Теория, обработка, покрытие, дизайны. 5 дней, 6 моделей.", price: "25 000 ₽" },
    { title: "Повышение квалификации", desc: "Выравнивание, сложные формы, работа с проблемными ногтями.", price: "15 000 ₽" },
    { title: "Индивидуальное обучение", desc: "Программа под твой запрос. Гибкий график.", price: "от 5 000 ₽" },
];

export default function Education() {
    return (
        <section id="education" className="bg-beige/10 py-12">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-center font-heading text-4xl text-dark">Обучение</h2>
                <p className="mx-auto mt-4 max-w-xl text-center text-dark/70">
                    Делюсь знаниями и опытом. Стань востребованным мастером вместе со мной.
                </p>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {courses.map((course) => (
                        <div key={course.title} className="flex flex-col rounded-2xl border border-gold/20 bg-white p-8 shadow-lg">
                            <h3 className="font-heading text-xl font-semibold text-dark">{course.title}</h3>
                            <p className="mt-3 flex-grow text-dark/70">{course.desc}</p>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-2xl font-bold text-gold">{course.price}</span>
                                <a
                                    href="https://t.me/your_username"
                                    target="_blank"
                                    className="rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
                                >
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}