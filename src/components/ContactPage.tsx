import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";
interface ContactPageProps {
  onNavigate: (page: string) => void;
}
export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden">
        <div className="relative h-full max-w-[1422px] mx-auto px-8 flex items-center">
          <div className="text-white">
            <h1 className="mb-4">ติดต่อเรา</h1>
            <p className="text-xl">เรายินดีให้บริการและตอบคำถามของคุณ</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-black mb-6">ข้อมูลติดต่อ</h2>
              
              {/* Address */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2b530] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black text-sm mb-2">ที่อยู่</h3>
                    <p className="text-[#5b5b5b] text-sm">
                      123 ถนนXXX<br />
                      แขวง/ตำบล XXX เขต/อำเภอ XXX<br />
                      กรุงเทพฯ 10XXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2b530] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black text-sm mb-2">โทรศัพท์</h3>
                    <p className="text-[#5b5b5b] text-sm">
                      02-XXX-XXXX<br />
                      08X-XXX-XXXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2b530] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black text-sm mb-2">อีเมล</h3>
                    <p className="text-[#5b5b5b] text-sm">
                      info@namphuengthaweechoke.com<br />
                      sales@namphuengthaweechoke.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-[20px] shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2b530] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black text-sm mb-2">เวลาทำการ</h3>
                    <p className="text-[#5b5b5b] text-sm">
                      จันทร์ - ศุกร์: 09:00 - 18:00<br />
                      เสาร์ - อาทิตย์: 09:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-black mb-4">ติดตามเรา</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src={imgFacebook} alt="Facebook" className="w-6 h-6" />
                </a>
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#00B900] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img src={imgLine} alt="Line" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-[20px] shadow-lg">
              <h2 className="text-black mb-6">ส่งข้อความถึงเรา</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#5b5b5b] text-sm mb-2">
                      ชื่อ - นามสกุล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-transparent"
                      placeholder="กรอกชื่อของคุณ"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5b5b5b] text-sm mb-2">
                      อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#5b5b5b] text-sm mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-transparent"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-[#5b5b5b] text-sm mb-2">
                      หัวข้อ <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-transparent"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      <option value="product">สอบถามเรื่องสินค้า</option>
                      <option value="order">สั่งซื้อสินค้า</option>
                      <option value="partnership">ความร่วมมือทางธุรกิจ</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#5b5b5b] text-sm mb-2">
                    ข้อความ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f2b530] focus:border-transparent resize-none"
                    placeholder="กรอกข้อความของคุณ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f2b530] hover:bg-[#f6b82d] text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>ส่งข้อความ</span>
                </button>
              </form>
            </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5379537431945!2d100.49328931483058!3d13.756331590353308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269e0e7b3%3A0xb7fcf94c5681881e!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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
              onClick={() => window.open('https://line.me/ti/p/~@example', '_blank')}
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
              onClick={() => window.open('https://facebook.com/namphuengthaweechoke', '_blank')}
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
