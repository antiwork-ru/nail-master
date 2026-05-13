"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-beige/20">
            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-dark/40" />

            {/* Водяной знак логотипа */}
            <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8">
                <Image
                    src="/logo.png"
                    alt="Логотип"
                    width={60}
                    height={60}
                    className="h-12 w-12 opacity-60 drop-shadow-md transition duration-300 hover:opacity-80 sm:h-14 sm:w-14"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-heading text-3xl font-bold tracking-tight text-milk sm:text-5xl md:text-6xl"
                >
                    Маникюр, который <br />
                    <span className="text-gold">подчеркнёт твою красоту</span>
                </motion.h1>

                {/* ... остальное без изменений ... */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-milk/80 sm:mt-6 sm:text-xl"
                >
                    Я не просто делаю маникюр. Я создаю образ, который будет работать на вас,
                    подчеркивая вашу индивидуальность и даря уверенность в каждой детали.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mx-auto mt-3 max-w-xl text-xs uppercase tracking-[.2em] text-gold sm:mt-4 sm:text-sm sm:tracking-[.4em]"
                >
                    Каждый штрих — это искусство
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 sm:mt-10"
                >
                    <a
                        href="#booking"
                        className="inline-block rounded-full border-2 border-gold bg-gold px-6 py-2.5 text-base font-semibold text-white transition hover:bg-transparent hover:text-gold sm:px-8 sm:py-3 sm:text-lg"
                    >
                        Записаться
                    </a>
                </motion.div>
            </div>
        </section>
    );
}