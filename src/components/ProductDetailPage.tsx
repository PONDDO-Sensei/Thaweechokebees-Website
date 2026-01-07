import { ChevronLeft, Share2, Heart, ShoppingCart } from 'lucide-react';
import { useState } from "react";
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";
import h1 from "../assets/image/h01.jpg";
import h2 from "../assets/image/h02.jpg";
import ch1 from "../assets/image/ch1.jpg";
import ch2 from "../assets/image/ch2.jpg";
import ch3 from "../assets/image/ch3.jpg";
import h4 from "../assets/image/h04.jpg";
import h5 from "../assets/image/h05.jpg";
import h6 from "../assets/image/h06.jpg";
import h7 from "../assets/image/h07.jpg";
import h8 from "../assets/image/h08.jpg";
import h9 from "../assets/image/h09.jpg";


interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

// Mock product details
const productDetails: Record<string, any> = {
  '1': {
    id: '1',
    name: 'น้ำผึ้งเดือนห้า',
    description: 'น้ำผึ้งจากดอกไม้ป่าธรรมชาติ',
    price: 350,
    category: '-----',
    fullDescription: `น้ำผึ้งดอกไม้ป่าคุณภาพพรีเมี่ยม เก็บจากดอกไม้ป่าธรรมชาติที่ปลอดสารเคมี มีรสชาติหวานกลมกล่อม เหมาะสำหรับรับประทานเพื่อสุขภาพ`,
    features: [
      'น้ำผึ้งแท้ 100% ไม่มีการผสม',
      'ได้รับการรับรองมาตรฐาน อย.',
      'ปลอดสารเคมี ปลอดภัย',
      'รสชาติหวานกลมกล่อม',
      'บรรจุขวดแก้วคุณภาพสูง'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
    images: [h1],
  },
  '2': {
    id: '2',
    name: 'น้ำผึ้งดอกลิ้นจี่',
    description: '-----',
    price: 400,
    category: '----',
    fullDescription: `น้ำผึ้งลำไยคุณภาพเกรดพรีเมี่ยม เก็บจากสวนลำไยในภาคเหนือ มีกลิ่นหอมของดอกลำไย รสชาติหวานมัน ช่วยบำรุงร่างกาย`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h2],
  },
  '3': {
    id: '2',
    name: 'ช็อกโกแลตน้ำผึ้ง',
    description: 'น้ำผึ้งจากดอกลำไยแท้',
    price: 400,
    category: '-----',
    fullDescription: `--------------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [ch2,ch1,ch3],
  },

 '4': {
    id: '4',
    name: 'ข้าวสามสี',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h4],
  },

  '5': {
    id: '5',
    name: 'น้ำผึ้งสามเกลอ',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h5],
  },

   '6': {
    id: '6',
    name: '--------',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h6],
  },

  '7': {
    id: '7',
    name: '--------',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h7],
  },

  '8': {
    id: '8',
    name: '--------',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h8],
  },

  '9': {
    id: '9',
    name: '--------',
    description: '_-----',
    price: 400,
    category: '-----',
    fullDescription: `---------`,
    features: [
      'น้ำผึ้งจากดอกลำไยแท้',
      'กลิ่นหอมของดอกลำไย',
      'ได้รับการรับรองคุณภาพ',
      'รสชาติหวานมัน',
      'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '500 กรัม',
      'บรรจุภัณฑ์': 'ขวดแก้ว',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด'
    },
 images: [h9],
  },

  };
  // Add more products as needed


export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = productDetails[productId] || productDetails['1'];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);


  const handleLineContact = () => {
    window.open('https://line.me/ti/p/~@example', '_blank');
  };

  const handleFacebookContact = () => {
    window.open('https://facebook.com/namphuengthaweechoke', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      <div className="max-w-[1422px] mx-auto px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center gap-2 text-[#5b5b5b] hover:text-[#f2b530] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>กลับไปหน้าสินค้า</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          
{/* Product Images */}
<div className="flex flex-col items-center">
  {/* รูปใหญ่ */}
<div className="w-full max-w-[420px] aspect-square overflow-hidden rounded-[20px] mb-4 bg-white mx-auto">
    <img
      src={selectedImage}
      alt={product.name}
      className="w-full h-full object-contain"
    />
  </div>

  {/* รูปเล็ก */}
  <div className="grid grid-cols-4 gap-3 w-full max-w-[420px]">
    {product.images.map((img: string, index: number) => (
      <div
        key={index}
        onClick={() => setSelectedImage(img)}
        className={`aspect-square overflow-hidden rounded-lg cursor-pointer
          ${selectedImage === img ? "ring-2 ring-[#f2b530]" : ""}`}
      >
        <img
          src={img}
          alt={`${product.name}-${index}`}
          className="w-full h-full object-cover hover:opacity-80"
        />
      </div>
    ))}
  </div>
</div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-4 py-1 bg-[#f2b530]/20 text-[#f2b530] rounded-full text-sm mb-4">
              {product.category}
            </div>
            <h1 className="text-black mb-4">{product.name}</h1>
            <p className="text-[#5b5b5b] mb-6">{product.fullDescription}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="text-[#898989] text-sm mb-2">ราคา</div>
              <div className="text-[#f2b530]">{product.price} ฿</div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-black mb-3">จุดเด่นสินค้า</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-[#5b5b5b]">
                    <span className="text-[#f2b530] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4 mb-8">
              <div className="text-black mb-2">ติดต่อสั่งซื้อ</div>
              
              <button
                onClick={handleLineContact}
                className="w-full bg-[#00B900] hover:bg-[#00A000] text-white py-4 rounded-[20px] flex items-center justify-center gap-3 transition-colors"
              >
                <img src={imgLine} alt="Line" className="w-6 h-6" />
                <span>สั่งซื้อผ่าน Line</span>
              </button>

              <button
                onClick={handleFacebookContact}
                className="w-full bg-[#1877F2] hover:bg-[#0d6efd] text-white py-4 rounded-[20px] flex items-center justify-center gap-3 transition-colors"
              >
                <img src={imgFacebook} alt="Facebook" className="w-6 h-6" />
                <span>สั่งซื้อผ่าน Facebook</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 border-2 border-[#f2b530] text-[#f2b530] hover:bg-[#f2b530] hover:text-white py-3 rounded-[20px] flex items-center justify-center gap-2 transition-colors">
                <Heart className="w-5 h-5" />
                <span>บันทึกสินค้า</span>
              </button>
              <button className="flex-1 bg-[#f2b530] hover:bg-[#f6b82d] text-white py-3 rounded-[20px] flex items-center justify-center gap-2 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>แชร์สินค้า</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-12">
          <h2 className="text-black mb-6">รายละเอียดสินค้า</h2>
          <div className="bg-white rounded-[20px] p-8">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200 last:border-0">
                    <td className="py-4 text-[#898989] w-1/3">{key}</td>
                    <td className="py-4 text-[#5b5b5b]">{value as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-black mb-6">สินค้าที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-[#999999] h-[200px]"></div>
                <div className="p-4">
                  <h3 className="text-black text-center text-sm mb-2">สินค้าที่เกี่ยวข้อง {i}</h3>
                  <p className="text-[#f2b530] text-center">350 ฿</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
