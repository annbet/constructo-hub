
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { text: "Главная", path: "/" },
    { text: "О компании", path: "/about" },
    { text: "Услуги", path: "/services" },
    { text: "Проекты", path: "/projects" },
    { text: "Отзывы", path: "/testimonials" },
    { text: "Блог", path: "/blog" },
    { text: "Контакты", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-construction-blue font-bold text-2xl">
            CONSTRUCTO
          </span>
        </Link>

        {/* Мобильное меню */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="tel:+74951234567" 
            className="flex items-center gap-1 text-construction-gray hover:text-construction-blue"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">+7 (495) 123-45-67</span>
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-construction-blue ${
                isActive(link.path)
                  ? "text-construction-blue"
                  : "text-construction-gray-dark"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+74951234567" 
            className="flex items-center gap-2 text-construction-gray-dark hover:text-construction-blue"
          >
            <Phone size={18} />
            <span className="font-medium">+7 (495) 123-45-67</span>
          </a>
          <Button className="bg-construction-orange hover:bg-orange-600 text-white">
            Обратный звонок
          </Button>
        </div>
      </div>

      {/* Мобильное меню выдвижное */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-white z-50 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 transition-colors hover:text-construction-blue ${
                  isActive(link.path)
                    ? "text-construction-blue"
                    : "text-construction-gray-dark"
                }`}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            ))}
            <Button className="mt-4 bg-construction-orange hover:bg-orange-600 text-white">
              Обратный звонок
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
