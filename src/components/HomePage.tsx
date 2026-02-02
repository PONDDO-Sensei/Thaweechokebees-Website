import { useState, useEffect } from 'react';
import imgHero from "figma:asset/8801ce45fa951cce6a9e6d1e2b15a8abf5650a5f.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// import รูปสินค้า
import h1 from "@/assets/image/pro/01.jpg";
import h2 from "@/assets/image/home/02.jpg";
import h3 from "@/assets/image/home/03.jpg";
import h4 from "@/assets/image/home/04.jpg";
import h5 from "@/assets/image/home/05.jpg";
import h6 from "@/assets/image/home/06.jpg";
import h7 from "@/assets/image/home/07.jpg";
import h8 from "@/assets/image/home/08.jpg";

import b1 from "@/assets/image/home/09.jpg";
import b2 from "@/assets/image/home/10.jpg";

import award6 from "@/assets/image/home/88.jpg";
import award7 from "@/assets/image/home/99.jpg";

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// ========================================
// 🎨 ProductCard Component (แบบสะอาด)
// ========================================
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

function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-lg transition-all duration-300"
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.15)' 
          : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
          }}
        />
        
        {/* Overlay เมื่อ hover */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-black text-center mb-2">
          {product.name}
        </h3>
        <p className="text-[#a6a6a6] text-sm text-center mb-4">
          {product.description}
        </p>
        <p className="text-black text-center font-medium">
          ราคา {product.priceMin === product.priceMax
            ? product.priceMin
            : `${product.priceMin} - ${product.priceMax}`} ฿
        </p>
      </div>
    </div>
  );
}

// ========================================
// 🏠 HomePage Component
// ========================================

const featuredProducts = [
  {
    id: "1",
    name: "น้ำผึ้งดอกลิ้นจี่",
    description: "น้ำหนัก 1000,500,250,140 กรัม",
    priceMin: 30,
    priceMax: 250,
    image: h1,
  },
  {
    id: "2",
    name: "น้ำผึ้งเดือนห้า",
    description: "น้ำหนัก 1000,500,250,140 กรัม",
    priceMin: 30,
    priceMax: 250,
    image: h2,
  },
  {
    id: "3",
    name: "ครีมนมผึ้งคอลลาเจนพลัส",
    description: "น้ำหนัก 50 กรัม",
    priceMin: 350,
    priceMax: 350,
    image: h3,
  },
  {
    id: "5",
    name: "ช็อคโกแลตน้ำผึ้งเกสรดอกลิ้นจี่",
    description: "น้ำหนัก 50 กรัม",
    priceMin: 120,
    priceMax: 120,
    image: h5,
  },
];


export function HomePage({ onNavigate }: HomePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const heroImages = [
    "src/assets/image/Home.jpg",
    award6,
    award7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section */}
      <section className="relative h-[554px] w-full max-w-[1422px] mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {index === 0 ? (
                <ImageWithFallback
                  src={image}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-8' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrentIndex(prev => 
            prev === 0 ? heroImages.length - 1 : prev - 1
          )}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
        >
          ←
        </button>

        <button
          onClick={() => setCurrentIndex(prev => 
            prev === heroImages.length - 1 ? 0 : prev + 1
          )}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
        >
          →
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-black mb-4 text-xl">
              ด้วยประสบการณ์มากกว่า 30 ปี
            </div>
            <h2 className="text-black mb-6 text-xl ">
              เส้นทางแห่งคุณภาพกว่า 30 ปี
            </h2>
            <p className="text-[#5b5b5b] leading-relaxed text-xl">
              เราเริ่มเลี้ยงผึ้งมาตั้งแต่ปี 2536 จนถึงปัจจุบัน
              พร้อมเปิดพื้นที่ให้เป็นแหล่งเรียนรู้เรื่องผึ้ง
              รวมถึงให้บริการจัดกระเช้าและจำหน่ายผลิตภัณฑ์ชุมชน
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="h-[173px] rounded-[40px] overflow-hidden">
              <img
                src={b1}
                alt="ดอกลิ้นจี่"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[173px] rounded-[40px] overflow-hidden">
              <img
                src={b2}
                alt="ดอกลำไย"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-black">สินค้าและผลิตภัณฑ์</h2>
          <button
            onClick={() => onNavigate("products")}
            className="bg-[#f6b82d] hover:bg-[#f2b530] text-white px-6 py-3 rounded-[20px]"
          >
            สินค้าทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={(id) => onNavigate("product-detail", id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}