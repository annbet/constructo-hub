
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  return (
    <Layout>
      {/* Hero секция */}
      <section className="pt-10 md:pt-16 pb-12 md:pb-20 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-construction-gray-dark">
              Контакты
            </h1>
            <p className="text-lg text-construction-gray">
              Свяжитесь с нами для обсуждения вашего проекта или получения дополнительной информации
              о наших услугах.
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-construction-gray-dark">
                Наши контакты
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-construction-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-construction-gray-dark">
                      Телефон
                    </h3>
                    <p className="text-construction-gray">+7 (495) 123-45-67</p>
                    <p className="text-construction-gray">+7 (495) 765-43-21</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-construction-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-construction-gray-dark">
                      Email
                    </h3>
                    <p className="text-construction-gray">info@constructo.ru</p>
                    <p className="text-construction-gray">sales@constructo.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-construction-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-construction-gray-dark">
                      Адрес
                    </h3>
                    <p className="text-construction-gray">
                      г. Москва, ул. Строителей, д. 12, офис 345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-construction-blue/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-construction-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-construction-gray-dark">
                      Время работы
                    </h3>
                    <p className="text-construction-gray">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-construction-gray">Сб: 10:00 - 15:00</p>
                    <p className="text-construction-gray">Вс: Выходной</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold my-8 text-construction-gray-dark">
                Карта проезда
              </h2>
              <ContactMap />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-construction-gray-dark">
                Напишите нам
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ секция */}
      <section className="py-16 bg-construction-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-construction-gray-dark">
              Часто задаваемые вопросы
            </h2>
            <p className="text-construction-gray">
              Ответы на наиболее распространенные вопросы о нашей компании и услугах.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-construction-gray-dark">
                  <CheckCircle2 className="text-construction-blue mr-2" size={20} />
                  Как рассчитывается стоимость проекта?
                </h3>
                <p className="text-construction-gray">
                  Стоимость проекта зависит от многих факторов: площади, сложности работ, 
                  используемых материалов и сроков выполнения. Мы предоставляем бесплатную 
                  консультацию и оценку проекта на начальном этапе.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-construction-gray-dark">
                  <CheckCircle2 className="text-construction-blue mr-2" size={20} />
                  Как долго выполняется строительство?
                </h3>
                <p className="text-construction-gray">
                  Сроки строительства зависят от масштаба и сложности проекта. 
                  Для небольших проектов - от 2 до 6 месяцев, для крупных - от 
                  6 месяцев до 2 лет. Точные сроки мы обсуждаем индивидуально 
                  и фиксируем в договоре.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-construction-gray-dark">
                  <CheckCircle2 className="text-construction-blue mr-2" size={20} />
                  Предоставляете ли вы гарантию на выполненные работы?
                </h3>
                <p className="text-construction-gray">
                  Да, мы предоставляем гарантию на все выполненные работы сроком от 
                  1 до 5 лет в зависимости от типа работ. Гарантийные обязательства 
                  фиксируются в договоре.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-construction-gray-dark">
                  <CheckCircle2 className="text-construction-blue mr-2" size={20} />
                  Работаете ли вы с частными заказчиками?
                </h3>
                <p className="text-construction-gray">
                  Да, мы работаем как с коммерческими организациями, так и с частными 
                  заказчиками. Наши специалисты имеют опыт в реализации проектов любого 
                  масштаба: от ремонта квартир до строительства коттеджей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
