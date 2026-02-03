import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgLogo from "@/assets/image/logobeev2.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [logoPressed, setLogoPressed] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // ป้องกันไม่ให้ trigger event อื่น
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
        onNavigate('home');
      }, 300);
    } else {
      onNavigate('home');
    }
  };

  const handleNavigateAndClose = (page: string) => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
      onNavigate(page);
    }, 300);
  };

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // ป้องกันไม่ให้ trigger event อื่น
    if (mobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMobileMenuOpen(true);
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-[#fbf8ef] h-[90px] mx-auto max-w-[1920px] px-4 md:px-8 shadow-sm">
        <div className="flex items-center h-full max-w-[1422px] mx-auto">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-3 md:gap-4 cursor-pointer select-none touch-manipulation"
            onClick={handleLogoClick}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => {
              setLogoHovered(false);
              setLogoPressed(false);
            }}
            onTouchStart={() => setLogoPressed(true)}
            onTouchEnd={() => setLogoPressed(false)}
            onMouseDown={() => setLogoPressed(true)}
            onMouseUp={() => setLogoPressed(false)}
            style={{
              transform: logoPressed ? 'scale(0.95)' : logoHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.2s ease'
            }}
          >
            <div 
              className="h-[50px] w-[60px] md:h-[70px] md:w-[80px] overflow-hidden"
              style={{
                transform: logoHovered ? 'rotate(6deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            >
              <img 
                alt="น้ำผึ้งทวีโชค Logo" 
                className="h-full w-full object-contain" 
                src={imgLogo} 
              />
            </div>
            <div 
              className="text-base md:text-xl font-medium"
              style={{
                color: logoHovered ? '#f2b530' : '#000000',
                transition: 'color 0.2s ease'
              }}
            >
              น้ำผึ้งทวีโชค
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 xl:gap-12 ml-auto items-center">
            <NavButton
              active={currentPage === 'home'}
              onClick={() => onNavigate('home')}
            >
              หน้าแรก
            </NavButton>
            <NavButton
              active={currentPage === 'products'}
              onClick={() => onNavigate('products')}
            >
              สินค้า
            </NavButton>
            <NavButton
              active={currentPage === 'about'}
              onClick={() => onNavigate('about')}
            >
              ประวัติ &amp; รางวัล
            </NavButton>
            <NavButton
              active={currentPage === 'news'}
              onClick={() => onNavigate('news')}
            >
              ข่าวสาร
            </NavButton>
            <NavButton
              active={currentPage === 'contact'}
              onClick={() => onNavigate('contact')}
            >
              ติดต่อเรา
            </NavButton>
          </div>

          {/* Mobile Menu Button with Animation */}
          <MobileMenuButton 
            isOpen={mobileMenuOpen}
            onClick={handleMenuToggle}
          />
        </div>
      </div>

      {/* Mobile Menu - แก้ไข Animation ตอนปิด */}
      {(mobileMenuOpen || isClosing) && (
        <div 
          className={`lg:hidden bg-[#fbf8ef] border-t border-gray-200 shadow-lg overflow-hidden ${
            !isClosing ? 'animate-slide-down' : 'animate-slide-up'
          }`}
        >
          <div className="max-w-[1422px] mx-auto px-4 py-4 space-y-2">
          <MobileNavButton
            active={currentPage === 'home'}
            onClick={() => handleNavigateAndClose('home')}
          >
            หน้าแรก
          </MobileNavButton>
          <MobileNavButton
            active={currentPage === 'products'}
            onClick={() => handleNavigateAndClose('products')}
          >
            สินค้า
          </MobileNavButton>
          <MobileNavButton
            active={currentPage === 'about'}
            onClick={() => handleNavigateAndClose('about')}
          >
            ประวัติ &amp; รางวัล
          </MobileNavButton>
          <MobileNavButton
            active={currentPage === 'news'}
            onClick={() => handleNavigateAndClose('news')}
          >
            ข่าวสาร
          </MobileNavButton>
          <MobileNavButton
            active={currentPage === 'contact'}
            onClick={() => handleNavigateAndClose('contact')}
          >
            ติดต่อเรา
          </MobileNavButton>
        </div>
      </div>
      )}
    </nav>
  );
}

// Desktop Navigation Button Component
function NavButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        color: active ? '#f2b530' : hovered ? '#f2b530' : '#898989',
        fontWeight: active ? '500' : '400',
        transform: pressed ? 'scale(0.95) translateY(2px)' : 'scale(1) translateY(0)',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  );
}

// Mobile Menu Button Component with Enhanced Animation
function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: (e: React.MouseEvent) => void }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="ml-auto lg:hidden p-2 rounded-lg relative overflow-hidden select-none touch-manipulation active:scale-95"
      style={{
        color: pressed ? '#f2b530' : hovered ? '#f2b530' : '#898989',
        backgroundColor: pressed ? 'rgba(242, 181, 48, 0.2)' : hovered ? 'rgba(242, 181, 48, 0.1)' : 'transparent',
        transform: pressed ? 'scale(0.9)' : 'scale(1)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >      
      {/* Icon with Rotation Animation */}
      <div
        style={{
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <Menu className="w-6 h-6 relative z-10" />
        )}
      </div>
    </button>
  );
}

// Mobile Navigation Button Component
function MobileNavButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="block w-full text-left px-4 py-3 rounded-lg select-none touch-manipulation active:scale-98"
      style={{
        backgroundColor: active ? '#f2b530' : pressed ? 'rgba(242, 181, 48, 0.15)' : hovered ? 'rgba(242, 181, 48, 0.1)' : 'transparent',
        color: active ? '#ffffff' : '#898989',
        boxShadow: active ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : pressed ? '0 2px 4px 0 rgba(0, 0, 0, 0.05)' : hovered ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none',
        transform: pressed ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.15s ease'
      }}
    >
      {children}
    </button>
  );
}

// Add CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slide-down {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }

  /* Improve touch responsiveness */
  @media (hover: none) and (pointer: coarse) {
    .touch-manipulation {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
    }
    
    .active\:scale-95:active {
      transform: scale(0.95);
    }
    
    .active\:scale-98:active {
      transform: scale(0.98);
    }
  }
`;
document.head.appendChild(style);