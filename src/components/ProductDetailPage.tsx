import { ChevronLeft, ZoomIn, X } from 'lucide-react';
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
  onNavigate: (page: string, id?: string) => void;
}

// Mock product details
const productDetails: Record<string, any> = {
  '1': {
    id: '1',
    name: 'น้ำผึ้งดอกลิ้นจี่',
    priceMin: 30,
    priceMax: 250,
    category: 'น้ำผึ้ง',
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610542',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610535',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610587',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610548',
    fullDescription: `น้ำผึ้งเกสรดอกมะกอกน้ำป่า จากแหล่งธรรมชาติในจังหวัดเชียงรายมีรสหวานอ่อน หอมละมุน หวานนุ่ม ไม่แหลม และหวานน้อยกว่าน้ำผึ้งทั่วไปเหมาะสำหรับผู้ที่ไม่ชอบรสหวานจัด และผู้รักสุขภาพ`,
    features: [
      'น้ำผึ้งแท้จากเกสรดอกมะกอกน้ำป่า',
      'แหล่งผลิตจากธรรมชาติในจังหวัดเชียงราย',
      'รสหวานอ่อน หวานนุ่ม ไม่แสบคอ',
      'ปลอดสารเคมี ปลอดภัยต่อการบริโภค',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610609',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610591',
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
    name: 'น้ำผึ้งสี่สหาย',
    description: '',
    priceMin: 150,
    priceMax: 150,
    category: 'น้ำผึ้ง',
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610617',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610624',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610545',
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
    lineUrl: 'https://shop.line.me/@088zzpdm/product/1007610601',
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
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
    }, 10000);
    return () => clearInterval(interval);
  }, [product.images]);

  const handleLineContact = () => {
    if (product.lineUrl) {
      window.open(product.lineUrl, '_blank');
    } else {
      window.open('https://shop.line.me/@088zzpdm', '_blank');
    }
  };

  const handleFacebookContact = () => {
    window.open('https://www.facebook.com/Thaweechokebees/?locale=th_TH', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      <div className="max-w-[1422px] mx-auto px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center gap-2 text-[#5b5b5b] hover:text-[#f2b530] mb-6 transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>กลับไปหน้าสินค้า</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="flex flex-col items-center">
            {/* รูปใหญ่ */}
            <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-[20px] mb-4 bg-white mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {product.images.map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name}-${index}`}
                    className="w-full h-full object-contain flex-shrink-0 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setLightboxOpen(true)}
                  />
                ))}
              </div>

              {/* ปุ่มซ้าย-ขวา */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white w-12 h-12 text-2xl shadow-lg rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white w-12 h-12 text-2xl shadow-lg rounded-full hover:bg-black/60 active:scale-95 transition-all duration-300"
              >
                ›
              </button>

              {/* ปุ่ม Zoom */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#5b5b5b] p-2 rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                title="ดูภาพขนาดใหญ่"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {product.images.length}
              </div>
            </div>

            {/* รูปเล็ก */}
            <div className="grid grid-cols-4 gap-3 w-full max-w-[420px]">
              {product.images.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedImage(img);
                    setCurrentIndex(index);
                  }}
                  className={`aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedImage === img 
                      ? "ring-2 ring-[#f2b530] shadow-lg scale-105" 
                      : "hover:ring-2 hover:ring-[#f2b530]/50 hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name}-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category */}
            <div className="mb-4">
              <div className="inline-block px-4 py-1 bg-[#f2b530]/20 text-[#f2b530] rounded-full text-sm">
                {product.category}
              </div>
            </div>

            <h1 className="text-black mb-4">{product.name}</h1>
            <p className="text-[#5b5b5b] mb-6 leading-relaxed">{product.fullDescription}</p>

            {/* Price */}
            <div className="mb-6 p-4 bg-gradient-to-r from-[#f2b530]/10 to-transparent rounded-xl border-l-4 border-[#f2b530]">
              <div className="text-[#898989] text-sm mb-2">ราคา</div>
              <div className="text-[#f2b530] text-3xl font-bold">
                {product.priceMin === product.priceMax
                  ? `${product.priceMin} ฿`
                  : `${product.priceMin} - ${product.priceMax} ฿`}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-black mb-3 font-medium">จุดเด่นสินค้า</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2 text-[#5b5b5b] transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-[#f2b530] mt-1 text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4 mb-8">
              <div className="text-black mb-2 font-medium">ติดต่อสั่งซื้อ</div>
              
              <button
                onClick={handleLineContact}
                className="relative w-full bg-gradient-to-r from-[#00B900] to-[#00A000] hover:from-[#00A000] hover:to-[#009000] text-white py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95 overflow-hidden group"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <img src={imgLine} alt="Line" className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <span className="font-medium text-lg relative z-10">สั่งซื้อผ่าน Line</span>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-[20px] animate-pulse-slow opacity-0 group-hover:opacity-20 bg-white"></div>
              </button>

              <button
                onClick={handleFacebookContact}
                className="relative w-full bg-gradient-to-r from-[#1877F2] to-[#0d6efd] hover:from-[#0d6efd] hover:to-[#0a58ca] text-white py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 active:scale-95 overflow-hidden group"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <img src={imgFacebook} alt="Facebook" className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <span className="font-medium text-lg relative z-10">สั่งซื้อผ่าน Facebook</span>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-[20px] animate-pulse-slow opacity-0 group-hover:opacity-20 bg-white"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-12">
          <h2 className="text-black mb-6 text-2xl font-bold">รายละเอียดสินค้า</h2>
          <div className="bg-white rounded-[20px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-[#898989] w-1/3 font-medium">{key}</td>
                    <td className="py-4 text-[#5b5b5b]">{value as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-black mb-6 text-2xl font-bold">สินค้าอื่นๆ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.slice(0, 4).map((item: any) => (
              <div
                key={item.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onNavigate("product-detail", item.id);
                }}
                className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2"
              >
                <div className="h-[200px] bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-black text-center text-sm mb-2 line-clamp-2 min-h-[40px]">
                    {item.name}
                  </h3>

                  <p className="text-[#f2b530] text-center font-bold">
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#f2b530] transition-colors z-10 p-2 rounded-full hover:bg-white/10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />

            {/* Navigation ใน Lightbox */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="w-8 h-8 rotate-180" />
                </button>
              </>
            )}

            {/* Thumbnails ใน Lightbox */}
            <div className="flex gap-2 justify-center mt-6 max-w-2xl mx-auto overflow-x-auto pb-2">
              {product.images.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                    setSelectedImage(img);
                  }}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedImage === img
                      ? 'ring-4 ring-[#f2b530] opacity-100 scale-110'
                      : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out forwards;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        /* Ripple effect on click */
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        button:active::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}