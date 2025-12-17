import imgLogo1 from "figma:asset/3f3bbe27f96a790a6297f7bccfa6df7d56c76528.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'products', label: 'สินค้า' },
    { id: 'about', label: 'ประวัติ & รางวัล' },
    { id: 'news', label: 'ข่าวสาร' },
    { id: 'contact', label: 'ติดต่อเรา' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed left-0 top-0 z-40 w-full hidden lg:block" data-name="Navbar">
        <div className="bg-[#fbf8ef] h-[90px] w-full shadow-sm" />
        <div className="absolute h-[70px] left-[311px] top-[10px] w-[80px]" data-name="LOGO">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="น้ำผึ้งทวีโชค Logo"
              className="absolute h-[120.21%] left-[-0.26%] max-w-none top-[-20.21%] w-[100.52%]"
              src={imgLogo1}
            />
          </div>
        </div>
        <div className="absolute flex flex-col font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] h-[69px] justify-center leading-[0] left-[408px] text-black top-[51.5px] translate-y-[-50%] w-[205px]">
          <p className="leading-[normal]">น้ำผึ้งทวีโชค</p>
        </div>
        
        {navItems.map((item, index) => {
          const positions = [1180, 1280, 1410, 1530, 1630];
          const widths = [98, 74, 170, 80, 101];
          const isActive = currentPage === item.id;
          
          return (
            <div
              key={item.id}
              className={`absolute flex flex-col font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] h-[39px] justify-center leading-[0] text-center top-[45.5px] translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-colors ${
                isActive ? 'text-[#f6b82d]' : 'text-[#898989] hover:text-[#f6b82d]'
              }`}
              style={{ left: `${positions[index]}px`, width: `${widths[index]}px` }}
              onClick={() => handleNavigation(item.id)}
            >
              <p className="leading-[normal]">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Navbar */}
      <div className="fixed left-0 top-0 z-40 w-full lg:hidden bg-[#fbf8ef] shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] overflow-hidden">
              <img
                alt="น้ำผึ้งทวีโชค Logo"
                className="h-full w-full object-cover"
                src={imgLogo1}
              />
            </div>
            <span className="font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] text-black">
              น้ำผึ้งทวีโชค
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black hover:text-[#f6b82d] transition-colors"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-[#fbf8ef] border-t border-[#d9d9d9]">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-[20px] font-['Inter:Bold','Noto_Sans_Thai:Bold',sans-serif] transition-colors ${
                      isActive
                        ? 'bg-[#f6b82d] text-white'
                        : 'text-[#898989] hover:bg-[#f6b82d]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}