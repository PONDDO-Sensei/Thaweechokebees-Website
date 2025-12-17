import { Award, Users, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

// Timeline data
const timeline = [
  { year: '2536', event: 'ก่อตั้งร้านน้ำผึ้งทวีโชค เริ่มต้นธุรกิจเลี้ยงผึ้ง' },
  { year: '2540', event: 'ขยายพื้นที่เลี้ยงผึ้งครอบคลุม 5 จังหวัด' },
  { year: '2545', event: 'ได้รับรางวัลน้ำผึ้งคุณภาพดีเด่นระดับประเทศ' },
  { year: '2550', event: 'เปิดศูนย์เรียนรู้เรื่องผึ้งและผลิตภัณฑ์' },
  { year: '2555', event: 'ได้รับการรับรอง GMP และ HACCP' },
  { year: '2560', event: 'ขยายธุรกิจสู่ตลาดออนไลน์' },
  { year: '2565', event: 'ครบรอบ 30 ปี แห่งการเดินทางสู่ความสำเร็จ' },
];

// Awards data
const awards = [
  { year: '2545', title: 'รางวัลน้ำผึ้งคุณภาพดีเด่น', organization: 'กระทรวงเกษตรและสหกรณ์' },
  { year: '2548', title: 'รางวัล OTOP 5 ดาว', organization: 'กรมการพัฒนาชุมชน' },
  { year: '2552', title: 'ผู้ประกอบการดีเด่น', organization: 'สภาอุตสาหกรรม' },
  { year: '2555', title: 'มาตรฐาน GMP', organization: 'สำนักงานคณะกรรมการอาหารและยา' },
  { year: '2558', title: 'รางวัลผลิตภัณฑ์เกษตรอินทรีย์', organization: 'กระทรวงเกษตรและสหกรณ์' },
  { year: '2563', title: 'รางวัลวิสาหกิจชุมชนดีเด่น', organization: 'กรมการพัฒนาชุมชน' },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#f2b530] to-[#c68d00] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586616780827-13166a8d449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGZhcm0lMjBiZWVrZWVwaW5nfGVufDF8fHx8MTc2NTM3NTYzMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Honey Farm"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full max-w-[1422px] mx-auto px-8 flex items-center">
          <div className="text-white">
            <h1 className="mb-4">ประวัติและรางวัล</h1>
            <p className="text-xl">30 ปี แห่งความมุ่งมั่นและคุณภาพ</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">เกี่ยวกับเรา</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#5b5b5b] leading-relaxed mb-4">
                ร้านน้ำผึ้งทวีโชค เริ่มต้นจากความรักในธรรมชาติและความตั้งใจที่จะนำเสนอน้ำผึ้งคุณภาพดีให้กับผู้บริโภค
                เราเริ่มเลี้ยงผึ้งมาตั้งแต่ปี พ.ศ. 2536 ด้วยประสบการณ์และความชำนาญกว่า 30 ปี
              </p>
              <p className="text-[#5b5b5b] leading-relaxed mb-4">
                เรามุ่งมั่นในการผลิตน้ำผึ้งคุณภาพสูง ปลอดสารเคมี ผ่านกระบวนการที่ได้มาตรฐาน
                พร้อมทั้งเปิดพื้นที่ให้เป็นแหล่งเรียนรู้เรื่องผึ้งและผลิตภัณฑ์จากผึ้ง
              </p>
              <p className="text-[#5b5b5b] leading-relaxed">
                วันนี้ เราภูมิใจที่ได้รับความไว้วางใจจากลูกค้ามากมาย และพร้อมที่จะพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น
                เพื่อสุขภาพที่ดีของทุกคนในครอบครัว
              </p>
            </div>
            <div className="bg-[#999999] h-[400px] rounded-[20px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586616780827-13166a8d449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGZhcm0lMjBiZWVrZWVwaW5nfGVufDF8fHx8MTc2NTM3NTYzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beekeeping"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">ค่านิยมหลัก</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[20px] text-center shadow-lg">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black mb-2">คุณภาพ</h3>
              <p className="text-[#5b5b5b] text-sm">
                มุ่งมั่นผลิตน้ำผึ้งคุณภาพสูงสุด
              </p>
            </div>

            <div className="bg-white p-8 rounded-[20px] text-center shadow-lg">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black mb-2">ความซื่อสัตย์</h3>
              <p className="text-[#5b5b5b] text-sm">
                โปร่งใสในทุกกระบวนการ
              </p>
            </div>

            <div className="bg-white p-8 rounded-[20px] text-center shadow-lg">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black mb-2">ลูกค้าคือศูนย์กลาง</h3>
              <p className="text-[#5b5b5b] text-sm">
                ใส่ใจทุกความต้องการ
              </p>
            </div>

            <div className="bg-white p-8 rounded-[20px] text-center shadow-lg">
              <div className="w-16 h-16 bg-[#f2b530] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black mb-2">นวัตกรรม</h3>
              <p className="text-[#5b5b5b] text-sm">
                พัฒนาอย่างไม่หยุดยั้ง
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-black mb-8 text-center">เส้นทางแห่งความสำเร็จ</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#f2b530] -translate-x-1/2 hidden lg:block"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-[20px] shadow-lg inline-block">
                      <div className="text-[#f2b530] mb-2">พ.ศ. {item.year}</div>
                      <p className="text-[#5b5b5b]">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-[#f2b530] rounded-full border-4 border-white shadow-lg flex-shrink-0 hidden lg:block"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <h2 className="text-black mb-8 text-center">รางวัลและความสำเร็จ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f2b530] rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-[#f2b530] text-sm mb-1">พ.ศ. {award.year}</div>
                    <h3 className="text-black text-sm mb-1">{award.title}</h3>
                    <p className="text-[#898989] text-xs">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
