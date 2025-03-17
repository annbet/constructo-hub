
import { useState, useEffect, useRef } from "react";
import { 
  Building, 
  Users, 
  CalendarCheck, 
  Award 
} from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
}

const StatItem = ({ icon, value, label, duration = 1000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * value));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, value, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-6" ref={itemRef}>
      <div className="w-16 h-16 rounded-full bg-construction-blue/10 flex items-center justify-center text-construction-blue mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-construction-gray-dark mb-2">
        <span ref={countRef}>{count}</span>
        {label === "лет опыта" && "+"}
      </div>
      <div className="text-construction-gray text-center">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            icon={<Building size={32} />} 
            value={200} 
            label="завершенных проектов" 
          />
          <StatItem 
            icon={<Users size={32} />} 
            value={50} 
            label="сотрудников" 
          />
          <StatItem 
            icon={<CalendarCheck size={32} />} 
            value={15} 
            label="лет опыта" 
          />
          <StatItem 
            icon={<Award size={32} />} 
            value={30} 
            label="наград и сертификатов" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
