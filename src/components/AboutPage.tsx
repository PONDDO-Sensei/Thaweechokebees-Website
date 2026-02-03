import { useEffect, useState } from "react";
import { Award, Users, Target, Heart, Calendar, MapPin, Building2, Trophy } from "lucide-react";
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
  { year: "2558", event: "ก่อตั้งร้านน้ำผึ้งทวีโชค เริ่มต้นธุรกิจเลี้ยงผึ้ง,รับรองมาตรฐานผลิตภัณฑ์อุตสาหกรรม", icon: Building2 },
  { year: "2564", event: "รับรองผลตรวจคุณภาพนน้ำผึ้ง", icon: Award },
  { year: "2567", event: "ได้รับอนุญาตให้ใช้ตราผลิตภัณฑ์จังหวัดเชียงราย", icon: Trophy },
  { year: "2568", event: "เข้ากิจกรรมพัฒนาผลิตภัณฑ์อาหารและเครื่องดื่ม", icon: Target },
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [heroTouchStart, setHeroTouchStart] = useState<number | null>(null);
  const [heroTouchEnd, setHeroTouchEnd] = useState<number | null>(null);
  const [visibleTimeline, setVisibleTimeline] = useState<number[]>([]);

  const minSwipeDistance = 50;

  // Touch handlers for Awards Slider
  const onAwardTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onAwardTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onAwardTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => 
        prev === awardImages.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => 
        prev === 0 ? awardImages.length - 1 : prev - 1
      );
    }
  };

  // Touch handlers for Hero Slider
  const onHeroTouchStart = (e: React.TouchEvent) => {
    setHeroTouchEnd(null);
    setHeroTouchStart(e.targetTouches[0].clientX);
  };

  const onHeroTouchMove = (e: React.TouchEvent) => {
    setHeroTouchEnd(e.targetTouches[0].clientX);
  };

  const onHeroTouchEnd = () => {
    if (!heroTouchStart || !heroTouchEnd) return;
    
    const distance = heroTouchStart - heroTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setHeroIndex((prev) => 
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      setHeroIndex((prev) => 
        prev === 0 ? heroImages.length - 1 : prev - 1
      );
    }
  };

  /* ---------- Awards auto slide ---------- */
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
    }, 4000);

    return () => clearInterval(heroTimer);
  }, []);

  /* ---------- Timeline scroll animation ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleTimeline(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section with Image Slider */}
      <section 
        className="relative h-[300px] sm:h-[400px] lg:h-[450px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden"
        onTouchStart={onHeroTouchStart}
        onTouchMove={onHeroTouchMove}
        onTouchEnd={onHeroTouchEnd}
      >
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
        <div className="relative h-full max-w-[1422px] mx-auto px-4 sm:px-8 flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="mb-2 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              ประวัติและรางวัล
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl drop-shadow-md">30 ปี แห่งความมุ่งมั่นและคุณภาพ</p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`h-2.5 sm:h-3 rounded-full transition-all touch-manipulation ${
                heroIndex === index ? 'bg-white w-8 sm:w-10' : 'bg-white/50 w-2.5 sm:w-3 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons - อยู่ด้านนอกซ้ายขวาสุด */}
        <button
          onClick={() => setHeroIndex(prev => 
            prev === 0 ? heroImages.length - 1 : prev - 1
          )}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-black/20 hover:bg-black/30 text-white rounded-r-full transition-all duration-300 z-10 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold hover:scale-110 active:scale-95 touch-manipulation"
          style={{ paddingLeft: '8px' }}
          aria-label="Previous"
        >
          ←
        </button>

        <button
          onClick={() => setHeroIndex(prev => 
            prev === heroImages.length - 1 ? 0 : prev + 1
          )}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-black/20 hover:bg-black/30 text-white rounded-l-full transition-all duration-300 z-10 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold hover:scale-110 active:scale-95 touch-manipulation"
          style={{ paddingRight: '8px' }}
          aria-label="Next"
        >
          →
        </button>
      </section>

      {/* ================= Content ================= */}
      <section className="max-w-[1422px] mx-auto px-4 sm:px-8 py-12 sm:py-16">

        {/* ---------- About ---------- */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-black mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold">เกี่ยวกับเรา</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

            {/* History Card with Enhanced Design */}
            <div className="order-2 lg:order-1">
              <div style={{
                position: "relative",
                width: "100%",
                background: "rgba(253, 253, 252, 0.73)",
                borderRadius: 24,
                padding: "40px 28px",
                boxShadow: "0 8px 40px rgba(180,140,60,0.1)",
                border: "1px solid rgba(200,170,80,0.15)",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease"
              }}
              className="hover:shadow-2xl hover:scale-[1.02] active:scale-[1.02]"
              >

                {/* Honeycomb deco top */}
                <div className="hidden sm:flex" style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
                  {["#f5c842","#f0b82e","#f5c842"].map((c, i) => (
                    <svg key={i} width="44" height="50" viewBox="0 0 44 50">
                      <polygon points="22,2 42,14 42,36 22,48 2,36 2,14" fill={c} opacity={i === 1 ? 1 : 0.55} stroke="#d4a017" strokeWidth="1.5" />
                    </svg>
                  ))}
                </div>

                {/* Title */}
                <h2 style={{
                  textAlign: "center",
                  fontSize: "clamp(20px, 5vw, 28px)",
                  fontWeight: 800,
                  color: "#070603ff",
                  marginBottom: 4,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase"
                }}>
                  ประวัติและความเป็นมา
                </h2>
                <div style={{ width: 56, height: 3, background: "linear-gradient(90deg, transparent, #f0b82e, transparent)", borderRadius: 2, margin: "0 auto 24px sm:32px" }} />

                {/* Timeline items */}
                {[
                  { icon: "🐝", label: "ผู้ก่อตั้ง", text: "น้ำผึ้งทวีโชค ก่อตั้งโดยคุณรัตติมาใจชื่น" },
                  { icon: "📅", label: "ประสบการณ์", text: "ผู้มีประสบการณ์กว่า 30 ปี" },
                  { icon: "🌐", label: "เครือข่าย", text: "พัฒนาจากธุรกิจท้องถิ่นเข้าสู่เครือข่าย Honey Cluster" },
                  { icon: "📝", label: "จดทะเบียน", text: "จดทะเบียนนิติบุคคลในชื่อ หจก. ผึ้งทวีโชค เมื่อวันที่ 7 มิ.ย. 2560" },
                  { icon: "📍", label: "สำนักงาน", text: "สำนักงานตั้งอยู่ที่ จ.เชียงราย" },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      gap: 12, 
                      marginBottom: i < 4 ? 20 : 0, 
                      position: "relative", 
                      paddingLeft: 4,
                      opacity: 0,
                      animation: `slideInLeft 0.5s ease forwards ${i * 0.1}s`
                    }}
                  >
                    {/* Vertical line */}
                    {i < 4 && <div style={{ position: "absolute", left: 21, top: 36, width: 2, height: "calc(100% + 8px)", background: "linear-gradient(180deg, #f0b82e, #f5c842)" }} />}
                    
                    {/* Icon bubble */}
                    <div style={{
                      minWidth: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #fde88a, #f5c842)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18, 
                      boxShadow: "0 3px 10px rgba(200,160,20,0.25)",
                      zIndex: 1,
                      position: "relative",
                      transition: "transform 0.3s ease"
                    }}
                    className="hover:scale-110 active:scale-110"
                    >
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div style={{ paddingTop: 4, flex: 1 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#c89a1a", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: "clamp(14px, 3vw, 16px)", fontWeight: 600, color: "#000000ff", lineHeight: 1.5 }}>{item.text}</div>
                    </div>
                  </div>
                ))}

                {/* Bottom deco */}
                <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 6 }}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 2 ? "#f0b82e" : "#f5c84255" }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[450px] rounded-[20px] overflow-hidden shadow-xl group">
              <ImageWithFallback
                src={award8}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110"
              />
            </div>
            
          </div>
        </div>

        {/* ---------- Core Values ---------- */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-black mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold">ค่านิยมหลัก</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Heart, title: "คุณภาพ", color: "#f2b530" },
              { icon: Target, title: "ความซื่อสัตย์", color: "#e67e22" },
              { icon: Users, title: "ลูกค้าคือศูนย์กลาง", color: "#3498db" },
              { icon: Award, title: "นวัตกรรม", color: "#9b59b6" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-[20px] text-center shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 cursor-pointer group"
                style={{
                  animation: `fadeInUp 0.6s ease forwards ${i * 0.1}s`,
                  opacity: 0
                }}
              >
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-black text-sm sm:text-base lg:text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-black mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold">เส้นทางแห่งความสำเร็จ</h2>
          <div className="space-y-4 sm:space-y-6 max-w-[900px] mx-auto">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                data-index={i}
                className={`timeline-item bg-white p-4 sm:p-6 rounded-[16px] shadow-lg hover:shadow-xl active:shadow-xl transition-all duration-500 cursor-pointer group ${
                  visibleTimeline.includes(i) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f2b530] to-[#c68d00] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-active:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#f2b530] font-bold mb-1 sm:mb-2 text-sm sm:text-base">พ.ศ. {item.year}</div>
                    <p className="text-[#5b5b5b] text-sm sm:text-base leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Awards Slider (Auto Slide with Touch) ---------- */}
        <div className="mb-16">
          <h2 className="text-black mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold">
            รางวัลและความสำเร็จ
          </h2>

          <div 
            className="relative max-w-[700px] mx-auto overflow-hidden"
            onTouchStart={onAwardTouchStart}
            onTouchMove={onAwardTouchMove}
            onTouchEnd={onAwardTouchEnd}
          >
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {awardImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-gradient-to-br from-amber-50/30 to-orange-50/30 p-4 sm:p-6 rounded-[24px] shadow-xl border border-gray-200/50 hover:shadow-2xl active:shadow-2xl transition-all duration-300">
                    <img
                      src={img}
                      alt={`Award ${index + 1}`}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain bg-transparent rounded-[16px]"
                    />
                    
                    {/* Image Counter */}
                    <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 font-medium">
                      {index + 1} / {awardImages.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentIndex(prev => 
                prev === 0 ? awardImages.length - 1 : prev - 1
              )}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f2b530] to-[#c68d00] text-white text-xl sm:text-2xl font-bold flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10 touch-manipulation"
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              onClick={() => setCurrentIndex(prev => 
                prev === awardImages.length - 1 ? 0 : prev + 1
              )}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#f2b530] to-[#c68d00] text-white text-xl sm:text-2xl font-bold flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl z-10 touch-manipulation"
              aria-label="Next"
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {awardImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentIndex 
                      ? 'bg-[#f2b530] w-6 sm:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </div>
  );
}