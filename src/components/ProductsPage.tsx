import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import imgHero from "@/assets/image/pro/1111.jpg";
import h1 from "@/assets/image/pro/01.jpg";
import h2 from "@/assets/image/pro/02.jpg";
import h3 from "@/assets/image/pro/03.jpg";
import h4 from "@/assets/image/pro/041.jpg";
import h5 from "@/assets/image/pro/05.jpg";
import h6 from "@/assets/image/pro/06.jpg";
import h7 from "@/assets/image/pro/07.jpg";
import h8 from "@/assets/image/pro/08.jpg";
import h9 from "@/assets/image/pro/09.jpg";
import h10 from "@/assets/image/pro/10.jpg";

interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Product Card Component with Interactive Effects
function ProductCard({ product, onNavigate }: { 
  product: typeof allProducts[0]; 
  onNavigate: (page: string, productId?: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsTouched(false);
      setIsHovered(false);
    }, 150);
  };

  return (
    <div
      onClick={() => onNavigate('product-detail', product.id)}
      onMouseEnter={() => !isTouched && setIsHovered(true)}
      onMouseLeave={() => !isTouched && setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-lg transition-all duration-300 relative active:scale-[0.98]"
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.15)' 
          : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative w-full h-[200px] overflow-hidden bg-gray-100">
        <img
          src={product.image || h1}
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

        {/* "รายละเอียด" Button */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <button 
            className="bg-[#f6b82d] hover:bg-[#f2b530] text-white px-6 py-3 rounded-full font-medium shadow-lg transform transition-transform active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('product-detail', product.id);
            }}
          >
            รายละเอียด
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Shine Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 pointer-events-none shine-effect"
          style={{
            opacity: isHovered ? 0.3 : 0,
            transform: 'skewX(-20deg)'
          }}
        />

        <h3 
          className="text-black text-center mb-2 font-semibold transition-colors duration-300"
          style={{ color: isHovered ? '#f6b82d' : '#000' }}
        >
          {product.name}
        </h3>
        
        <p className="text-[#a6a6a6] text-sm text-center mb-4">
          {product.description}
        </p>
        
        <p 
          className="text-black text-center font-bold text-xl transition-all duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            color: isHovered ? '#f6b82d' : '#000'
          }}
        >
          ราคา {product.priceMin === product.priceMax
            ? product.priceMin
            : `${product.priceMin} - ${product.priceMax}`} ฿
        </p>
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

// Mock products data
const allProducts = [
  {
    id: '1',
    name: 'น้ำผึ้งดอกลิ้นจี่',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h1,
    category: 'น้ำผึ้ง',
  },
  {
    id: '2',
    name: 'น้ำผึ้งเดือนห้า',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h2,
    category: 'น้ำผึ้ง',
  },
  {
    id: '3',
    name: 'ครีมนมผึ้งคอลลาเจนพลัส',
    description: 'น้ำหนัก 50,20 กรัม',
    priceMin: 350,
    priceMax: 350,
    image: h3,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '4',
    name: 'น้ำผึ้งเกสรดอกมะกอกน้ำป่า',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h4,
    category: 'น้ำผึ้ง',
  },
  {
    id: '5',
    name: 'ช็อคโกแลตน้ำผึ้งเกสรดอกลิ้นจี่',
    description: 'น้ำหนัก 50 กรัม',
    priceMin: 120,
    priceMax: 120,
    image: h5,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '6',
    name: 'โลชั่นนมผึ้ง',
    description: 'น้ำหนัก 200 กรัม',
    priceMin: 120,
    priceMax: 120,
    image: h6,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '7',
    name: 'น้ำผึ้งสี่สหาย',
    description: 'น้ำหนัก 560 กรัม',
    priceMin: 150,
    priceMax: 150,
    image: h7,
    category: 'น้ำผึ้ง',
  },
  {
    id: '8',
    name: 'โพรโพลิสเมาท์สเปรย์',
    description: 'ขนาด 50 ml',
    priceMin: 180,
    priceMax: 180,
    image: h8,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '9',
    name: 'น้ำผึ้งเกสรดอกลำไย',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h9,
    category: 'น้ำผึ้ง'
  },
  {
    id: '10',
    name: 'สบู่นมผึ้ง',
    description: 'น้ำหนัก 90 กรัม',
    priceMin: 80,
    priceMax: 80,
    image: h10,
    category: 'สินค้าแปรรูป'
  },
];

