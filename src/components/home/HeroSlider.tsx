
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Строим будущее вместе",
    subtitle: "Инновационные решения для вашего бизнеса и дома",
    cta: "Узнать больше",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    title: "Качество в каждой детали",
    subtitle: "Надежное строительство и высококачественные материалы",
    cta: "Наши услуги",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    title: "15 лет успешного опыта",
    subtitle: "Сотни реализованных проектов по всей России",
    cta: "Наши проекты",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center md:items-start px-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-in">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg animate-slide-in">
              {slide.subtitle}
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white animate-slide-in">
              {slide.cta}
            </Button>
          </div>
        </div>
      ))}

      {/* Стрелки навигации */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
