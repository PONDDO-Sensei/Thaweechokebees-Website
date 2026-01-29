import { ChevronLeft, Share2, Heart, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from "react";
import { useMemo } from "react";
import imgFacebook from "figma:asset/1246e26b2e96a420d7d7cbdd26dc70ecc5f6f20b.png";
import imgLine from "figma:asset/ee94cf026fc403e8421bd64413a8a436652ad5f0.png";
import h1 from "@/assets/image/pro2/01.jpg";
import h11 from "@/assets/image/pro2/011.jpg";
import h12 from "@/assets/image/pro2/012.jpg";
import h13 from "@/assets/image/pro2/013.jpg";
import h14 from "@/assets/image/pro2/014.jpg";

import h2 from "@/assets/image/pro/02.jpg";
import h20 from "@/assets/image/pro2/020.jpg";
import h21 from "@/assets/image/pro2/021.jpg";
import h22 from "@/assets/image/pro2/022.jpg";
import h23 from "@/assets/image/pro2/023.jpg";

import h3 from "@/assets/image/home/03.jpg";

import h4 from "@/assets/image/pro2/040.jpg";
import h41 from "@/assets/image/pro2/041.jpg";
import h42 from "@/assets/image/pro2/042.jpg";
import h43 from "@/assets/image/pro2/043.jpg";

import h5 from "@/assets/image/pro2/05.jpg";
import h51 from "@/assets/image/pro2/055.jpg";
import h52 from "@/assets/image/pro2/052.jpg";
import h53 from "@/assets/image/pro2/053.jpg";

import h6 from  "@/assets/image/pro/06.jpg";
import h61 from "@/assets/image/pro2/061.jpg";

import h7 from  "@/assets/image/pro/07.jpg";

import h8 from  "@/assets/image/pro/08.jpg";

import h9 from  "@/assets/image/pro2/090.jpg";
import h91 from  "@/assets/image/pro2/091.jpg";
import h92 from  "@/assets/image/pro2/092.jpg";
import h93 from  "@/assets/image/pro2/093.jpg";

import h10 from  "@/assets/image/pro/10.jpg";





interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string) => void;
}

