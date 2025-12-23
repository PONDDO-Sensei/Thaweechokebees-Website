import { Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#c68d00] py-12">
      <div className="max-w-[1422px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* ข้อมูลร้าน */}
          <div>
            <h3 className="mb-4">ร้านน้ำผึ้งทวีโชค</h3>
            <p className="text-sm opacity-90">
              ผู้ผลิตและจำหน่ายน้ำผึ้งคุณภาพ<br/>
              มีประสบการณ์กว่า 30 ปี<br/>
              รับจัดกระเช้าและจำหน่ายผลิตภัณฑ์ชุมชน
            </p>
          </div>

          {/* ติดต่อเรา */}
          <div>
            <h3 className="mb-4">ติดต่อเรา</h3>
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

          {/* ลิงก์สำคัญ */}
          <div>
            <h3 className="mb-4">ลิงก์สำคัญ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#f2b530] transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="#" className="hover:text-[#f2b530] transition-colors">นโยบายความเป็นส่วนตัว</a></li>
              <li><a href="#" className="hover:text-[#f2b530] transition-colors">เงื่อนไขการใช้งาน</a></li>
              <li><a href="#" className="hover:text-[#f2b530] transition-colors">คำถามที่พบบ่อย</a></li>
            </ul>
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