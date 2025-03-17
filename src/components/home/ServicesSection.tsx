
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Hammer, 
  PenTool,
  Paintbrush,
  LucideIcon,
  Wrench,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-construction-blue/10 text-construction-blue group-hover:bg-construction-blue group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-construction-gray mb-4">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white">
          Подробнее
        </Button>
      </Link>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Строительство",
    description: "Полный цикл строительства зданий различного назначения с соблюдением всех нормативов и стандартов качества.",
    icon: Building2,
    link: "/services#construction",
  },
  {
    id: 2,
    title: "Ремонт",
    description: "Капитальный и текущий ремонт помещений любой сложности с использованием современных материалов и технологий.",
    icon: Hammer,
    link: "/services#repair",
  },
  {
    id: 3,
    title: "Проектирование",
    description: "Разработка проектной документации для строительства и реконструкции объектов различного назначения.",
    icon: PenTool,
    link: "/services#design",
  },
  {
    id: 4,
    title: "Отделочные работы",
    description: "Внутренняя и внешняя отделка помещений с использованием качественных материалов и современных технологий.",
    icon: Paintbrush,
    link: "/services#finishing",
  },
  {
    id: 5,
    title: "Инженерные системы",
    description: "Монтаж и обслуживание инженерных систем: отопление, водоснабжение, канализация, вентиляция и электрика.",
    icon: Wrench,
    link: "/services#engineering",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-construction-gray-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши услуги</h2>
          <p className="text-construction-gray max-w-3xl mx-auto">
            Мы предлагаем полный спектр строительных услуг для решения задач любой сложности. 
            Наша команда профессионалов гарантирует высокое качество работ и соблюдение сроков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button className="bg-construction-blue hover:bg-blue-700 text-white">
              Все услуги
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
