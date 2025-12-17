import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

// Mock news data
const newsArticles = [
  {
    id: '1',
    title: 'โปรโมชั่นพิเศษ ลด 20% ทุกสินค้า',
    excerpt: 'ฉลองครบรอบ 30 ปี ร้านน้ำผึ้งทวีโชค ลดราคาพิเศษทุกสินค้า 20% ตั้งแต่วันนี้ถึง 31 ธันวาคม',
    date: '2024-12-01',
    category: 'โปรโมชั่น',
    image: 'https://images.unsplash.com/photo-1668822234480-32ef8a8bb90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMHByb2R1Y3QlMjBwcm9tb3Rpb258ZW58MXx8fHwxNzY1Mzc1NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: '2',
    title: 'เปิดตัวน้ำผึ้งออแกนิครุ่นใหม่',
    excerpt: 'น้ำผึ้งออแกนิคคุณภาพพรีเมี่ยม ได้รับการรับรองมาตรฐานสากล เพื่อสุขภาพที่ดีของคุณ',
    date: '2024-11-25',
    category: 'ผลิตภัณฑ์ใหม่',
    image: null,
    featured: false
  },
  {
    id: '3',
    title: 'ทริปเยี่ยมชมฟาร์มผึ้ง เดือนมกราคม',
    excerpt: 'เชิญชวนผู้สนใจร่วมทริปเยี่ยมชมฟาร์มผึ้ง เรียนรู้กระบวนการผลิต และชิมน้ำผึ้งสดจากรัง',
    date: '2024-11-20',
    category: 'กิจกรรม',
    image: null,
    featured: false
  },
  {
    id: '4',
    title: 'น้ำผึ้ง กับประโยชน์ต่อสุขภาพ',
    excerpt: 'รู้หรือไม่? น้ำผึ้งมีประโยชน์มากมาย ทั้งช่วยบำรุงผิว เพิ่มภูมิคุ้มกัน และยังมีสารต้านอนุมูลอิสระ',
    date: '2024-11-15',
    category: 'บทความ',
    image: null,
    featured: false
  },
  {
    id: '5',
    title: 'สูตรเครื่องดื่มน้ำผึ้งเพื่อสุขภาพ',
    excerpt: 'แนะนำสูตรเครื่องดื่มน้ำผึ้งสุดพิเศษ ดื่มง่าย มีประโยชน์ เหมาะกับทุกช่วงเวลา',
    date: '2024-11-10',
    category: 'บทความ',
    image: null,
    featured: false
  },
  {
    id: '6',
    title: 'ซื้อ 2 แถม 1 สำหรับน้ำผึ้งลำไย',
    excerpt: 'โปรโมชั่นพิเศษ ซื้อน้ำผึ้งลำไย 2 ขวด แถมฟรี 1 ขวด วันนี้ถึง 15 ธันวาคม',
    date: '2024-11-05',
    category: 'โปรโมชั่น',
    image: null,
    featured: false
  },
  {
    id: '7',
    title: 'การดูแลรักษาผึ้งอย่างยั่งยืน',
    excerpt: 'เรื่องราวของการเลี้ยงผึ้งอย่างยั่งยืน เพื่อสิ่งแวดล้อมและผลผลิตที่มีคุณภาพ',
    date: '2024-10-30',
    category: 'บทความ',
    image: null,
    featured: false
  },
  {
    id: '8',
    title: 'ได้รับรางวัลผลิตภัณฑ์เกษตรดีเด่น',
    excerpt: 'ร้านน้ำผึ้งทวีโชคได้รับรางวัลผลิตภัณฑ์เกษตรดีเด่นประจำปี 2567 จากกระทรวงเกษตร',
    date: '2024-10-25',
    category: 'ข่าวสาร',
    image: null,
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
          <div className="mb-12">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#999999] h-[400px]">
                  {featuredArticle.image && (
                    <ImageWithFallback
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-[#f2b530] text-white rounded-full text-sm mb-4 w-fit">
                    <Tag className="w-4 h-4 inline-block mr-1" />
                    {featuredArticle.category}
                  </div>
                  <h2 className="text-black mb-4">{featuredArticle.title}</h2>
                  <p className="text-[#5b5b5b] mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#898989] text-sm mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredArticle.date).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <button className="bg-[#f2b530] hover:bg-[#f6b82d] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-colors">
                    <span>อ่านเพิ่มเติม</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="bg-[#999999] h-[200px]">
                {article.image && (
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#f2b530]/20 text-[#f2b530] rounded-full text-xs mb-3">
                  {article.category}
                </div>
                <h3 className="text-black mb-3">{article.title}</h3>
                <p className="text-[#5b5b5b] text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#898989] text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString('th-TH', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <button className="text-[#f2b530] hover:text-[#f6b82d] text-sm flex items-center gap-1 transition-colors">
                    <span>อ่านเพิ่ม</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
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