const categories = ['ทั้งหมด', 'น้ำผึ้ง','สินค้าแปรรูป'];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const min = minPrice === '' ? 0 : Number(minPrice);
  const max = maxPrice === '' ? Infinity : Number(maxPrice);

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || product.category === selectedCategory;
    const matchesPrice = product.priceMax >= min && product.priceMin <= max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Banner */}
      <section className="relative h-[300px] w-full max-w-[1422px] mx-auto overflow-hidden">
        <img 
          src={imgHero} 
          alt="สินค้าทั้งหมด" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white">สินค้าและผลิตภัณฑ์</h1>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-8">
        <div className="bg-[rgba(241,173,6,0.19)] rounded-lg p-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#898989]" />
              <input
                type="text"
                placeholder="ค้นหาสินค้าที่คุณสนใจ"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#f2b530]"
              />
            </div>
            
            {/* 🎨 Enhanced Filter Button with Animations */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#f1ad06] hover:bg-[#f2b530] active:bg-[#d99e05] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md relative overflow-hidden group min-w-[140px] justify-center"
            >
              {/* Animated background gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#f1ad06] via-[#ffd700] to-[#f1ad06] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundSize: '200% 100%',
                  animation: showFilters ? 'none' : 'shimmer 2s linear infinite'
                }}
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Icon with smooth rotation and scale */}
              <SlidersHorizontal 
                className="w-5 h-5 transition-all duration-500 relative z-10" 
                style={{ 
                  transform: showFilters 
                    ? 'rotate(180deg) scale(1.2)' 
                    : 'rotate(0deg) scale(1)',
                  filter: showFilters ? 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' : 'none'
                }}
              />
              
              {/* Text with fade transition */}
              <span className="relative z-10 font-medium transition-all duration-300">
                {showFilters ? 'ซ่อนตัวกรอง' : 'ตัวกรอง'}
              </span>
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-lg transition-transform duration-200" />
              
              {/* Pulse effect when filters are active */}
              {showFilters && (
                <div className="absolute inset-0 rounded-lg animate-pulse-slow bg-white/10" />
              )}
            </button>
          </div>

          {/* Filter Panel with smooth slide animation */}
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: showFilters ? '500px' : '0',
              opacity: showFilters ? 1 : 0,
              transform: showFilters ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            <div className="mt-4 p-4 sm:p-6 bg-white rounded-lg shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm mb-3 text-[#5b5b5b] font-semibold">หมวดหมู่</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                          selectedCategory === category
                            ? 'bg-[#f2b530] text-white shadow-md scale-105'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm mb-3 text-[#5b5b5b] font-semibold">
                    ช่วงราคา (฿)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full sm:flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-[#f2b530] transition-all text-base"
                      placeholder="ราคาต่ำสุด"
                    />
                    <span className="hidden sm:block text-[#5b5b5b] font-medium text-lg shrink-0">-</span>
                    <div className="flex sm:hidden items-center justify-center py-1">
                      <div className="w-full h-px bg-gray-300 flex-1"></div>
                      <span className="px-3 text-[#5b5b5b] text-sm">ถึง</span>
                      <div className="w-full h-px bg-gray-300 flex-1"></div>
                    </div>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full sm:flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-[#f2b530] transition-all text-base"
                      placeholder="ราคาสูงสุด"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#5b5b5b] font-medium">
          พบสินค้า {filteredProducts.length} รายการ
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#898989] text-lg mb-4">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ทั้งหมด');
                setMinPrice('');
                setMaxPrice('');
              }}
              className="mt-4 text-[#f2b530] hover:underline font-medium transition-all hover:scale-105"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}
      </section>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        .shine-effect {
          animation: shine 0.75s;
        }

        .shine-effect:hover {
          animation: shine 0.75s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}