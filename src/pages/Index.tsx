
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";
import BlogSection from "@/components/home/BlogSection";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      
      <ServicesSection />
      
      <StatsSection />
      
      <ProjectsSection />
      
      <TestimonialsSection />
      
      <BlogSection />
      
      <CtaSection />
    </Layout>
  );
};

export default Index;
