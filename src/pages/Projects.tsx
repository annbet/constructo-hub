
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Building2, User2 } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Жилой комплекс «Солнечный»",
    description: "Современный жилой комплекс, состоящий из трех 18-этажных зданий с подземным паркингом и благоустроенной территорией.",
    type: "residential",
    location: "Москва, ул. Солнечная, 12",
    date: "2021-2023",
    area: "45 000 м²",
    client: "ООО «СтройИнвест»",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Бизнес-центр «Престиж»",
    description: "Современный бизнес-центр класса А с панорамным остеклением, включающий офисные помещения, конференц-залы и подземный паркинг.",
    type: "commercial",
    location: "Санкт-Петербург, пр. Невский, 55",
    date: "2020-2022",
    area: "30 000 м²",
    client: "ЗАО «БизнесИнвест»",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577801622187-9a1dc9668f15?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "ТРЦ «Мегаполис»",
    description: "Крупный торгово-развлекательный центр с кинотеатром, фуд-кортом, магазинами и детской игровой зоной.",
    type: "commercial",
    location: "Екатеринбург, ул. Центральная, 10",
    date: "2019-2021",
    area: "65 000 м²",
    client: "ООО «ТоргИнвест»",
    images: [
      "https://images.unsplash.com/photo-1555652736-e92021d28a39?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519567770280-aaf30a8bf308?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581350845039-7f29539d07f8?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Коттеджный поселок «Зелёная долина»",
    description: "Элитный коттеджный поселок из 25 домов с единым архитектурным стилем, центральными коммуникациями и охраняемой территорией.",
    type: "residential",
    location: "Московская область, д. Зеленоградская",
    date: "2020-2022",
    area: "15 000 м²",
    client: "ООО «ЗагородСтрой»",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Гостиничный комплекс «Морской»",
    description: "Современный гостиничный комплекс на побережье, включающий главный корпус, spa-центр и ресторан с панорамным видом на море.",
    type: "commercial",
    location: "Сочи, ул. Приморская, 22",
    date: "2018-2020",
    area: "20 000 м²",
    client: "ООО «ТуристРесорт»",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Логистический центр «Транзит»",
    description: "Крупный логистический комплекс с современным складским оборудованием, офисными помещениями и удобными подъездными путями.",
    type: "industrial",
    location: "Новосибирск, ул. Промышленная, 5",
    date: "2019-2021",
    area: "50 000 м²",
    client: "АО «ЛогистикПро»",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop"
    ]
  }
];

// Типы проектов для фильтрации
const projectTypes = [
  { value: "all", label: "Все проекты" },
  { value: "residential", label: "Жилые" },
  { value: "commercial", label: "Коммерческие" },
  { value: "industrial", label: "Промышленные" }
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Фильтрация проектов по типу
  const filteredProjects = selectedType === "all"
    ? projectsData
    : projectsData.filter(project => project.type === selectedType);

  // Обработчик клика по проекту
  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Обработчик для переключения фильтра
  const handleFilterChange = (type: string) => {
    setSelectedType(type);
    setSelectedProject(null);
  };

  // Следующее изображение в галерее
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Предыдущее изображение в галерее
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <Layout>
      {/* Hero секция */}
      <section className="pt-10 md:pt-16 pb-12 md:pb-20 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-construction-gray-dark">
              Наши проекты
            </h1>
            <p className="text-lg text-construction-gray">
              Изучите портфолио наших работ. Каждый проект - это уникальное сочетание
              инновационных решений, качественных материалов и профессионального подхода.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры проектов */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {projectTypes.map((type) => (
              <Button
                key={type.value}
                onClick={() => handleFilterChange(type.value)}
                variant={selectedType === type.value ? "default" : "outline"}
                className={selectedType === type.value ? "bg-construction-blue text-white" : ""}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Детали выбранного проекта */}
      {selectedProject && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Галерея изображений */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={selectedProject.title}
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Навигация по галерее */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-white/70 hover:bg-white"
                    onClick={prevImage}
                  >
                    &larr;
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full bg-white/70 hover:bg-white"
                    onClick={nextImage}
                  >
                    &rarr;
                  </Button>
                </div>
                
                {/* Индикатор изображений */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {selectedProject.images.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`w-2 h-2 rounded-full ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    ></span>
                  ))}
                </div>
              </div>
              
              {/* Информация о проекте */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-construction-gray mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-construction-blue mr-3" size={20} />
                    <span className="text-construction-gray-dark">
                      <strong>Местоположение:</strong> {selectedProject.location}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="text-construction-blue mr-3" size={20} />
                    <span className="text-construction-gray-dark">
                      <strong>Период строительства:</strong> {selectedProject.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Building2 className="text-construction-blue mr-3" size={20} />
                    <span className="text-construction-gray-dark">
                      <strong>Площадь:</strong> {selectedProject.area}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <User2 className="text-construction-blue mr-3" size={20} />
                    <span className="text-construction-gray-dark">
                      <strong>Заказчик:</strong> {selectedProject.client}
                    </span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-construction-blue hover:bg-blue-700 text-white"
                    onClick={() => setSelectedProject(null)}
                  >
                    Вернуться к списку проектов
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Список проектов */}
      {!selectedProject && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-construction-gray-dark group-hover:text-construction-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-construction-gray mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-construction-gray">
                      <MapPin size={16} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA секция */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Наша команда профессионалов готова реализовать проект любой сложности.
            Свяжитесь с нами для обсуждения деталей и получения консультации.
          </p>
          <Button className="bg-construction-orange hover:bg-orange-600 text-white">
            Связаться с нами
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
