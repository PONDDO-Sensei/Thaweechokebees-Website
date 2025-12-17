import img3559721 from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";
import img2021FacebookIconSvg1 from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import { useEffect, useState } from "react";

export function SocialMediaFloat() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const footerHeight = 136; // footer height
      
      // Hide when reaching footer
      if (scrollTop + windowHeight >= documentHeight - footerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-[30px] z-50 transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ bottom: '100px' }}
    >
      <div className="flex flex-col gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block size-[70px] hover:scale-110 transition-transform duration-200"
        >
          <img
            alt="Facebook"
            className="size-full object-cover cursor-pointer"
            src={img2021FacebookIconSvg1}
          />
        </a>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          className="block size-[70px] hover:scale-110 transition-transform duration-200"
        >
          <img
            alt="Line"
            className="size-full object-cover cursor-pointer"
            src={img3559721}
          />
        </a>
      </div>
    </div>
  );
}