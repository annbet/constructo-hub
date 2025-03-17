
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 трендов в современном строительстве",
    excerpt: "Рассказываем о главных инновациях и трендах в строительной отрасли, которые становятся все более популярными в 2023 году.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    date: "15 июля 2023",
    slug: "10-trends-in-modern-construction",
  },
  {
    id: 2,
    title: "Как выбрать качественные строительные материалы",
    excerpt: "Советы экспертов по выбору надежных и экологичных материалов для строительства и ремонта вашего дома или офиса.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    date: "3 августа 2023",
    slug: "how-to-choose-quality-building-materials",
  },
  {
    id: 3,
    title: "Проектирование коммерческих зданий: ключевые аспекты",
    excerpt: "Разбираемся в особенностях проектирования коммерческой недвижимости и важных факторах, влияющих на успех проекта.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    date: "20 сентября 2023",
    slug: "commercial-building-design-key-aspects",
  },
];

const BlogSection = () => {
  return (
    <section>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Наш блог</h2>
          <p className="text-construction-gray max-w-3xl mx-auto">
            Делимся полезной информацией, советами и новостями из мира строительства.
            Читайте наши статьи, чтобы быть в курсе последних тенденций и инноваций.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card group">
              <div className="aspect-video mb-4 overflow-hidden rounded-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-construction-gray mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-construction-gray mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="flex items-center text-construction-blue font-medium hover:underline">
                Читать далее <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blog">
            <Button className="bg-construction-blue hover:bg-blue-700 text-white">
              Все статьи
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
