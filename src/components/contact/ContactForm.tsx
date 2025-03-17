
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Пожалуйста, введите ваш email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Пожалуйста, введите корректный email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите ваш телефон";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Пожалуйста, введите ваше сообщение";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // В реальном проекте здесь был бы API-запрос
      console.log("Form submitted:", formData);
      
      // Показываем уведомление об успешной отправке
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "default",
      });
      
      // Сбрасываем форму
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-construction-gray-dark mb-1"
          >
            Ваше имя*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-construction-blue ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-construction-gray-dark mb-1"
          >
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-construction-blue ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-construction-gray-dark mb-1"
          >
            Телефон*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-construction-blue ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-construction-gray-dark mb-1"
          >
            Тема
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-construction-blue"
          >
            <option value="">Выберите тему</option>
            <option value="construction">Строительство</option>
            <option value="repair">Ремонт</option>
            <option value="design">Проектирование</option>
            <option value="other">Другое</option>
          </select>
        </div>
      </div>
      
      <div>
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-construction-gray-dark mb-1"
        >
          Сообщение*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-construction-blue ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
      
      <div>
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-construction-blue hover:bg-blue-700 text-white"
        >
          Отправить сообщение
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