// Mock product details
const productDetails: Record<string, any> = {
  '1': {
    id: '1',
    name: 'น้ำผึ้งดอกลิ้นจี่',
    priceMin: 30,
priceMax: 250,
    category: 'น้ำผึ้ง',
    fullDescription: `น้ำผึ้งชนิดผลิตมาจากเกสรดอกลิ้นจี่ ซึ่งมีความแตกต่างทางด้านกลิ่นหอมเป็นเอกลักษณ์เฉพาะดอกลิ้นจี่ รสหวานน้อยกว่าน้ำผึ้งชนิดอื่น ๆ`,
    features: [
    'น้ำผึ้งแท้จากเกสรดอกลิ้นจี่',
    'กลิ่นหอมเป็นเอกลักษณ์เฉพาะ',
    'รสหวานนุ่ม กลมกล่อม ไม่แสบคอ',
    'ปลอดสารเคมี ปลอดภัยต่อการบริโภค',
    'เหมาะสำหรับทุกเพศทุกวัย'
    ],
    specifications: {
      'ขนาด': '1000, 500, 250, 140 กรัม',
  'บรรจุภัณฑ์': 'ขวดพลาสติก',
  'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
  'มาตรฐาน': 'ได้รับการรับรอง อย.'
    },
    images: [h1,h11,h12,h13,h14],
  },
  '2': {
    id: '2',
    name: 'น้ำผึ้งเดือนห้า',
    description: 'น้ำผึ้ง',
    priceMin: 30,
priceMax: 250,

    category: 'น้ำผึ้ง',
    fullDescription: `น้ำผึ้งเดือนห้า.น้ำผึ้งชนิดผลิตมาจากเกสรดอกไม้ป่านานาพรรณทั่วไป มีความหอมเป็นธรรมชาติจากดอกไม้ประจำท้องถิ่นของจังหวัดเชียงราย รสหวานปานกลางซึ่งมาจากดอกไม้หลากหลายสายพันธุ์`,
    features: [
      'น้ำผึ้งแท้จากเกสรดอกไม้ป่านานาพรรณ',
    'เก็บเกี่ยวในช่วงเดือนห้า ซึ่งเป็นฤดูกาลคุณภาพ',
    'กลิ่นหอมธรรมชาติจากดอกไม้ท้องถิ่น',
    'รสหวานปานกลาง กลมกล่อม ไม่แสบคอ',
    'ปลอดสารเคมี ปลอดภัยต่อการบริโภค'
    ],
    specifications: {
      'ขนาด': '1000, 500, 250, 140 กรัม',
  'บรรจุภัณฑ์': 'ขวดพลาสติก',
  'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
  'มาตรฐาน': 'ได้รับการรับรอง อย.'
    },
 images: [h2,h20,h21,h22,h23],
  },
  '3': {
    id: '3',
    name: 'ครีมนมผึ้งคอลลาเจนพลัส',
    description: '',
    priceMin: 100,
priceMax: 350,

    category: 'สินค้าแปรรูป',
    fullDescription: `ใช้สำหรับทาผิวหน้าได้ทั้ง เช้า - เย็น มีส่วนผสมของนมผึ้งซึ่งมีคลอลาเจนจากธรรม และสมุนไพรธรรมชาติสำหรับผิวแพ้ง่าย`,
    features: [
      'ช่วยบำรุงผิวให้ชุ่มชื้น',
      'ผิวดูเนียนนุ่ม สุขภาพดี',
      'ซึมง่าย ไม่เหนียวเหนอะหนะ',
      'เหมาะสำหรับผิวแห้ง – ผิวแพ้ง่าย',
      'ใช้ได้ทั้งเช้าและเย็น'
    ],
    specifications: {
     'ขนาด': '20, 50 กรัม',
  'บรรจุภัณฑ์': 'กระปุกพลาสติก / กระปุกแก้ว',
  'อายุการเก็บ': '2 ปี',
  'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด'
    },
 images: [h3],
  },

 '4': {
    id: '4',
    name: 'น้ำผึ้งเกสรดอกมะกอกน้ำป่า',
    description: '',
    priceMin: 30,
priceMax: 250,

    category: 'น้ำผึ้ง',
    fullDescription: `น้ำผึ้งเกสรดอกมะกอกน้ำป่า จากแหล่งธรรมชาติในจังหวัดเชียงรายมีรสหวานอ่อน หอมละมุน หวานนุ่ม ไม่แหลม และหวานน้อยกว่าน้ำผึ้งทั่วไปเหมาะสำหรับผู้ที่ไม่ชอบรสหวานจัด และผู้รักสุขภาพ`,
    features: [
        'น้ำผึ้งแท้จากเกสรดอกมะกอกน้ำป่า',
      'แหล่งผลิตจากธรรมชาติในจังหวัดเชียงราย',
      'รสหวานอ่อน หวานนุ่ม ไม่แสบคอ',
    '   ปลอดสารเคมี ปลอดภัยต่อการบริโภค',

    ],
    specifications: {
      'ขนาด': '1000,500,250,140 กรัม',
      'บรรจุภัณฑ์': 'ขวดพลาสติก',
      'อายุการเก็บ': '2 ปี',
      'การเก็บรักษา': 'เก็บในที่แห้ง ไม่โดนแสงแดด',
      'มาตรฐาน': 'ได้รับการรับรอง อย.'
    },
 images: [h4,h41,h42,h43],
  },

  '5': {
    id: '5',
    name: 'ช็อคกอแลตน้ำผึ้งเกสรดอกลิ้นจี่',
    description: '_-----',
    priceMin: 120,
priceMax: 120,

    category: 'สินค้าแปรรูป',
    fullDescription: `ช็อกโกแลตผสมน้ำผึ้งเกสรดอกลิ้นจี่ให้รสหวานนุ่ม กลมกล่อม ไม่หวานจัดเหมาะสำหรับรับประทานเป็นของว่างช่วยเพิ่มพลังงาน และผ่อนคลายระหว่างวัน`,
    features: [
       'ผลิตจากช็อกโกแลตคุณภาพ ผสมน้ำผึ้งแท้',
    'รสหวานปานกลาง กลมกล่อม',
    'เหมาะสำหรับรับประทานเป็นของว่าง',
    'ได้รับการรับรองคุณภาพ'
    ],
    specifications: {
      'ขนาด': '50 กรัม',
    'บรรจุภัณฑ์': 'กล่องกระดาษ',
    'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงความร้อนและแสงแดด',
    'อายุการเก็บ': '6 เดือน',
    'มาตรฐาน': 'ได้รับการรับรอง อย.'
  },
 images: [h5,h51,h53,h52],
  },

   '6': {
    id: '6',
    name: 'โลชั่นนมผึ้ง',
    description: '',
    priceMin: 120,
priceMax: 120,

    category: 'สินค้าแปรรูป',
    fullDescription: `โลชั่นนมผึ้ง สำหรับบำรุงผิวกาย
ช่วยเพิ่มความชุ่มชื้นให้ผิวเนียนนุ่ม
ซึมซาบเร็ว ไม่เหนียวเหนอะหนะ
สามารถใช้ทาได้ทุกวัน และทุกเวลาที่ต้องการ`,
    features: [
       'ผสมนมผึ้ง ช่วยบำรุงผิวให้ชุ่มชื้น',
    'เนื้อโลชั่นบางเบา ซึมง่าย',
    'ไม่เหนียวเหนอะหนะ',
    'เหมาะสำหรับทุกสภาพผิว',
    'ใช้ได้ทุกวัน'
    ],
    specifications: {
      'ขนาด': '200 กรัม',
    'บรรจุภัณฑ์': 'ขวดพลาสติก',
    'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
    'อายุการเก็บ': '2 ปี (ก่อนเปิดใช้)',
    'อายุการใช้งานหลังเปิด': '6–12 เดือน',
  },
 images: [h6,h61],
  },

   '7': {
    id: '7',
    name: 'น้ำผึ้งสีสหาย',
    description: '',
    priceMin: 150,
priceMax: 150,

    category: 'น้ำผึ้ง',
    fullDescription: `น้ำผึ้งสี่สหาย เซ็ตน้ำผึ้งแท้รวม 4 ชนิด
บรรจุขวดละ 140 กรัม จำนวน 4 ขวด
ประกอบด้วย
- น้ำผึ้งเดือนห้า
- น้ำผึ้งเกสรดอกลิ้นจี่
- น้ำผึ้งเกสรดอกลำไย
- น้ำผึ้งเกสรดอกมะกอกน้ำป่า
เหมาะสำหรับผู้ที่ต้องการลิ้มรสน้ำผึ้งหลากหลายชนิด
ในชุดเดียว`,
    features: [
        'เซ็ตน้ำผึ้งแท้รวม 4 ชนิด',
    'ผลิตจากแหล่งธรรมชาติในจังหวัดเชียงราย',
    'รสชาติแตกต่างกันในแต่ละชนิด',
    'เหมาะสำหรับเป็นของฝากหรือทดลองชิม',

    ],
    specifications: {
      'ขนาด': '140 กรัม x 4 ขวด',
    'บรรจุภัณฑ์': 'ขวดพลาสติก',
    'อายุการเก็บ': '2 ปี',
    'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
    'มาตรฐาน': 'ได้รับการรับรอง อย.'
    },
 images: [h7],
  },

  '8': {
    id: '8',
    name: 'โพรโพลิสเมาท์สเปรย์',
    description: '',
    priceMin: 180,
priceMax: 180,

    category: 'สินค้าแปรรูป',
    fullDescription: `โพรโพลิสเมาท์สเปรย์ สำหรับดูแลช่องปากและลำคอ
ผลิตจากโพรโพลิสธรรมชาติ
ไม่ใส่สารกันเสีย ไม่แต่งสีและกลิ่น
ปราศจากน้ำตาล และไม่มีส่วนผสมของยาปฏิชีวนะ
เหมาะสำหรับพกพา ใช้งานสะดวก`,
    features: [
        'ผสมโพรโพลิสจากธรรมชาติ',
    'ใช้สำหรับดูแลช่องปากและลำคอ',
    'ไม่ใส่สารกันเสีย ไม่แต่งสีและกลิ่น',
    'ปราศจากน้ำตาล',
    'ใช้งานง่าย พกพาสะดวก'
    ],
    specifications: {
      'ขนาด': '15 มล.',
    'บรรจุภัณฑ์': 'ขวดสเปรย์พลาสติก',
    'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
    'อายุการเก็บ': '2 ปี (ก่อนเปิดใช้)',
    'อายุการใช้งานหลังเปิด': '6 เดือน',
    'มาตรฐาน': 'ได้รับการรับรอง อย.'
  },
 images: [h8],
  },

  '9': {
    id: '9',
    name: 'น้ำผึ้งเกสรดอกลำไย',
    description: 'น้ำผึ้ง',
    priceMin: 30,
priceMax: 250,

    category: 'น้ำผึ้ง',
    fullDescription: `น้ำผึ้งแท้จากเกสรดอกลำไย
มีเอกลักษณ์ด้านกลิ่นหอมเฉพาะของดอกลำไย
ให้รสหวานชัดเจน เข้มข้น
หวานมากกว่าน้ำผึ้งบางชนิด
เหมาะสำหรับผู้ที่ชื่นชอบรสหวาน และการนำไปปรุงอาหารหรือเครื่องดื่ม`,
    features: [
      'น้ำผึ้งแท้จากเกสรดอกลำไย',
    'กลิ่นหอมเฉพาะตัวของดอกลำไย',
    'รสหวานเข้มข้น หวานชัด',
    'เหมาะสำหรับใช้ชงเครื่องดื่มหรือปรุงอาหาร',
    'ปลอดสารเคมี ปลอดภัยต่อการบริโภค'
    ],
    specifications: {
      'ขนาด': '1000, 500, 250, 140 กรัม',
  'บรรจุภัณฑ์': 'ขวดพลาสติก',
  'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
  'มาตรฐาน': 'ได้รับการรับรอง อย.'
    },
 images: [h9,h91,h92,h93],
  },

  '10': {
    id: '10',
    name: 'สบู่นมผึ้ง',
    description: '',
    priceMin: 80,
priceMax: 80,

    category: 'สินค้าแปรรูป',
    fullDescription: `สบู่นมผึ้ง สำหรับทำความสะอาดผิวหน้าและผิวกาย
ผสมนมผึ้งและสารสกัดจากขมิ้นชัน
ช่วยทำความสะอาดผิวอย่างอ่อนโยน
เหมาะสำหรับผู้ที่มีผิวแพ้ง่าย
สามารถใช้ได้ทั้งเด็กและผู้ใหญ่`,
    features: [
        'ผสมนมผึ้งและสารสกัดจากขมิ้นชัน',
    'ทำความสะอาดผิวอย่างอ่อนโยน',
    'ไม่ทำให้ผิวแห้งตึง',
    'เหมาะสำหรับผิวแพ้ง่าย',
    'ใช้ได้ทั้งผิวหน้าและผิวกาย'
    ],
    specifications: {
      'ขนาด': '90 กรัม',
    'บรรจุภัณฑ์': 'กล่องกระดาษ',
    'การเก็บรักษา': 'เก็บในที่แห้ง หลีกเลี่ยงแสงแดด',
    'อายุการเก็บ': '2 ปี (ก่อนเปิดใช้)',
    'อายุการใช้งานหลังเปิด': '12 เดือน'
  },
 images: [h10],
  },


  };
  // Add more products as needed


