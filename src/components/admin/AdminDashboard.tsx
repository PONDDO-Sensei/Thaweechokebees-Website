import { LayoutDashboard, Package, Newspaper, Image as ImageIcon, LogOut, Users } from "lucide-react";
import { toast } from "sonner";

interface AdminDashboardProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onLogout, onNavigate }: AdminDashboardProps) {
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    toast.success('ออกจากระบบสำเร็จ');
    onLogout();
  };

  const stats = [
    { label: 'จำนวนสินค้า', value: '24', icon: Package, color: 'bg-blue-500' },
    { label: 'ข่าวสาร', value: '12', icon: Newspaper, color: 'bg-green-500' },
    { label: 'แบนเนอร์', value: '5', icon: ImageIcon, color: 'bg-purple-500' },
    { label: 'ผู้เข้าชมวันนี้', value: '156', icon: Users, color: 'bg-orange-500' },
  ];

  const menuItems = [
    { id: 'products', label: 'จัดการสินค้า', icon: Package, description: 'เพิ่ม แก้ไข ลบสินค้า' },
    { id: 'news', label: 'จัดการข่าวสาร', icon: Newspaper, description: 'เพิ่ม แก้ไข ลบข่าวสาร' },
    { id: 'banners', label: 'จัดการแบนเนอร์', icon: ImageIcon, description: 'อัปโหลดและจัดการแบนเนอร์' },
  ];

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="size-6 text-[#f6b82d]" />
            <h1 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black">
              ระบบจัดการหลังบ้าน
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[#898989] hover:text-[#f6b82d] font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] transition-colors"
          >
            <LogOut className="size-5" />
            ออกจากระบบ
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black mb-2">
            ยินดีต้อนรับ, Admin
          </h2>
          <p className="font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#5b5b5b]">
            ภาพรวมของเว็บไซต์ร้านน้ำผึ้งทวีโชค
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-[20px] p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <Icon className="size-6 text-white" />
                  </div>
                </div>
                <p className="font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#898989] mb-1">
                  {stat.label}
                </p>
                <p className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="bg-white rounded-[20px] p-8 text-left hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#f6b82d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="size-8 text-[#f6b82d]" />
                </div>
                <h3 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black mb-2">
                  {item.label}
                </h3>
                <p className="font-['Inter:Regular','Noto_Sans_Thai:Regular',sans-serif] text-[#898989]">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-[#f6b82d] to-[#f2b530] rounded-[20px] p-8">
          <h3 className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-white mb-4">
            การดำเนินการด่วน
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="bg-white/20 hover:bg-white/30 text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-3 rounded-[20px] transition-colors"
            >
              + เพิ่มสินค้าใหม่
            </button>
            <button
              onClick={() => onNavigate('news')}
              className="bg-white/20 hover:bg-white/30 text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-3 rounded-[20px] transition-colors"
            >
              + เพิ่มข่าวสาร
            </button>
            <button
              onClick={() => onNavigate('banners')}
              className="bg-white/20 hover:bg-white/30 text-white font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] py-3 rounded-[20px] transition-colors"
            >
              + เพิ่มแบนเนอร์
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
