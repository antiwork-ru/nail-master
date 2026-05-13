export default function Footer() {
    return (
        <footer className="bg-dark py-12 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <h3 className="font-heading text-2xl text-gold">Контакты</h3>
                        <p className="mt-4">📍 г. Город, ул. Улица, д. 1</p>
                        <p className="mt-1">🕒 Ежедневно с 10:00 до 21:00</p>
                        <p className="mt-1">📞 +7 (912) 345-67-89</p>
                        <div className="mt-4 flex gap-4">

                            <a href="#" className="text-white/70 hover:text-gold">VK</a>
                        </div>
                    </div>
                    <div className="h-64 overflow-hidden rounded-xl">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755863&z=12"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Карта"
                            className="grayscale"
                        ></iframe>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/50">
                    © {new Date().getFullYear()} Имя Мастера. Все права защищены.
                </div>
            </div>
        </footer>
    );
}