import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";

import award77 from '../assets/image/mom777.jpg';
import award88 from '../assets/image/mom888.jpg';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

// Hero slider images
const heroImages = [award77, award88];

export function ContactPage({ onNavigate }: ContactPageProps) {
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
            <h1 className="mb-4">ติดต่อเรา</h1>
            <p className="text-2xl">เรายินดีให้บริการและตอบคำถามของคุณ</p>
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

      <div className="max-w-[1422px] mx-auto px-8 py-16">
        {/* Contact Information - แสดงแบบ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address */}
          <div className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-lg mb-3">ที่อยู่</h3>
              <p className="text-[#5b5b5b] text-sm">
                198 ม.10<br />
                ตำบล เมืองชุม เขต/อำเภอ เวียงชัย<br />
                เชียงราย 57120
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-lg mb-3">โทรศัพท์</h3>
              <p className="text-[#5b5b5b] text-sm">
                097-465-1699
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-lg mb-3">อีเมล</h3>
              <p className="text-[#5b5b5b] text-sm">
                jailaknorravit@gmail.com
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black text-lg mb-3">เวลาทำการ</h3>
              <p className="text-[#5b5b5b] text-sm">
                จันทร์ - ศุกร์: 09:00 - 17:00<br/>
                เสาร์: 09:00 - 17:00<br/>
                หยุดทุกวันอาทิตย์
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <h3 className="text-black text-2xl mb-6">ติดตามเรา</h3>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.facebook.com/Thaweechokebees?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <img src={imgFacebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://linevoom.line.me/user/_dfBvlrz_2LZF2ct7Gp63mxT3_qsExy9ks-fuZRw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#00B900] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <img src={imgLine} alt="Line" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h2 className="text-black mb-6">แผนที่</h2>
          <div className="bg-white rounded-[20px] overflow-hidden shadow-lg">
            <div className="w-full h-[400px] bg-[#999999] relative">
              {/* Embedded Google Maps */}
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0886965175787!2d99.9421631752258!3d19.878476281498415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7a862234df4a5%3A0x1ce664ec565d5de6!2z4Lic4Li24LmJ4LiH4LiX4Lin4Li14LmC4LiK4LiE!5e0!3m2!1sth!2sth!4v1766507374453!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#00B900] to-[#00A000] p-8 rounded-[20px] text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-1">ติดต่อผ่าน Line</h3>
                <p className="text-sm opacity-90">สะดวก รวดเร็ว ตอบทันใจ</p>
              </div>
            </div>
            <button
              onClick={() => window.open('https://linevoom.line.me/user/_dfBvlrz_2LZF2ct7Gp63mxT3_qsExy9ks-fuZRw', '_blank')}
              className="w-full bg-white text-[#00B900] py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              เพิ่มเพื่อนใน Line
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#1877F2] to-[#0d6efd] p-8 rounded-[20px] text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-1">ติดต่อผ่าน Facebook</h3>
                <p className="text-sm opacity-90">สอบถามข้อมูลเพิ่มเติม</p>
              </div>
            </div>
            <button
              onClick={() => window.open('https://www.facebook.com/Thaweechokebees?locale=th_TH', '_blank')}
              className="w-full bg-white text-[#1877F2] py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              ส่งข้อความทาง Messenger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}