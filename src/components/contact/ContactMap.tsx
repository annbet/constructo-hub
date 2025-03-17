
import { useEffect, useRef } from "react";

const ContactMap = () => {
  // Этот компонент является заглушкой для карты, так как мы не можем 
  // интегрировать реальные карты Google/Yandex без ключей API
  
  return (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center flex-col text-construction-gray-dark">
        <p className="font-semibold mb-2">Карта с местоположением</p>
        <p className="text-sm text-construction-gray">г. Москва, ул. Строителей, д. 12, офис 345</p>
      </div>
    </div>
  );
};

export default ContactMap;
