
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Hammer, 
  PenTool,
  Paintbrush,
  Wrench,
  CheckCircle, 
} from "lucide-react";

const services = [
  {
    id: "construction",
    title: "Строительство",
    icon: Building2,
    hero: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Полный цикл строительства зданий различного назначения с соблюдением всех нормативов и стандартов качества.",
    longDescription: "Наша компания предлагает услуги по строительству зданий и сооружений различного назначения: жилые дома, офисные и торговые центры, промышленные объекты. Мы выполняем полный цикл работ от проектирования до ввода объекта в эксплуатацию.",
    benefits: [
      "Комплексный подход к строительству",
      "Соблюдение сроков и бюджета",
      "Высокое качество всех работ",
      "Использование современных технологий и материалов",
      "Гарантия на все виды работ",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    ],
  },
  {
    id: "repair",
    title: "Ремонт",
    icon: Hammer,
    hero: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "Капитальный и текущий ремонт помещений любой сложности с использованием современных материалов и технологий.",
    longDescription: "Мы предлагаем услуги по капитальному и текущему ремонту помещений любой сложности. Наши специалисты имеют большой опыт в проведении ремонтных работ различного масштаба и готовы реализовать любые пожелания клиента.",
    benefits: [
      "Индивидуальный подход к каждому проекту",
      "Подбор оптимальных материалов и решений",
      "Четкое соблюдение сроков",
      "Прозрачная система ценообразования",
      "Гарантия на все виды работ",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    ],
  },
  {
    id: "design",
    title: "Проектирование",
    icon: PenTool,
    hero: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    description: "Разработка проектной документации для строительства и реконструкции объектов различного назначения.",
    longDescription: "Мы предлагаем услуги по разработке проектной документации для строительства и реконструкции объектов различного назначения. Наша команда архитекторов и инженеров создаст оптимальное решение с учетом всех ваших пожеланий и требований.",
    benefits: [
      "Комплексное проектирование всех разделов",
      "Соответствие всем строительным нормам и правилам",
      "Использование современных программных комплексов",
      "Согласование проектной документации",
      "Авторский надзор за реализацией проекта",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    ],
  },
  {
    id: "finishing",
    title: "Отделочные работы",
    icon: Paintbrush,
    hero: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    description: "Внутренняя и внешняя отделка помещений с использованием качественных материалов и современных технологий.",
    longDescription: "Мы предлагаем услуги по внутренней и внешней отделке помещений с использованием качественных материалов и современных технологий. Наши специалисты выполнят работы любой сложности, от косметического ремонта до эксклюзивной отделки.",
    benefits: [
      "Широкий спектр отделочных работ",
      "Использование качественных материалов",
      "Соблюдение технологий и стандартов",
      "Четкое соблюдение сроков",
      "Гарантия на все виды работ",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    ],
  },
  {
    id: "engineering",
    title: "Инженерные системы",
    icon: Wrench,
    hero: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    description: "Монтаж и обслуживание инженерных систем: отопление, водоснабжение, канализация, вентиляция и электрика.",
    longDescription: "Мы предлагаем услуги по монтажу и обслуживанию инженерных систем: отопление, водоснабжение, канализация, вентиляция и электрика. Наши специалисты имеют большой опыт в проектировании и монтаже инженерных коммуникаций различной сложности.",
    benefits: [
      "Комплексный подход к инженерным системам",
      "Использование качественных материалов и оборудования",
      "Соблюдение всех технических норм и правил",
      "Гарантийное и постгарантийное обслуживание",
      "Оперативное реагирование на аварийные ситуации",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    ],
  },
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find(service => service.id === activeServiceId) || services[0];

  return (
    <Layout>
      {/* Hero секция */}
      <section className="pt-10 md:pt-16 pb-12 md:pb-20 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-construction-gray-dark">
              Наши услуги
            </h1>
            <p className="text-lg text-construction-gray">
              Мы предлагаем полный спектр строительных услуг от проектирования 
              до ввода объекта в эксплуатацию
            </p>
          </div>
        </div>
      </section>

      {/* Навигация по услугам */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeServiceId === service.id
                    ? "bg-construction-blue text-white"
                    : "bg-gray-100 text-construction-gray-dark hover:bg-gray-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Детали активной услуги */}
      <section className="py-16" id={activeService.id}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-construction-blue/10 flex items-center justify-center text-construction-blue">
                  <activeService.icon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-construction-gray-dark">
                  {activeService.title}
                </h2>
              </div>
              <p className="text-construction-gray mb-6">
                {activeService.longDescription}
              </p>
              <h3 className="text-xl font-semibold mb-4 text-construction-gray-dark">
                Преимущества:
              </h3>
              <ul className="space-y-3 mb-8">
                {activeService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-construction-blue shrink-0 mt-1" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-construction-orange hover:bg-orange-600 text-white">
                  Заказать услугу
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={activeService.hero}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Галерея */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-construction-gray-dark">
              Наши работы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeService.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`${activeService.title} ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Другие услуги */}
      <section className="py-16 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
              Все наши услуги
            </h2>
            <p className="text-construction-gray max-w-3xl mx-auto">
              Мы предлагаем полный спектр строительных услуг для решения задач любой сложности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-construction-blue/10 text-construction-blue group-hover:bg-construction-blue group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-construction-gray mb-4">{service.description}</p>
                <button
                  onClick={() => {
                    setActiveServiceId(service.id);
                    document.getElementById(service.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-construction-blue font-medium hover:underline flex items-center"
                >
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Нужна консультация по нашим услугам?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Свяжитесь с нами, чтобы получить бесплатную консультацию
            и расчет стоимости ваших работ.
          </p>
          <Link to="/contact">
            <Button className="bg-construction-orange hover:bg-orange-600 text-white">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
