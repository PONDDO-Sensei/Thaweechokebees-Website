import { useEffect, useState } from "react";
import { Award, Users, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import award1 from "@/assets/image/G01.jpg";
import award2 from "@/assets/image/G02.jpg";
import award3 from "@/assets/image/G03.jpg";
import award4 from "@/assets/image/G04.jpg";
import award5 from "@/assets/image/G07.jpg";
import award6 from "@/assets/image/mom1.jpg";
import award7 from "@/assets/image/mom2.jpg";
import award8 from "@/assets/image/Home.jpg";

/* ---------------- Timeline ---------------- */
const timeline = [
  { year: "2558", event: "ก่อตั้งร้านน้ำผึ้งทวีโชค เริ่มต้นธุรกิจเลี้ยงผึ้ง,รับรองมาตรฐานผลิตภัณฑ์อุตสาหกรรม" },
  { year: "2564", event: "รับรองผลตรวจคุณภาพนน้ำผึ้ง" },
  { year: "2567", event: "ได้รับอนุญาตให้ใช้ตราผลิตภัณฑ์จังหวัดเชียงราย" },
  { year: "2568", event: "เข้ากิจกรรมพัฒนาผลิตภัณฑ์อาหารและเครื่องดื่ม" },
];

/* ---------------- Awards Images ---------------- */
const awardImages = [
  award1,
  award2,
  award3,
  award4,
  award5,
];

/* ---------------- Hero Images ---------------- */
const heroImages = [
  award8, // Home.jpg
  award6, // mom1.jpg
  award7, // mom2.jpg
];

export function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  /* ---------- Awards auto slide (ปรับเป็น 5 วินาที) ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === awardImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* ---------- Hero auto slide ---------- */
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(heroTimer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf8ef]">

      {/* ================= Hero with Slider ================= */}
      <section className="relative h-[380px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden">
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
        <div className="relative h-[300px] w-full max-w-[1422px] mx-auto overflow-hidden flex items-center">
          <div className="text-white ml-8 md:ml-16">
            <h1 className="mb-4 text-xl md:text-xl font-bold">ประวัติและรางวัล</h1>
            <p className="text-xl md:text-xl">30 ปี แห่งความมุ่งมั่นและคุณภาพ</p>
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

        {/* ปุ่มซ้าย */}
        <button
          onClick={() => setHeroIndex(prev => 
            prev === 0 ? heroImages.length - 1 : prev - 1
          )}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition z-10"
          aria-label="Previous"
        >
          ←
        </button>

        {/* ปุ่มขวา */}
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

      {/* ================= Content ================= */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">

        {/* ---------- About ---------- */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center text-xl">เกี่ยวกับเรา</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white text-xl md:text-3xl lg:text-4xl font-bold text-center leading-relaxed p-8 rounded-lg">
              <p>
                ร้านน้ำผึ้งทวีโชค เริ่มต้นจากความรักในธรรมชาติ
                <br />
                เรามุ่งมั่นผลิตน้ำผึ้งคุณภาพสูง ปลอดสารเคมี
                <br />
                วันนี้เราได้รับความไว้วางใจจากลูกค้ามากมาย
              </p>
            </div>
            <div className="h-[360px] rounded-[20px] overflow-hidden">
              <ImageWithFallback
                src="src/assets/image/Home.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ---------- Core Values ---------- */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">ค่านิยมหลัก</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "คุณภาพ" },
              { icon: Target, title: "ความซื่อสัตย์" },
              { icon: Users, title: "ลูกค้าคือศูนย์กลาง" },
              { icon: Award, title: "นวัตกรรม" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[20px] text-center shadow"
              >
                <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-black">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">เส้นทางแห่งความสำเร็จ</h2>
          <div className="space-y-6 max-w-[800px] mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-[16px] shadow">
                <div className="text-[#f2b530] mb-2">พ.ศ. {item.year}</div>
                <p className="text-[#5b5b5b]">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Awards Slider (Auto Slide) ---------- */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">
            รางวัลและความสำเร็จ
          </h2>

          <div className="relative max-w-[600px] mx-auto overflow-hidden">
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {awardImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-50/30 to-orange-50/30 p-6 rounded-[24px] shadow-xl border border-gray-200/50">
                    <img
                      src={img}
                      alt={`Award ${index + 1}`}
                      className="w-full h-[400px] object-contain bg-transparent rounded-[16px]"
                    />
                    
                    {/* Image Counter */}
                    <div className="text-center mt-4 text-sm text-gray-500">
                      {index + 1} / {awardImages.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ปุ่มซ้าย */}
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === 0 ? awardImages.length - 1 : prev - 1
              )}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#f2b530] to-[#c68d00] text-white text-2xl font-bold flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* ปุ่มขวา */}
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === awardImages.length - 1 ? 0 : prev + 1
              )}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#f2b530] to-[#c68d00] text-white text-2xl font-bold flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              aria-label="Next"
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {awardImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#f2b530] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}