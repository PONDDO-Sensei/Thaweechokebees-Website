import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#c68d00] py-12">
      <div className="max-w-[1422px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* ข้อมูลร้าน */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">ร้านน้ำผึ้งทวีโชค</h3>
            <p className="text-sm opacity-90">
              ผู้ผลิตและจำหน่ายน้ำผึ้งคุณภาพ<br/>
              มีประสบการณ์กว่า 30 ปี<br/>
              รับจัดกระเช้าและจำหน่ายผลิตภัณฑ์ชุมชน
            </p>
          </div>

          {/* ติดต่อเรา */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">ติดต่อเรา</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>097-465-1699</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jailaknorravit@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>ถนนเวียงชัย-หนองหลวง เชียงราย 57120</span>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">แผนที่ร้าน</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0886965175787!2d99.9421631752258!3d19.878476281498415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7a862234df4a5%3A0x1ce664ec565d5de6!2z4Lic4Li24LmJ4LiH4LiX4Lin4Li14LmC4LiK4LiE!5e0!3m2!1sth!2sth!4v1769967875533!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="แผนที่ร้านน้ำผึ้งทวีโชค"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>&copy; 2025 ร้านน้ำผึ้งทวีโชค. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}