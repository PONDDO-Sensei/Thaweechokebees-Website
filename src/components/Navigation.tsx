import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgLogo from "@/assets/image/logobeev2.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [logoPressed, setLogoPressed] = useState(false);

  const handleNavigateAndClose = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-[#fbf8ef] h-[90px] mx-auto max-w-[1920px] px-4 md:px-8 shadow-sm">
        <div className="flex items-center h-full max-w-[1422px] mx-auto">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-3 md:gap-4 cursor-pointer"
            onClick={() => handleNavigateAndClose('home')}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => {
              setLogoHovered(false);
              setLogoPressed(false);
            }}
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8ef] border-t border-gray-200 shadow-lg animate-slide-down">
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
function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
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
      className="ml-auto lg:hidden p-2 rounded-lg relative overflow-hidden"
      style={{
        color: hovered ? '#f2b530' : '#898989',
        backgroundColor: hovered ? 'rgba(242, 181, 48, 0.1)' : 'transparent',
        transform: pressed ? 'scale(0.9) rotate(90deg)' : hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Ripple Effect Background */}
      {hovered && (
        <span 
          className="absolute inset-0 rounded-lg animate-ping-slow"
          style={{
            backgroundColor: 'rgba(242, 181, 48, 0.2)',
          }}
        />
      )}
      
      {/* Icon with Rotation Animation */}
      <div
        style={{
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {isOpen ? (
          <X 
            className="w-6 h-6 relative z-10" 
            style={{
              animation: 'spin-in 0.3s ease-out'
            }}
          />
        ) : (
          <Menu 
            className="w-6 h-6 relative z-10"
            style={{
              animation: hovered ? 'bounce-subtle 0.5s ease-in-out' : 'none'
            }}
          />
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
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="block w-full text-left px-4 py-3 rounded-lg"
      style={{
        backgroundColor: active ? '#f2b530' : hovered ? 'rgba(242, 181, 48, 0.1)' : 'transparent',
        color: active ? '#ffffff' : '#898989',
        boxShadow: active ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : hovered ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none',
        transform: pressed ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  );
}

// Add CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-in {
    0% {
      transform: rotate(-90deg) scale(0.8);
      opacity: 0;
    }
    50% {
      transform: rotate(0deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
  }

  @keyframes bounce-subtle {
    0%, 100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-3px);
    }
    75% {
      transform: translateY(-1px);
    }
  }

  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  @keyframes slide-down {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-ping-slow {
    animation: ping-slow 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out;
  }
`;
document.head.appendChild(style);