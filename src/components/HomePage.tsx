import imgHero from "figma:asset/8801ce45fa951cce6a9e6d1e2b15a8abf5650a5f.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Mock products data
const featuredProducts = [
  {
    id: '1',
    name: 'น้ำผึ้งดอกไม้ป่า',
    description: 'น้ำผึ้งจากดอกไม้ป่าธรรมชาติ',
    price: 350,
    image: null
  },
  {
    id: '2',
    name: 'น้ำผึ้งลำไย',
    description: 'น้ำผึ้งจากดอกลำไยแท้',
    price: 400,
    image: null
  },
  {
    id: '3',
    name: 'น้ำผึ้งลิ้นจี่',
    description: 'น้ำผึ้งจากดอกลิ้นจี่คุณภาพ',
    price: 380,
    image: null
  },
  {
    id: '4',
    name: 'น้ำผึ้งมะนาว',
    description: 'น้ำผึ้งจากดอกมะนาวสด',
    price: 320,
    image: null
  },
  {
    id: '5',
    name: 'น้ำผึ้งทานตะวัน',
    description: 'น้ำผึ้งจากดอกทานตะวัน',
    price: 300,
    image: null
  },
  {
    id: '6',
    name: 'น้ำผึ้งป่าภูเขา',
    description: 'น้ำผึ้งป่าคุณภาพพรีเมี่ยม',
    price: 450,
    image: null
  },
  {
    id: '7',
    name: 'น้ำผึ้งสมุนไพร',
    description: 'น้ำผึ้งผสมสมุนไพร',
    price: 420,
    image: null
  },
  {
    id: '8',
    name: 'น้ำผึ้งออแกนิค',
    description: 'น้ำผึ้งออแกนิคแท้ 100%',
    price: 500,
    image: null
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Section */}
      <section className="relative h-[554px] w-full max-w-[1422px] mx-auto overflow-hidden">
        <img 
          src={imgHero} 
          alt="น้ำผึ้งทวีโชค" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* About Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#999999] mb-4">
              ด้วยประสบการณ์มากกว่า 30 ปี
            </div>
            <h2 className="text-black mb-6">
              เส้นทางแห่งคุณภาพกว่า 30 ปี
            </h2>
            <p className="text-[#5b5b5b] leading-relaxed">
              เราเริ่มเลี้ยงผึ้งมาตั้งแต่ปี 2536 จนถึงปัจจุบัน พร้อมเปิดพื้นที่ให้เป็นแหล่งเรียนรู้เรื่องผึ้ง
              รวมถึงให้บริการจัดกระเช้าและจำหน่ายผลิตภัณฑ์ชุมชนครอบคลุมทุกอำเภอ
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#d9d9d9] h-[173px] rounded-[40px]"></div>
            <div className="bg-[#d9d9d9] h-[173px] rounded-[40px]"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-black">สินค้าและผลิตภัณฑ์</h2>
          <button
            onClick={() => onNavigate('products')}
            className="bg-[#f6b82d] hover:bg-[#f2b530] text-white px-6 py-3 rounded-[20px] transition-colors"
          >
            สินค้าทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#999999] h-[300px]"></div>
              <div className="p-6">
                <h3 className="text-black text-center mb-2">{product.name}</h3>
                <p className="text-[#a6a6a6] text-sm text-center mb-4">{product.description}</p>
                <p className="text-black text-center mb-4">ราคา {product.price} ฿</p>
                <button
                  onClick={() => onNavigate('product-detail', product.id)}
                  className="w-full bg-[#f2b530] hover:bg-[#f6b82d] text-white py-3 rounded-[20px] transition-colors"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
