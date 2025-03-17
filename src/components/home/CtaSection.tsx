
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="bg-construction-blue text-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать свой проект с нами?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Независимо от масштаба и сложности задачи, мы поможем воплотить ваши идеи в жизнь. Свяжитесь с нами сегодня, чтобы получить бесплатную консультацию и расчет стоимости.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                Связаться с нами
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Узнать о наших услугах
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
