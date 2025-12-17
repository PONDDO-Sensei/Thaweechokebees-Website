import { useState } from "react";
import { ArrowLeft, Plus, Edit2, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

interface ProductManagementProps {
  onBack: () => void;
}

export function ProductManagement({ onBack }: ProductManagementProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  // Mock products data
  const [products, setProducts] = useState([
    { id: 1, name: 'น้ำผึ้งแท้ 100% ขนาด 500g', category: 'น้ำผึ้งแท้', price: 350, stock: 50 },
    { id: 2, name: 'นมผึ้งออร์แกนิก', category: 'นมผึ้ง', price: 550, stock: 30 },
    { id: 3, name: 'เกสรผึ้ง 200g', category: 'เกสรผึ้ง', price: 280, stock: 45 },
    { id: 4, name: 'โพรพอลิส สเปรย์', category: 'โพรพอลิส', price: 420, stock: 25 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('คุณต้องการลบสินค้านี้หรือไม่?')) {
      setProducts(products.filter(p => p.id !== id));
      toast.success('ลบสินค้าสำเร็จ');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, price: parseFloat(formData.price), stock: parseInt(formData.stock) }
          : p
      ));
      toast.success('แก้ไขสินค้าสำเร็จ');
    } else {
      // Add new product
      const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };
      setProducts([...products, newProduct]);
      toast.success('เพิ่มสินค้าสำเร็จ');
    }
    
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({ name: '', category: '', price: '', stock: '', description: '' });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#898989] hover:text-[#f6b82d] font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] transition-colors mb-4"
          >
            <ArrowLeft className="size-5" />
            กลับ
          </button>
          <div className="flex items-center justify-between">
            <h1 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black">
              จัดการสินค้า
            </h1>
            <button
              onClick={() => {
                setEditingProduct(null);
                setFormData({ name: '', category: '', price: '', stock: '', description: '' });
                setIsModalOpen(true);
              }}
              className="bg-[#f6b82d] hover:bg-[#e0a520] text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] px-6 py-3 rounded-[20px] transition-colors flex items-center gap-2"
            >
              <Plus className="size-5" />
              เพิ่มสินค้าใหม่
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] bg-white"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#898989] size-5" />
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-[20px] overflow-hidden shadow-md">
          <table className="w-full">
            <thead className="bg-[#f6b82d]">
              <tr>
                <th className="px-6 py-4 text-left font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white">
                  ชื่อสินค้า
                </th>
                <th className="px-6 py-4 text-left font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white">
                  หมวดหมู่
                </th>
                <th className="px-6 py-4 text-left font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white">
                  ราคา
                </th>
                <th className="px-6 py-4 text-left font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white">
                  คงเหลือ
                </th>
                <th className="px-6 py-4 text-center font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white">
                  การจัดการ
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-[#d9d9d9] hover:bg-[#fbf8ef] transition-colors">
                  <td className="px-6 py-4 font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-black">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#5b5b5b]">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black">
                    {product.price} ฿
                  </td>
                  <td className="px-6 py-4 font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#5b5b5b]">
                    {product.stock} ชิ้น
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="size-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="size-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[20px] p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black mb-6">
              {editingProduct ? 'แก้ไขสินค้า' : 'เพิ่มสินค้าใหม่'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
                  ชื่อสินค้า <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                />
              </div>

              <div>
                <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
                  หมวดหมู่ <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                >
                  <option value="">เลือกหมวดหมู่</option>
                  <option value="น้ำผึ้งแท้">น้ำผึ้งแท้</option>
                  <option value="นมผึ้ง">นมผึ้ง</option>
                  <option value="เกสรผึ้ง">เกสรผึ้ง</option>
                  <option value="โพรพอลิส">โพรพอลิส</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
                    ราคา (฿) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                  />
                </div>

                <div>
                  <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
                    คงเหลือ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="w-full px-4 py-3 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif]"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black block mb-2">
                  รายละเอียด
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-[20px] border-2 border-[#d9d9d9] focus:border-[#f6b82d] focus:outline-none font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingProduct(null);
                    setFormData({ name: '', category: '', price: '', stock: '', description: '' });
                  }}
                  className="flex-1 bg-[#d9d9d9] hover:bg-[#c0c0c0] text-black font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-3 rounded-[20px] transition-colors"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#f6b82d] hover:bg-[#e0a520] text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-3 rounded-[20px] transition-colors"
                >
                  {editingProduct ? 'บันทึกการแก้ไข' : 'เพิ่มสินค้า'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