export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const product = productDetails[productId] || productDetails['1'];
  const relatedProducts = useMemo(() => {
    return Object.values(productDetails)
      .filter((p: any) => p.id !== product.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, [product.id]);

const [currentIndex, setCurrentIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState(product.images[0]);
const prevImage = () => {
  const newIndex =
    currentIndex === 0
      ? product.images.length - 1
      : currentIndex - 1;

      
  setCurrentIndex(newIndex);
  setSelectedImage(product.images[newIndex]);
};

const nextImage = () => {
  const newIndex =
    currentIndex === product.images.length - 1
      ? 0
      : currentIndex + 1;

  setCurrentIndex(newIndex);
  setSelectedImage(product.images[newIndex]);
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => {
      const next =
        prev === product.images.length - 1 ? 0 : prev + 1;

      setSelectedImage(product.images[next]);
      return next;
    });
  }, 10000); // 10 วิต่อรูป

  return () => clearInterval(interval);
}, [product.images]);


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
<div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-[20px] mb-4 bg-white mx-auto">
  <div
    className="flex h-full transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {product.images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`${product.name}-${index}`}
        className="w-full h-full object-contain flex-shrink-0"
      />
    ))}
  </div>

  {/* ปุ่มซ้าย */}
  <button
    onClick={prevImage}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 text-2xl shadow-lg rounded-full hover:bg-black/60 active:scale-95 transition"
  >
    ‹
  </button>

  {/* ปุ่มขวา */}
  <button
    onClick={nextImage}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white w-12 h-12 text-2xl shadow-lg rounded-full hover:bg-black/60 active:scale-95 transition"
  >
    ›
  </button>
</div>


  {/* รูปเล็ก */}
 <div className="grid grid-cols-4 gap-3 w-full max-w-[20px]">
    {product.images.map((img: string, index: number) => (
      <div
        key={index}
onClick={() => {
  setSelectedImage(img);
  setCurrentIndex(index);
}}

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
              <div className="text-[#f2b530] text-xl font-medium">
  {product.priceMin === product.priceMax
    ? `${product.priceMin} ฿`
    : `${product.priceMin} - ${product.priceMax} ฿`}
</div>

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
          <h2 className="text-black mb-6">สินค้าอื่นๆ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {relatedProducts.slice(0, 4).map((item: any) => (
  <div
  key={item.id}
  onClick={() => onNavigate("product-detail", item.id)}
  className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
>
    <div className="h-[200px] bg-white flex items-center justify-center">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-full h-full object-contain"
      />
    </div>

    <div className="p-4">
      <h3 className="text-black text-center text-sm mb-2">
        {item.name}
      </h3>

      <p className="text-[#f2b530] text-center">
        {item.priceMin === item.priceMax
          ? `${item.priceMin} ฿`
          : `${item.priceMin} - ${item.priceMax} ฿`}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
}
