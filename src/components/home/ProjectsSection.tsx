
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Жилой комплекс «Солнечный»",
    description: "Строительство современного жилого комплекса из трёх 16-этажных домов с подземным паркингом и благоустроенной территорией.",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    location: "г. Москва",
    year: "2022",
  },
  {
    id: 2,
    title: "Бизнес-центр «Престиж»",
    description: "Строительство бизнес-центра класса А с панорамным остеклением, современными инженерными системами и подземной парковкой.",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
    location: "г. Санкт-Петербург",
    year: "2021",
  },
  {
    id: 3,
    title: "Торговый центр «Мегаполис»",
    description: "Строительство многофункционального торгового центра с кинотеатром, фуд-кортом и подземной парковкой на 500 мест.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    location: "г. Казань",
    year: "2020",
  },
];

const ProjectsSection = () => {
  return (
    <section>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Наши проекты</h2>
          <p className="text-construction-gray max-w-3xl mx-auto">
            Мы гордимся каждым реализованным проектом. За 15 лет работы наша компания успешно завершила более 200 объектов различного назначения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="aspect-video mb-4 overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex items-center gap-4 text-sm text-construction-gray mb-3">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <p className="text-construction-gray mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="flex items-center text-construction-blue font-medium hover:underline">
                Подробнее <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects">
            <Button className="bg-construction-blue hover:bg-blue-700 text-white">
              Все проекты
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
