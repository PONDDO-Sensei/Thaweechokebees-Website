import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgLogo from "figma:asset/3f3bbe27f96a790a6297f7bccfa6df7d56c76528.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigateAndClose = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-[#fbf8ef] h-[90px] mx-auto max-w-[1920px] px-4 md:px-8 shadow-sm">
        <div className="flex items-center h-full max-w-[1422px] mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer" onClick={() => handleNavigateAndClose('home')}>
            <div className="h-[50px] w-[60px] md:h-[70px] md:w-[80px] overflow-hidden">
              <img 
                alt="น้ำผึ้งทวีโชค Logo" 
                className="h-full w-full object-contain" 
                src={imgLogo} 
              />
            </div>
            <div className="text-black text-base md:text-xl">น้ำผึ้งทวีโชค</div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 xl:gap-12 ml-auto items-center">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-[#f2b530]' : 'text-[#898989] hover:text-[#f2b530]'
              }`}
            >
              หน้าแรก
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`transition-colors ${
                currentPage === 'products' ? 'text-[#f2b530]' : 'text-[#898989] hover:text-[#f2b530]'
              }`}
            >
              สินค้า
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-[#f2b530]' : 'text-[#898989] hover:text-[#f2b530]'
              }`}
            >
              ประวัติ &amp; รางวัล
            </button>
            <button
              onClick={() => onNavigate('news')}
              className={`transition-colors ${
                currentPage === 'news' ? 'text-[#f2b530]' : 'text-[#898989] hover:text-[#f2b530]'
              }`}
            >
              ข่าวสาร
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${
                currentPage === 'contact' ? 'text-[#f2b530]' : 'text-[#898989] hover:text-[#f2b530]'
              }`}
            >
              ติดต่อเรา
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-auto lg:hidden p-2 text-[#898989] hover:text-[#f2b530] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8ef] border-t border-gray-200 shadow-lg">
          <div className="max-w-[1422px] mx-auto px-4 py-4 space-y-2">
            <button
              onClick={() => handleNavigateAndClose('home')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'home' 
                  ? 'bg-[#f2b530] text-white' 
                  : 'text-[#898989] hover:bg-[#f2b530]/10'
              }`}
            >
              หน้าแรก
            </button>
            <button
              onClick={() => handleNavigateAndClose('products')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'products' 
                  ? 'bg-[#f2b530] text-white' 
                  : 'text-[#898989] hover:bg-[#f2b530]/10'
              }`}
            >
              สินค้า
            </button>
            <button
              onClick={() => handleNavigateAndClose('about')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'about' 
                  ? 'bg-[#f2b530] text-white' 
                  : 'text-[#898989] hover:bg-[#f2b530]/10'
              }`}
            >
              ประวัติ &amp; รางวัล
            </button>
            <button
              onClick={() => handleNavigateAndClose('news')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'news' 
                  ? 'bg-[#f2b530] text-white' 
                  : 'text-[#898989] hover:bg-[#f2b530]/10'
              }`}
            >
              ข่าวสาร
            </button>
            <button
              onClick={() => handleNavigateAndClose('contact')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'contact' 
                  ? 'bg-[#f2b530] text-white' 
                  : 'text-[#898989] hover:bg-[#f2b530]/10'
              }`}
            >
              ติดต่อเรา
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}