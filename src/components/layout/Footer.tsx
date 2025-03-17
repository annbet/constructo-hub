
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-gray-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CONSTRUCTO</h3>
            <p className="mb-4 text-gray-300">
              Мы строим надежное будущее для вас и вашего бизнеса уже более 15 лет.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-construction-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-construction-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-construction-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-construction-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Строительство
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Ремонт
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Проектирование
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Отделочные работы
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Инженерные системы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-construction-orange mt-1 shrink-0" />
                <span className="text-gray-300">
                  г. Москва, ул. Строителей, д. 12, офис 345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-construction-orange shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-construction-orange shrink-0" />
                <a
                  href="mailto:info@constructo.ru"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  info@constructo.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CONSTRUCTO. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
