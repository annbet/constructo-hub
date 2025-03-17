
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Иван Петров",
    company: "ООО «ТехноСтрой»",
    text: "Мы сотрудничаем с CONSTRUCTO уже более 5 лет и всегда получаем отличный результат. Команда профессионалов, которая четко соблюдает сроки и требования к качеству работ. Рекомендуем!",
    rating: 5,
  },
  {
    id: 2,
    name: "Анна Сидорова",
    company: "Жилой комплекс «Солнечный»",
    text: "Благодаря компании CONSTRUCTO наш жилой комплекс был построен в срок и с высоким качеством. Особенно хотелось бы отметить ответственный подход к работе и внимание к деталям.",
    rating: 5,
  },
  {
    id: 3,
    name: "Сергей Иванов",
    company: "ТРЦ «Мегаполис»",
    text: "Работа с CONSTRUCTO - это гарантия качества и надежности. Все этапы строительства нашего торгового центра были выполнены на высшем уровне. Спасибо за профессионализм!",
    rating: 5,
  },
  {
    id: 4,
    name: "Елена Смирнова",
    company: "Частный клиент",
    text: "Обратилась в компанию для ремонта квартиры. Результат превзошел все ожидания! Качественные материалы, аккуратная работа и соблюдение сроков. Обязательно обращусь снова.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isDesktop = window.innerWidth >= 768;
  const testimonialsToShow = isDesktop ? 3 : 1;
  const displayTestimonials = [];

  for (let i = 0; i < testimonialsToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    displayTestimonials.push(testimonials[index]);
  }

  return (
    <section className="bg-construction-gray-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Отзывы клиентов</h2>
          <p className="text-construction-gray max-w-3xl mx-auto">
            Мнение наших клиентов - лучшее доказательство нашего профессионализма и надежности.
            Узнайте, что говорят о нас те, кто уже воспользовался нашими услугами.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={`${
                        index < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote size={36} className="absolute -top-2 -left-2 text-construction-blue/20" />
                  <p className="text-construction-gray-dark italic relative z-10">
                    {testimonial.text}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-construction-gray">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-construction-gray-dark hover:text-construction-blue transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-construction-gray-dark hover:text-construction-blue transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-10">
          <Link to="/testimonials">
            <Button className="bg-construction-blue hover:bg-blue-700 text-white">
              Все отзывы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
