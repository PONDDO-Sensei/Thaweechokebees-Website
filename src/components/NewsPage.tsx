import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import BeesSoapImg from '../assets/image/Bees+Soap.jpg';
import Otopbangkok from '../assets/image/Otop-Bangkok.jpg';
import Honey3seasons from '../assets/image/Honey-3-seasons.jpg';
import Newgift from '../assets/image/New-Gift.png';
import RattimaDIP from '../assets/image/Rattima-DIP.jpg';
import Otophatyai from '../assets/image/Otop-Hatyai.jpg';
import Smallbears from '../assets/image/Small-Bears.jpg';
import Honeyallseasons from '../assets/image/Honey-all-seasons.jpg';

import award77 from '../assets/image/mom777.jpg';
import award88 from '../assets/image/mom888.jpg';
import award99 from '../assets/image/mom999.jpg';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

// News Card Component with Interactive Effects
function NewsCard({ article, isFeatured = false }: { 
  article: typeof newsArticles[0];
  isFeatured?: boolean;
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

  if (isFeatured) {
    return (
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-12"
        onMouseEnter={() => !isTouched && setIsHovered(true)}
        onMouseLeave={() => !isTouched && setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          // Ensure it opens in new tab
          e.preventDefault();
          window.open(article.link, '_blank', 'noopener,noreferrer');
        }}
      >
        <div
          className="bg-white rounded-[20px] overflow-hidden shadow-xl transition-all duration-300 active:scale-[0.98]"
          style={{
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: isHovered 
              ? '0 20px 40px rgba(0,0,0,0.15)' 
              : '0 10px 20px rgba(0,0,0,0.1)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative bg-[#999999] h-[400px] overflow-hidden">
              {article.image && (
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                    opacity: imageLoaded ? 1 : 0
                  }}
                />
              )}
              
              {/* Loading Skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
              )}

              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0 }}
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Shine Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 pointer-events-none shine-effect"
                style={{
                  opacity: isHovered ? 0.3 : 0,
                  transform: 'skewX(-20deg)'
                }}
              />

              <div className="inline-block px-4 py-1 bg-[#f2b530] text-white rounded-full text-sm mb-4 w-fit transition-transform duration-300"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              >
                <Tag className="w-4 h-4 inline-block mr-1" />
                {article.category}
              </div>

              <h2 
                className="text-black mb-4 transition-colors duration-300"
                style={{ color: isHovered ? '#f6b82d' : '#000' }}
              >
                {article.title}
              </h2>

              <p className="text-[#5b5b5b] mb-6 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 text-[#898989] text-sm mb-6">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(article.date).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div
                className="bg-[#f2b530] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-all duration-300"
                style={{
                  transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                  backgroundColor: isHovered ? '#f6b82d' : '#f2b530'
                }}
              >
                <span>อ่านเพิ่มเติม</span>
                <ArrowRight 
                  className="w-4 h-4 transition-transform"
                  style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  // Regular Card
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
      onMouseEnter={() => !isTouched && setIsHovered(true)}
      onMouseLeave={() => !isTouched && setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => {
        // Ensure it opens in new tab
        e.preventDefault();
        window.open(article.link, '_blank', 'noopener,noreferrer');
      }}
    >
      <div
        className="bg-white rounded-[20px] overflow-hidden shadow-lg transition-all duration-300 relative active:scale-[0.98]"
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(0,0,0,0.15)' 
            : '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        {/* Image */}
        <div className="relative bg-[#999999] h-[200px] overflow-hidden">
          {article.image && (
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover transition-all duration-500"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                opacity: imageLoaded ? 1 : 0
              }}
            />
          )}
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
          )}

          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          />

          {/* "อ่านเพิ่มเติม" Button */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="bg-[#f6b82d] hover:bg-[#f2b530] text-white px-6 py-3 rounded-full font-medium shadow-lg">
              อ่านเพิ่มเติม
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Shine Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 pointer-events-none shine-effect"
            style={{
              opacity: isHovered ? 0.3 : 0,
              transform: 'skewX(-20deg)'
            }}
          />

          <div 
            className="inline-block px-3 py-1 bg-[#f2b530]/20 text-[#f2b530] rounded-full text-xs mb-3 transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          >
            {article.category}
          </div>

          <h3 
            className="text-black mb-3 font-semibold transition-colors duration-300"
            style={{ color: isHovered ? '#f6b82d' : '#000' }}
          >
            {article.title}
          </h3>

          <p className="text-[#5b5b5b] text-sm mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#898989] text-xs">
              <Calendar className="w-3 h-3" />
              <span>
                {new Date(article.date).toLocaleDateString('th-TH', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div 
              className="text-[#f2b530] text-sm flex items-center gap-1"
              style={{
                color: isHovered ? '#f6b82d' : '#f2b530'
              }}
            >
              <span>อ่านเพิ่ม</span>
              <ArrowRight 
                className="w-3 h-3 transition-transform"
                style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
              />
            </div>
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
    </a>
  );
}

// Hero slider images
const heroImages = [award77, award88, award99];

// Mock news data
const newsArticles = [
  {
    id: '1',
    title: 'โปรโมชั่นพิเศษ ลด 20% น้ำผึ้งและสบู่จากน้ำผึ้ง',
    excerpt: 'ฉลองครบรอบ 30 ปี ร้านน้ำผึ้งทวีโชค ลดราคาพิเศษ 20% ตั้งแต่วันนี้ถึง 31 มกราคม 2569',
    date: '2026-01-31',
    category: 'โปรโมชั่น',
    image: BeesSoapImg,
    link: 'https://www.facebook.com/share/v/1BAMBvbvy9/',
    featured: true
  },
  {
    id: '2',
    title: ' งาน โอท็อป ซิตี้ ปี68 ณ ไบเทค บางนา',
    excerpt: 'เมืองทองธานีชาเลนเจอร์ 2 ด้านหน้า เวที กลาง เสาที่ 27บูธที่ 19โซน OTOP ของขวัญของฝาก พร้อม บริการให้กับ ลูกค้า',
    date: '2025-12-20',
    category: 'ข่าวสาร',
    image: Otopbangkok,
    link: 'https://www.facebook.com/share/p/17mqL5niPG/',
    featured: false
  },
  {
    id: '3',
    title: 'หมีบ๊อกเซ็ท น้ำผึ้ง 3 ฤดู',
    excerpt: 'ขอเสนอผลิตภัณฑ์ใหม่ น้ำผึ้ลสามเกลอ 3ฤดู ในรูปแบบกล่องของขวัญสุดพิเศษ',
    date: '2025-12-11',
    category: 'ผลิตภัณฑ์ใหม่',
    image: Honey3seasons,
    link: 'https://www.facebook.com/share/p/17xwRfkW3t/',
    featured: false
  },
  {
    id: '4',
    title: 'ของขวัญเหมาะสำหรับมอบให้คนพิเศษ',
    excerpt: 'มีของขวัญและของฝากให้เลือกหลากหลาย โดยเฉพาะ:ของขวัญเหมาะสำหรับมอบให้คนพิเศษ',
    date: '2025-12-10',
    category: 'กิจกรรม',
    image: Newgift,
    link: 'https://www.facebook.com/share/v/171XNHvyZ7/',
    featured: false
  },
  {
    id: '5',
    title: 'ถอดความสำเร็จ 30 ปี น้ำผึ้งทวีโชค เส้นทางแสนหวานที่ทุกคนเติบโตไปด้วยกัน',
    excerpt: 'คุณรัตติมา ใจชื่น ได้เข้าร่วมกลุ่มเป็นสมาชิกคลัสเตอร์อุตสาหกรรมน้ำผึ้ง',
    date: '2025-03-03',
    category: 'บทความ',
    image: RattimaDIP,
    link: 'https://www.dip.go.th/th/news-detail/2019-05-27-09-48-26/2022-03-03-16-28-19',
    featured: false
  },
  {
    id: '6',
    title: 'ขอเชิญชวนพ่อแม่พี่น้องชาวจังหวัดปักใต้มาอุดหนุนสินค้าบริษัทประชารัฐ',
    excerpt: 'น้ำผึ้งทวีโชค ที่มอ.หาดใหญ่จังหวัดสงขลาระหว่างวันที่ 12-21 กรกฎาคม 6 7 มีสินค้าหลากหลายชนิดไม่ต้องบินไปไกล มาบริการถึงที่นี่แล้วค่ะ',
    date: '2024-11-05',
    category: 'ข่าวสาร',
    image: Otophatyai,
    link: 'https://www.facebook.com/share/p/16ntyyq4D6/',
    featured: false
  },
  {
    id: '7',
    title: 'เปิดลุคใหม่มีหมีน้อยสวมหมวกปาน',
    excerpt: 'เรื่องราวของการเลี้ยงผึ้งอย่างยั่งยืน เพื่อสิ่งแวดล้อมและผลผลิตที่มีคุณภาพ',
    date: '2024-11-29',
    category: 'ผลิตภัณฑ์ใหม่',
    image: Smallbears,
    link: 'https://www.facebook.com/share/p/1B85svcKDv/',
    featured: false
  },
  {
    id: '8',
    title: ' โปรฟันธงมาแล้วจ้าเหมาะเป็นของขวัญของฝากทุกฤดูเทศกาลของฝากจ้า',
    excerpt: 'น้ำผึ้งหมีคละรส(ลำไย ลิ้นจี่,เดือน 5  ,มะกอกน้ำป่า)ขนาดบรรจุ 140 กรัม ราคาตัวละ 40 บาท',
    date: '2024-05-13',
    category: 'โปรโมชั่น',
    image: Honeyallseasons,
    link: 'https://www.facebook.com/share/p/14ULmo2w5bY/',
    featured: false
  },
];

const categories = ['ทั้งหมด', 'โปรโมชั่น', 'ผลิตภัณฑ์ใหม่', 'กิจกรรม', 'บทความ', 'ข่าวสาร'];

export function NewsPage({ onNavigate }: NewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [heroIndex, setHeroIndex] = useState(0);

  // Hero auto slide
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(heroTimer);
  }, []);

  const filteredNews = selectedCategory === 'ทั้งหมด'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${heroIndex * 100}%)` }}
          >
            {heroImages.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={img}
                  alt={`Hero slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="relative h-full max-w-[1422px] mx-auto px-8 flex items-center">
          <div className="text-white">
            <h1 className="mb-4">
              ข่าวสารและโปรโมชั่น
            </h1>
            <p className="text-2xl drop-shadow-md">อัพเดทข่าวสารและกิจกรรมล่าสุด</p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`h-3 rounded-full transition-all ${
                heroIndex === index ? 'bg-white w-8' : 'bg-white/50 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setHeroIndex(prev => 
            prev === 0 ? heroImages.length - 1 : prev - 1
          )}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition z-10"
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={() => setHeroIndex(prev => 
            prev === heroImages.length - 1 ? 0 : prev + 1
          )}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition z-10"
          aria-label="Next"
        >
          →
        </button>
      </section>

      <div className="max-w-[1422px] mx-auto px-8 py-16">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#f2b530] text-white shadow-lg scale-105'
                    : 'bg-white text-[#5b5b5b] hover:bg-[#f2b530]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'ทั้งหมด' && (
          <NewsCard article={featuredArticle} isFeatured={true} />
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#898989] mb-4">ไม่พบข่าวสารในหมวดนี้</p>
            <button
              onClick={() => setSelectedCategory('ทั้งหมด')}
              className="text-[#f2b530] hover:underline"
            >
              ดูข่าวสารทั้งหมด
            </button>
          </div>
        )}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .shine-effect {
          animation: shine 0.75s;
        }
      `}</style>
    </div>
  );
}