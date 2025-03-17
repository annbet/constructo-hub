
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import StatsSection from "@/components/home/StatsSection";
import { CheckCircle2 } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Андрей Иванов",
    position: "Генеральный директор",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    bio: "Более 20 лет опыта в строительной отрасли. Основатель компании CONSTRUCTO.",
  },
  {
    id: 2,
    name: "Елена Петрова",
    position: "Главный архитектор",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Опыт работы более 15 лет. Специализируется на проектировании коммерческих и жилых зданий.",
  },
  {
    id: 3,
    name: "Михаил Сидоров",
    position: "Технический директор",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Эксперт в области инженерных систем и технологий строительства с 18-летним опытом работы.",
  },
  {
    id: 4,
    name: "Ольга Козлова",
    position: "Финансовый директор",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Опыт работы в финансовом управлении строительных проектов более 12 лет.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero секция */}
      <section className="pt-10 md:pt-16 pb-12 md:pb-20 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-construction-gray-dark">
              О компании
            </h1>
            <p className="text-lg text-construction-gray">
              Мы строим будущее, объединяя инновационные технологии,
              профессиональный опыт и неизменное качество.
            </p>
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
                Наша история
              </h2>
              <p className="text-construction-gray mb-4">
                Компания CONSTRUCTO была основана в 2008 году группой профессионалов
                с многолетним опытом работы в строительной отрасли. Начав с небольших
                проектов, мы быстро завоевали репутацию надежного партнера,
                выполняющего работы качественно и в срок.
              </p>
              <p className="text-construction-gray mb-4">
                За 15 лет работы мы реализовали более 200 проектов различного масштаба
                и сложности: от ремонта квартир до строительства крупных жилых
                комплексов и коммерческих объектов.
              </p>
              <p className="text-construction-gray mb-6">
                Сегодня CONSTRUCTO — это команда из 50+ высококвалифицированных
                специалистов, современное оборудование и собственный парк строительной
                техники. Мы продолжаем расти и развиваться, внедряя инновационные
                технологии и повышая качество наших услуг.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="История компании"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Миссия и ценности */}
      <section className="py-16 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
              Миссия и ценности
            </h2>
            <p className="text-construction-gray">
              Наша миссия — создавать качественные и долговечные объекты, которые
              улучшают жизнь людей и способствуют развитию городской среды.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Качество
              </h3>
              <p className="text-construction-gray">
                Мы не идем на компромиссы в вопросах качества. Каждый проект выполняется
                с использованием лучших материалов и проходит многоступенчатый контроль.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Ответственность
              </h3>
              <p className="text-construction-gray">
                Мы берем на себя полную ответственность за каждый аспект проекта и
                гарантируем соблюдение всех договоренностей, сроков и бюджета.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Инновации
              </h3>
              <p className="text-construction-gray">
                Мы постоянно следим за новыми технологиями и внедряем современные
                решения для повышения эффективности и качества строительства.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Клиентоориентированность
              </h3>
              <p className="text-construction-gray">
                Потребности и пожелания наших клиентов всегда на первом месте. Мы
                стремимся превосходить ожидания и строить долгосрочные отношения.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Экологичность
              </h3>
              <p className="text-construction-gray">
                Мы заботимся об окружающей среде, используя экологически чистые
                материалы и технологии, минимизирующие воздействие на природу.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-construction-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-gray-dark">
                Командная работа
              </h3>
              <p className="text-construction-gray">
                Наш успех — результат слаженной работы всей команды. Мы ценим каждого
                сотрудника и создаем условия для профессионального роста.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <StatsSection />

      {/* Команда */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
              Наша команда
            </h2>
            <p className="text-construction-gray">
              Наш успех — заслуга нашей команды профессионалов, которые ежедневно
              воплощают в жизнь самые сложные и амбициозные проекты.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="aspect-square mb-4 overflow-hidden rounded-full mx-auto w-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-construction-gray-dark">
                  {member.name}
                </h3>
                <p className="text-construction-blue font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-construction-gray">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы работать с профессионалами?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Свяжитесь с нами сегодня, чтобы обсудить ваш проект и получить
            консультацию от наших специалистов.
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

export default About;
