import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import imgHero from '../assets/image/8801ce45fa951cce6a9e6d1e2b15a8abf5650a5f.png';
import image01 from '../assets/image/banner1.png';




interface ProductsPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Mock products data
const allProducts = [
  {  id: '1',name: 'น้ำผึ้งดอกไม้ป่า',description: 'น้ำผึ้งจากดอกไม้ป่าธรรมชาติ',price: 350,category: 'น้ำผึ้งดอกไม้',image: image01, },
  { id: '2', name: 'น้ำผึ้งลำไย', description: 'น้ำผึ้งจากดอกลำไยแท้', price: 400, category: 'น้ำผึ้งผลไม้' },
  { id: '3', name: 'น้ำผึ้งลิ้นจี่', description: 'น้ำผึ้งจากดอกลิ้นจี่คุณภาพ', price: 380, category: 'น้ำผึ้งผลไม้' },
  { id: '4', name: 'น้ำผึ้งมะนาว', description: 'น้ำผึ้งจากดอกมะนาวสด', price: 320, category: 'น้ำผึ้งผลไม้' },
  { id: '5', name: 'น้ำผึ้งทานตะวัน', description: 'น้ำผึ้งจากดอกทานตะวัน', price: 300, category: 'น้ำผึ้งดอกไม้' },
  { id: '6', name: 'น้ำผึ้งป่าภูเขา', description: 'น้ำผึ้งป่าคุณภาพพรีเมี่ยม', price: 450, category: 'น้ำผึ้งพิเศษ' },
  { id: '7', name: 'น้ำผึ้งสมุนไพร', description: 'น้ำผึ้งผสมสมุนไพร', price: 420, category: 'น้ำผึ้งพิเศษ' },
  { id: '8', name: 'น้ำผึ้งออแกนิค', description: 'น้ำผึ้งออแกนิคแท้ 100%', price: 500, category: 'น้ำผึ้งพิเศษ' },
  { id: '9', name: 'น้ำผึ้งกาแฟ', description: 'น้ำผึ้งจากดอกกาแฟ', price: 360, category: 'น้ำผึ้งดอกไม้' },
  { id: '10', name: 'น้ำผึ้งยูคาลิปตัส', description: 'น้ำผึ้งจากดอกยูคาลิปตัส', price: 390, category: 'น้ำผึ้งดอกไม้' },
  { id: '11', name: 'น้ำผึ้งส้ม', description: 'น้ำผึ้งจากดอกส้ม', price: 370, category: 'น้ำผึ้งผลไม้' },
  { id: '12', name: 'น้ำผึ้งมะม่วง', description: 'น้ำผึ้งจากดอกมะม่วง', price: 340, category: 'น้ำผึ้งผลไม้' },
  { id: '13', name: 'น้ำผึ้งโรสแมรี่', description: 'น้ำผึ้งจากดอกโรสแมรี่', price: 430, category: 'น้ำผึ้งสมุนไพร' },
  { id: '14', name: 'น้ำผึ้งลาเวนเดอร์', description: 'น้ำผึ้งจากดอกลาเวนเดอร์', price: 460, category: 'น้ำผึ้งสมุนไพร' },
  { id: '15', name: 'น้ำผึ้งทิปปี้', description: 'น้ำผึ้งจากดอกทิปปี้', price: 310, category: 'น้ำผึ้งดอกไม้' },
  { id: '16', name: 'น้ำผึ้งรวมมิตร', description: 'น้ำผึ้งผสมหลายชนิด', price: 380, category: 'น้ำผึ้งพิเศษ' },
];

const categories = ['ทั้งหมด', 'น้ำผึ้งดอกไม้', 'น้ำผึ้งผลไม้', 'น้ำผึ้งพิเศษ', 'น้ำผึ้งสมุนไพร'];

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
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
                    ช่วงราคา: {priceRange[0]} - {priceRange[1]} ฿
                  </label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-24 px-3 py-2 border rounded-lg"
                      placeholder="ต่ำสุด"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
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
            <div key={product.id} className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#999999] h-[300px]"></div>
              <div className="p-6">
                <h3 className="text-black text-center mb-2">{product.name}</h3>
                <p className="text-[#a6a6a6] text-sm text-center mb-2">{product.description}</p>
                <p className="text-xs text-center text-[#898989] mb-4">{product.category}</p>
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

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#898989]">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ทั้งหมด');
                setPriceRange([0, 1000]);
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
