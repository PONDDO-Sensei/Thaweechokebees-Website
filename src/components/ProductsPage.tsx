import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import imgHero from "@/assets/image/pro/1111.jpg";
import h1 from "@/assets/image/pro/01.jpg";
import h2 from "@/assets/image/pro/02.jpg";
import h3 from "@/assets/image/pro/03.jpg";
import h4 from "@/assets/image/pro/041.jpg";
import h5 from "@/assets/image/pro/05.jpg";
import h6 from "@/assets/image/pro/06.jpg";
import h7 from "@/assets/image/pro/07.jpg";
import h8 from "@/assets/image/pro/08.jpg";
import h9 from "@/assets/image/pro/09.jpg";
import h10 from "@/assets/image/pro/10.jpg";





interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Mock products data
const allProducts = [
  {
    id: '1',
    name: 'น้ำผึ้งดอกลิ้นจี่',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h1,
    category: 'น้ำผึ้ง',
  },
  {
    id: '2',
    name: 'น้ำผึ้งเดือนห้า',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h2,
    category: 'น้ำผึ้ง',
  },
  {
    id: '3',
    name: 'ครีมนมผึ้งคอลลาเจนพลัส',
    description: 'น้ำหนัก 50,20 กรัม',
    priceMin: 350,
    priceMax: 350,
    image: h3,
    category: 'สินค้าแปรรูป'

  },
  {
    id: '4',
    name: 'น้ำผึ้งเกสรดอกมะกอกน้ำป่า',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h4,
    category: 'น้ำผึ้ง',
  },
  {
    id: '5',
    name: 'ช็อคโกแลตน้ำผึ้งเกสรดอกลิ้นจี่',
    description: 'น้ำหนัก 50 กรัม',
    priceMin: 120,
    priceMax: 120,
    image: h5,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '6',
    name: 'โลชั่นนมผึ้ง',
    description: 'น้ำหนัก 200 กรัม',
    priceMin: 120,
    priceMax: 120,
    image: h6,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '7',
    name: 'น้ำผึ้งสี่สหาย',
    description: 'น้ำหนัก 560 กรัม',
    priceMin: 150,
    priceMax: 150,
    image: h7,
    category: 'น้ำผึ้ง',
  },
  {
    id: '8',
    name: 'โพรโพลิสเมาท์สเปรย์',
    description: 'ขนาด 50 ml',
    priceMin: 180,
    priceMax: 180,
    image: h8,
    category: 'สินค้าแปรรูป'
  },
  {
    id: '9',
    name: 'น้ำผึ้งเกสรดอกลำไย',
    description: 'น้ำหนัก 1000,500,250,140 กรัม',
    priceMin: 30,
    priceMax: 250,
    image: h9,
    category: 'น้ำผึ้ง'
  },
  {
    id: '10',
    name: 'สบู่นมผึ้ง',
    description: 'น้ำหนัก 90 กรัม',
    priceMin: 80,
    priceMax: 80,
    image: h10,
    category: 'สินค้าแปรรูป'
  },
];


const categories = ['ทั้งหมด', 'น้ำผึ้ง','สินค้าแปรรูป'];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const min = minPrice === '' ? 0 : Number(minPrice);
const max = maxPrice === '' ? Infinity : Number(maxPrice);


  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
  selectedCategory === 'ทั้งหมด' ||
  product.category === selectedCategory;
   const matchesPrice =
  product.priceMax >= min && product.priceMin <= max;


    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Hero Banner */}
      <section className="relative h-[300px] w-full max-w-[1422px] mx-auto overflow-hidden">
        <img 
          src={imgHero} 
          alt="สินค้าทั้งหมด" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white">สินค้าและผลิตภัณฑ์</h1>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-[1422px] mx-auto px-8 py-8">
        <div className="bg-[rgba(241,173,6,0.19)] rounded-lg p-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#898989]" />
              <input
                type="text"
                placeholder="ค้นหาสินค้าที่คุณสนใจ"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#f2b530]"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#f1ad06] hover:bg-[#f2b530] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>ตัวกรอง</span>
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm mb-2 text-[#5b5b5b]">หมวดหมู่</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#f2b530] text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm mb-2 text-[#5b5b5b]">
  ช่วงราคา
</label>

<div className="flex gap-4 items-center">
  <input
    type="number"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
    className="w-24 px-3 py-2 border rounded-lg"
    placeholder="ต่ำสุด"
  />

  <span>-</span>

  <input
    type="number"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
    className="w-24 px-3 py-2 border rounded-lg"
    placeholder="สูงสุด"
  />
</div>

                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#5b5b5b]">
          พบสินค้า {filteredProducts.length} รายการ
        </div>

       {/* Products Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src={product.image || h1}
        alt={product.name}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-6">
        <h3 className="text-black text-center mb-2">{product.name}</h3>
        <p className="text-[#a6a6a6] text-sm text-center mb-2">{product.description}</p>
        <p className="text-black text-center mb-4">
  ราคา {product.priceMin === product.priceMax
    ? `${product.priceMin}`
    : `${product.priceMin} - ${product.priceMax}`} ฿
</p>

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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#898989]">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ทั้งหมด');
                setMinPrice('');
setMaxPrice('');

              }}
              className="mt-4 text-[#f2b530] hover:underline"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
