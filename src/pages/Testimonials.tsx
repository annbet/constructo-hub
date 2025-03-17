
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Схема валидации для формы отзыва
const testimonialSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  company: z.string().optional(),
  rating: z.number().min(1).max(5),
  text: z.string().min(20, { message: "Отзыв должен содержать минимум 20 символов" }),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

// Массив отзывов (такой же, как в TestimonialsSection.tsx)
const initialTestimonials = [
  {
    id: 1,
    name: "Иван Петров",
    company: "ООО «ТехноСтрой»",
    text: "Мы сотрудничаем с CONSTRUCTO уже более 5 лет и всегда получаем отличный результат. Команда профессионалов, которая четко соблюдает сроки и требования к качеству работ. Рекомендуем!",
    rating: 5,
    date: "15 марта 2023"
  },
  {
    id: 2,
    name: "Анна Сидорова",
    company: "Жилой комплекс «Солнечный»",
    text: "Благодаря компании CONSTRUCTO наш жилой комплекс был построен в срок и с высоким качеством. Особенно хотелось бы отметить ответственный подход к работе и внимание к деталям.",
    rating: 5,
    date: "2 февраля 2023"
  },
  {
    id: 3,
    name: "Сергей Иванов",
    company: "ТРЦ «Мегаполис»",
    text: "Работа с CONSTRUCTO - это гарантия качества и надежности. Все этапы строительства нашего торгового центра были выполнены на высшем уровне. Спасибо за профессионализм!",
    rating: 5,
    date: "10 января 2023"
  },
  {
    id: 4,
    name: "Елена Смирнова",
    company: "Частный клиент",
    text: "Обратилась в компанию для ремонта квартиры. Результат превзошел все ожидания! Качественные материалы, аккуратная работа и соблюдение сроков. Обязательно обращусь снова.",
    rating: 4,
    date: "5 декабря 2022"
  },
  {
    id: 5,
    name: "Олег Николаев",
    company: "БизнесЦентр «Престиж»",
    text: "Наш бизнес-центр нуждался в реконструкции, и мы выбрали CONSTRUCTO. Работа была выполнена профессионально и в срок, несмотря на сложности проекта. Благодарим за сотрудничество!",
    rating: 5,
    date: "20 ноября 2022"
  },
  {
    id: 6,
    name: "Марина Козлова",
    company: "Сеть ресторанов «Вкусно»",
    text: "Заказывали ремонт и перепланировку помещения под ресторан. Команда CONSTRUCTO предложила отличные решения по дизайну и эргономике пространства. Результатом очень довольны!",
    rating: 5,
    date: "15 октября 2022"
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      company: "",
      rating: 5,
      text: "",
    },
  });

  const onSubmit = (values: TestimonialFormValues) => {
    const newTestimonial = {
      id: testimonials.length + 1,
      name: values.name,
      company: values.company || "Частный клиент",
      text: values.text,
      rating: values.rating,
      date: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    setTestimonials([newTestimonial, ...testimonials]);
    form.reset();
    
    toast({
      title: "Отзыв отправлен",
      description: "Спасибо за ваш отзыв! Он добавлен на страницу.",
    });
  };

  return (
    <Layout>
      {/* Hero секция */}
      <section className="pt-10 md:pt-16 pb-12 md:pb-20 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-construction-gray-dark">
              Отзывы клиентов
            </h1>
            <p className="text-lg text-construction-gray">
              Узнайте, что говорят о нас клиенты, которые уже воспользовались нашими услугами.
              Ваше мнение важно для нас!
            </p>
          </div>
        </div>
      </section>

      {/* Форма для добавления отзыва */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-construction-gray-dark text-center">
              Оставить отзыв
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Ваше имя" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Компания (необязательно)</FormLabel>
                        <FormControl>
                          <Input placeholder="Название вашей компании" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Оценка</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={24}
                                className={`cursor-pointer ${
                                  star <= rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                                onClick={() => {
                                  setRating(star);
                                  field.onChange(star);
                                }}
                              />
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ваш отзыв</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Расскажите о вашем опыте работы с нашей компанией"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-construction-blue hover:bg-blue-700 text-white w-full"
                  >
                    Отправить отзыв
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Список отзывов */}
      <section className="py-16 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-construction-gray-dark text-center">
            Все отзывы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col"
              >
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
                <div className="relative mb-6 flex-grow">
                  <Quote
                    size={36}
                    className="absolute -top-2 -left-2 text-construction-blue/20"
                  />
                  <p className="text-construction-gray-dark italic relative z-10">
                    {testimonial.text}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-construction-gray">{testimonial.company}</p>
                  <p className="text-xs text-construction-gray mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
