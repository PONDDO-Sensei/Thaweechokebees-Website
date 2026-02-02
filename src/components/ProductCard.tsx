import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    priceMin: number;
    priceMax: number;
    image: string;
  };
  onClick: (id: string) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsTouched(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Delay reset to show animation
    setTimeout(() => {
      setIsTouched(false);
      setIsHovered(false);
    }, 150);
  };

  return (
    <div
      onClick={() => onClick(product.id)}
      onMouseEnter={() => !isTouched && setIsHovered(true)}
      onMouseLeave={() => !isTouched && setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-lg transition-all duration-300 relative group active:scale-[0.98]"
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.15)' 
          : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
            opacity: imageLoaded ? 1 : 0
          }}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}

        {/* Overlay with Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* "ดูรายละเอียด" Button - แสดงเมื่อ hover หรือ touch */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <button 
            className="bg-[#f6b82d] hover:bg-[#f2b530] active:bg-[#f2b530] text-white px-6 py-3 rounded-full font-medium shadow-lg transform transition-transform active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onClick(product.id);
            }}
          >
            ดูรายละเอียด
          </button>
        </div>

        {/* Badge - "สินค้าแนะนำ" */}
        <div 
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#f6b82d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition-all duration-300"
          style={{
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
          }}
        >
          ⭐ แนะนำ
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 relative">
        {/* Shine Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovered ? 0.3 : 0,
            transform: 'skewX(-20deg)',
            animation: isHovered ? 'shine 0.75s' : 'none'
          }}
        />

        <h3 
          className="text-black text-center mb-2 text-base sm:text-lg font-semibold transition-colors duration-300"
          style={{ color: isHovered ? '#f6b82d' : '#000' }}
        >
          {product.name}
        </h3>
        
        <p className="text-[#a6a6a6] text-xs sm:text-sm text-center mb-3 sm:mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#666] text-xs sm:text-sm line-through">
            {product.priceMax + 50} ฿
          </span>
          <p 
            className="text-black text-center font-bold text-lg sm:text-xl transition-all duration-300"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              color: isHovered ? '#f6b82d' : '#000'
            }}
          >
            {product.priceMin === product.priceMax
              ? product.priceMin
              : `${product.priceMin} - ${product.priceMax}`} ฿
          </p>
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center gap-0.5 sm:gap-1 mt-2 sm:mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-[#f6b82d] text-xs sm:text-sm">⭐</span>
          ))}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="h-1 bg-gradient-to-r from-transparent via-[#f6b82d] to-transparent transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
        }}
      />
    </div>
  );
}

// CSS Keyframes (เพิ่มใน global CSS หรือ Tailwind config)
const styles = `
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 200%; }
  }
`;
