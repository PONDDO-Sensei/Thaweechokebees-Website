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
              ประวัติและรางวัล
            </h1>
            <p className="text-2xl drop-shadow-md">30 ปี แห่งความมุ่งมั่นและคุณภาพ</p>
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
        <div className="mb-16 ">
          <h2 className ="text-black mb-8 text-center text-xl ">เกี่ยวกับเรา </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div style={{
      minHeight: "50vh",
      background: "#ffedb0ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        position: "relative",
        maxWidth: 680,
        width: "100%",
        background: "rgba(253, 253, 252, 0.73)",
        borderRadius: 24,
        padding: "52px 44px",
        boxShadow: "0 8px 40px rgba(180,140,60,0.1)",
        border: "1px solid rgba(200,170,80,0.15)",
        backdropFilter: "blur(6px)"
      }}>

        {/* Honeycomb deco top */}
        <div style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
          {["#f5c842","#f0b82e","#f5c842"].map((c, i) => (
            <svg key={i} width="44" height="50" viewBox="0 0 44 50">
              <polygon points="22,2 42,14 42,36 22,48 2,36 2,14" fill={c} opacity={i === 1 ? 1 : 0.55} stroke="#d4a017" strokeWidth="1.5" />
            </svg>
          ))}
        </div>

        {/* Title */}
        <h2 style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 800,
          color: "#070603ff",
          marginBottom: 4,
          letterSpacing: "0.02em",
          textTransform: "uppercase"
        }}>
          ประวัติและความเป็นมา
        </h2>
        <div style={{ width: 56, height: 3, background: "linear-gradient(90deg, transparent, #f0b82e, transparent)", borderRadius: 2, margin: "0 auto 32px" }} />

        {/* Timeline items */}
        {[
          { icon: "🐝", label: "ผู้ก่อตั้ง", text: "น้ำผึ้งทวีโชค ก่อตั้งโดยคุณรัตติมาใจชื่น" },
          { icon: "📅", label: "ประสบการณ์", text: "ผู้มีประสบการณ์กว่า 30 ปี" },
          { icon: "🌐", label: "เครือข่าย", text: "พัฒนาจากธุรกิจท้องถิ่นเข้าสู่เครือข่าย Honey Cluster" },
          { icon: "📝", label: "จดทะเบียน", text: "จดทะเบียนนิติบุคคลในชื่อ หจก. ผึ้งทวีโชค เมื่อวันที่ 7 มิ.ย. 2560" },
          { icon: "📍", label: "สำนักงาน", text: "สำนักงานตั้งอยู่ที่ จ.เชียงราย" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: i < 4 ? 24 : 0, position: "relative", paddingLeft: 8 }}>
            {/* Vertical line */}
            {i < 4 && <div style={{ position: "absolute", left: 27, top: 36, width: 2, height: "calc(100% + 8px)", background: "linear-gradient(180deg, #f0b82e, #f5c842)" }} />}
            {/* Icon bubble */}
            <div style={{
              minWidth: 44,
              height: 44,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fde88a, #f5c842)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20, 
              boxShadow: "0 3px 10px rgba(200,160,20,0.25)",
              zIndex: 1,
              position: "relative"
            }}>
              {item.icon}
            </div>
            {/* Content */}
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#c89a1a", marginBottom: 2 }}>{item.label}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#000000ff", lineHeight: 1.5 }}>{item.text}</div>
            </div>
          </div>
        ))}

        {/* Bottom deco */}
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 6 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 2 ? "#f0b82e" : "#f5c84255" }} />
          ))}
        </div>
      </div>
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