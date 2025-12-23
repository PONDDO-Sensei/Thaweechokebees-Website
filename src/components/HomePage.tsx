import imgHero from "figma:asset/8801ce45fa951cce6a9e6d1e2b15a8abf5650a5f.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// import รูปสินค้า
import lychee from "@/assets/image/001.jpg";
import longan from "@/assets/image/002.jpg";
import wildflower from "@/assets/image/003.jpg";
import lime from "@/assets/image/004.jpg";
import longanSmall from "@/assets/image/005.jpg";
import bearWild from "@/assets/image/หมีเดือนห้า.jpg";
import bearFriends from "@/assets/image/หมีสามเกลอ.jpg";
import bearCocoa from "@/assets/image/หมีโกโก้.jpg";
import bearCocoa1 from "@/assets/image/03.jpg";
import bearCocoa2 from "@/assets/image/04.jpg";

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// --------------------
// Mock products data
// --------------------
const featuredProducts = [
  {
    id: "1",
    name: "น้ำผึ้งเดือนห้า",
    description: "น้ำผึ้งเดือนห้าแท้จากธรรมชาติ",
    price: 350,
    image: wildflower,
  },
  {
    id: "2",
    name: "น้ำผึ้งลำไย",
    description: "น้ำผึ้งจากดอกลำไยแท้",
    price: 400,
    image: longan,
  },
  {
    id: "3",
    name: "น้ำผึ้งลิ้นจี่",
    description: "น้ำผึ้งจากดอกลิ้นจี่คุณภาพ",
    price: 380,
    image: lychee,
  },
  {
    id: "4",
    name: "น้ำผึ้งเดือนห้า (ขวดเล็ก)",
    description: "ขนาดพกพา",
    price: 320,
    image: lime,
  },
  {
    id: "5",
    name: "น้ำผึ้งลำไย (ขวดเล็ก)",
    description: "ขนาดเล็ก เหมาะเป็นของฝาก",
    price: 300,
    image: longanSmall,
  },
  {
    id: "6",
    name: "หมีน้ำผึ้งเดือนห้า",
    description: "ของฝากยอดนิยม",
    price: 450,
    image: bearWild,
  },
  {
    id: "7",
    name: "หมีสามเกลอ",
    description: "เซ็ตพิเศษ",
    price: 420,
    image: bearFriends,
  },
  {
    id: "8",
    name: "หมีโกโก้",
    description: "รสนุ่ม กลมกล่อม",
    price: 500,
    image: bearCocoa,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative h-[554px] w-full max-w-[1422px] mx-auto overflow-hidden">
        <img
          src={imgHero}
          alt="น้ำผึ้งทวีโชค"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* ---------------- About Section ---------------- */}
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
              เราเริ่มเลี้ยงผึ้งมาตั้งแต่ปี 2536 จนถึงปัจจุบัน
              พร้อมเปิดพื้นที่ให้เป็นแหล่งเรียนรู้เรื่องผึ้ง
              รวมถึงให้บริการจัดกระเช้าและจำหน่ายผลิตภัณฑ์ชุมชน
            </p>
          </div>

          {/* รูป 2 ใบ */}
          <div className="grid grid-cols-2 gap-8">
            <div className="h-[173px] rounded-[40px] overflow-hidden">
              <img
                src={bearCocoa1}
                alt="ดอกลิ้นจี่"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[173px] rounded-[40px] overflow-hidden">
              <img
                src={bearCocoa2}
                alt="ดอกลำไย"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Featured Products ---------------- */}
      <section className="max-w-[1422px] mx-auto px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-black">สินค้าและผลิตภัณฑ์</h2>
          <button
            onClick={() => onNavigate("products")}
            className="bg-[#f6b82d] hover:bg-[#f2b530] text-white px-6 py-3 rounded-[20px]"
          >
            สินค้าทั้งหมด
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onNavigate("product-detail", product.id)}
              className="cursor-pointer bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-[300px] object-cover"
                fallback={
                  <div className="bg-[#d9d9d9] w-full h-[300px]" />
                }
              />

              <div className="p-6">
                <h3 className="text-black text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-[#a6a6a6] text-sm text-center mb-4">
                  {product.description}
                </p>
                <p className="text-black text-center font-medium">
                  ราคา {product.price} ฿
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
