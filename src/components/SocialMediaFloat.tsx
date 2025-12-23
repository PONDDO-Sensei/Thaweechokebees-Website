import { useEffect, useState } from "react";
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";

export function SocialMediaFloat() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const footerHeight = 150; 

      const shouldHide =
        scrollTop + windowHeight >= documentHeight - footerHeight;

      setIsVisible(!shouldHide);
    };

    handleScroll(); // run ครั้งแรก
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-[30px] bottom-[100px] z-[9999] hidden md:block
        transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex flex-col gap-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/Thaweechokebees?locale=th_TH"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="block size-[70px] pointer-events-auto hover:scale-110 transition-transform duration-200"
        >
          <img
            src={imgFacebook}
            alt="Facebook"
            className="size-full object-cover"
          />
        </a>

        {/* LINE */}
        <a
          href="https://linevoom.line.me/user/_dfBvlrz_2LZF2ct7Gp63mxT3_qsExy9ks-fuZRw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINE"
          className="block size-[70px] pointer-events-auto hover:scale-110 transition-transform duration-200"
        >
          <img
            src={imgLine}
            alt="LINE"
            className="size-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}