import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import BeesSoapImg from '../assets/image/Bees+Soap.jpg';
import Otopbangkok from '../assets/image/Otop Bangkok.jpg';
import Honey3seasons from '../assets/image/Honey 3 seasons.jpg';
import Newgift from '../assets/image/New Gift.png';
import RattimaDIP from '../assets/image/Rattima DIP.jpg';
import Otophatyai from '../assets/image/Otop Hatyai.jpg';
import Smallbears from '../assets/image/Small Bears.jpg';
import Honeyallseasons from '../assets/image/Honey all seasons.jpg';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

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
    image:  Newgift,
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

  const filteredNews = selectedCategory === 'ทั้งหมด'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden">
        <div className="relative h-full max-w-[1422px] mx-auto px-8 flex items-center">
          <div className="text-white">
            <h1 className="mb-4">ข่าวสารและโปรโมชั่น</h1>
            <p className="text-xl">อัพเดทข่าวสารและกิจกรรมล่าสุด</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1422px] mx-auto px-8 py-16">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#f2b530] text-white'
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
    <a
    href={featuredArticle.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block mb-12 group"
  >
    <div
      className="bg-white rounded-[20px] overflow-hidden
                 shadow-xl transition-all duration-300
                 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="bg-[#999999] h-[400px] overflow-hidden">
          {featuredArticle.image && (
            <ImageWithFallback
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover
                         transition-transform duration-500
                         group-hover:scale-105"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-block px-4 py-1 bg-[#f2b530] text-white rounded-full text-sm mb-4 w-fit">
            <Tag className="w-4 h-4 inline-block mr-1" />
            {featuredArticle.category}
          </div>

          <h2 className="text-black mb-4 group-hover:text-[#f2b530] transition-colors">
            {featuredArticle.title}
          </h2>

          <p className="text-[#5b5b5b] mb-6 leading-relaxed">
            {featuredArticle.excerpt}
          </p>

          <div className="flex items-center gap-2 text-[#898989] text-sm mb-6">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(featuredArticle.date).toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Button look (แต่จริง ๆ คลิกทั้งการ์ด) */}
          <div
            className="bg-[#f2b530] text-white px-6 py-3 rounded-full
                       flex items-center gap-2 w-fit
                       transition-all duration-300
                       group-hover:bg-[#f6b82d]"
          >
            <span>อ่านเพิ่มเติม</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  </a>
)}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularArticles.map((article) => (
       <a
        key={article.id}
         href={article.link}
         target="_blank"
         rel="noopener noreferrer"
         className="block group"
        >
      <div
        className="bg-white rounded-[20px] overflow-hidden shadow-lg
                   transition-all duration-300
                   hover:shadow-xl hover:-translate-y-1"
      >
        {/* Image */}
        <div className="bg-[#999999] h-[200px] overflow-hidden">
          {article.image && (
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover
                         transition-transform duration-500
                         group-hover:scale-105"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="inline-block px-3 py-1 bg-[#f2b530]/20 text-[#f2b530] rounded-full text-xs mb-3">
            {article.category}
          </div>

          <h3 className="text-black mb-3 group-hover:text-[#f2b530] transition-colors">
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

            <div className="text-[#f2b530] text-sm flex items-center gap-1">
              <span>อ่านเพิ่ม</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </a>
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

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-[#f2b530] to-[#c68d00] rounded-[20px] p-8 md:p-12 text-white text-center">
          <h2 className="mb-4">รับข่าวสารและโปรโมชั่นพิเศษ</h2>
          <p className="mb-6 opacity-90">สมัครรับข้อมูลข่าวสารและโปรโมชั่นล่าสุดทางอีเมล</p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#f2b530] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              สมัคร
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
