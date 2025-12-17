import { useEffect, useState } from 'react';
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";

export function FloatingSocialIcons() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ bottom: 100 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = 200; // ความสูงของ footer
      
      // คำนวณว่าเลื่อนมาถึง footer หรือยัง
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      
      if (distanceFromBottom < footerHeight) {
        // ถ้าใกล้ footer ให้เลื่อนขึ้น
        const offset = footerHeight - distanceFromBottom;
        setPosition({ bottom: 100 + offset });
      } else {
        // ถ้ายังไม่ถึง footer ให้อยู่ที่ตำแหน่งปกติ
        setPosition({ bottom: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-4 md:right-8 z-40 flex flex-col gap-3 md:gap-4 transition-all duration-300"
      style={{ bottom: `${position.bottom}px` }}
    >
      {/* Facebook Icon */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[50px] h-[50px] md:w-[70px] md:h-[70px] hover:scale-110 transition-transform shadow-lg rounded-full overflow-hidden"
      >
        <img 
          src={imgFacebook} 
          alt="Facebook" 
          className="w-full h-full object-cover"
        />
      </a>

      {/* Line Icon */}
      <a
        href="https://line.me"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[50px] h-[50px] md:w-[70px] md:h-[70px] hover:scale-110 transition-transform shadow-lg rounded-full overflow-hidden"
      >
        <img 
          src={imgLine} 
          alt="Line" 
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}