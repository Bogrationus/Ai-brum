import React from "react";
import { motion } from "framer-motion";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2";
    const variantClasses = {
      default: "bg-emerald-600 text-white shadow-lg hover:-translate-y-0.5 hover:bg-emerald-500",
      outline:
        "border border-emerald-200 text-emerald-700 backdrop-blur hover:bg-emerald-50",
      ghost: "text-white border border-white/50 backdrop-blur hover:bg-white/10",
    } as const;

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(baseClasses, variantClasses[variant], children.props.className, className),
      });
    }

    return (
      <button ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-3xl bg-white shadow-lg", className)} {...props} />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MotionCard = motion(Card);

const sectionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: fadeInUp,
};

type Room = {
  name: string;
  description: string;
  amenities: string[];
  image: string;
};

const rooms: Room[] = [
  {
    name: "Стандарт",
    description:
      "Светлый номер с видом на сад, идеально подходящий для спокойного отдыха после прогулок по лесу.",
    amenities: ["Двуспальная кровать", "Завтрак включён", "Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Комфорт",
    description:
      "Просторный номер с балконом и уголком для чтения, созданный для вдумчивых путешественников.",
    amenities: ["Балкон", "Мини-бар", "Кофемашина"],
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Люкс",
    description:
      "Уютные апартаменты с гостиной, камином и панорамными окнами на сосновый бор.",
    amenities: ["Камин", "Гостиная", "Панорамные окна"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  },
];

const containerStyle =
  "min-h-screen bg-gradient-to-b from-emerald-50 via-rose-50/30 to-amber-50 text-slate-800 font-sans";

const navStyle =
  "fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-emerald-100";

const App: React.FC = () => {
  return (
    <div className={containerStyle} style={{ fontFamily: "Inter, sans-serif" }}>
      <header className={navStyle}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-emerald-700">
            <Leaf className="h-5 w-5" />
            <span>Отель Ромашка</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#hero" className="transition hover:text-emerald-700">
              Главная
            </a>
            <a href="#rooms" className="transition hover:text-emerald-700">
              Номера
            </a>
            <a href="#booking" className="transition hover:text-emerald-700">
              Бронирование
            </a>
            <a href="#contacts" className="transition hover:text-emerald-700">
              Контакты
            </a>
          </div>
          <Button asChild className="px-4 py-2 shadow-sm">
            <a href="#booking">Забронировать</a>
          </Button>
        </nav>
      </header>

      <main className="pt-24">
        <section
          id="hero"
          className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-white shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1542318428-29f26af1ff86?auto=format&fit=crop&w=1600&q=80"
            alt="Загородный пансион"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <motion.div
            {...sectionProps}
            className="relative max-w-xl space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">европейский пансион в Подмосковье</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Спокойный отдых среди соснового бора
            </h1>
            <p className="text-base text-emerald-100/90 md:text-lg">
              Отель «Ромашка» — это пространство тихих утра с ароматом свежесваренного кофе и тёплых вечеров у камина.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#booking">Забронировать</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#about">Узнать больше</a>
              </Button>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          {...sectionProps}
          className="mx-auto mt-24 max-w-5xl rounded-3xl bg-white/70 px-6 py-16 shadow-lg backdrop-blur-sm md:px-12"
        >
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-800">О нас</h2>
              <p className="text-lg text-slate-600">
                Мы создали «Ромашку» как загородный дом для тех, кто ценит неспешность и природную гармонию. Здесь можно
                гулять по тропинкам под сенью вековых сосен, завтракать на террасе и слушать щебет птиц вместо городского
                шума.
              </p>
              <p className="text-lg text-slate-600">
                Команда отеля заботится о каждом госте: от камерных вечеров у камина до ароматов свежей выпечки на столе.
                Вы почувствуете себя частью семейного пансиона, куда всегда хочется вернуться.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80"
                alt="Терраса отеля"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-transparent to-amber-100/10" />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="rooms"
          {...sectionProps}
          className="mx-auto mt-24 max-w-6xl px-6"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-500">наши номера</p>
              <h2 className="mt-2 text-3xl font-semibold text-emerald-800">Выберите пространство по настроению</h2>
            </div>
            <Button asChild className="px-5 py-2 shadow-sm">
              <a href="#booking">Посмотреть доступность</a>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {rooms.map((room) => (
              <MotionCard
                key={room.name}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={room.image} alt={room.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
                </div>
                <CardContent className="flex flex-1 flex-col space-y-4">
                  <h3 className="text-2xl font-semibold text-emerald-800">{room.name}</h3>
                  <p className="flex-1 text-sm text-slate-600">{room.description}</p>
                  <ul className="space-y-2 text-sm text-emerald-700">
                    {room.amenities.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="booking"
          {...sectionProps}
          className="mx-auto mt-24 max-w-4xl rounded-3xl bg-white/80 px-6 py-16 shadow-lg backdrop-blur md:px-12"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-semibold text-emerald-800">Бронирование</h2>
            <p className="text-lg text-slate-600">
              Напишите нам или позвоните, чтобы подобрать номер и обсудить детали проживания. Мы ответим в течение 30
              минут.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button asChild className="gap-2">
                <a href="tel:+74951234567">
                  <Phone className="h-4 w-4" />
                  +7 (495) 123-45-67
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="mailto:stay@romashka.ru">
                  <Mail className="h-4 w-4" />
                  stay@romashka.ru
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contacts"
          {...sectionProps}
          className="mx-auto mt-24 max-w-6xl px-6 pb-24"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-emerald-800">Контакты</h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
                  Московская область, деревня Лесные Тропы, 15
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  stay@romashka.ru
                </p>
              </div>
              <div className="flex gap-4 text-emerald-700">
                <a
                  href="https://www.facebook.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 transition hover:bg-emerald-50"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 transition hover:bg-emerald-50"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 transition hover:bg-emerald-50"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-emerald-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521292270410-a8c09a4410b4?auto=format&fit=crop&w=900&q=80"
                alt="Карта расположения отеля"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-emerald-100 bg-white/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Отель «Ромашка». Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#rooms" className="transition hover:text-emerald-600">
              Номера
            </a>
            <a href="#booking" className="transition hover:text-emerald-600">
              Бронирование
            </a>
            <a href="#contacts" className="transition hover:text-emerald-600">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
