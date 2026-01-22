import logo from "@/assets/image/logobeev2.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage = "home", onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "หน้าแรก" },
    { id: "products", label: "สินค้า" },
    { id: "about", label: "ประวัติ & รางวัล" },
    { id: "news", label: "ข่าวสาร" },
    { id: "contact", label: "ติดต่อเรา" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-[#fbf8ef] shadow-sm">
      {/* ===== Desktop ===== */}
      <div className="hidden lg:flex h-[90px] items-center justify-between px-16">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("home")}>
          <img
            src={logo}
            alt="น้ำผึ้งทวีโชค"
            className="h-14 w-auto object-contain"
          />
          <span className="text-xl font-bold text-black font-['Inter','Noto_Sans_Thai',sans-serif]">
            น้ำผึ้งทวีโชค
          </span>
        </div>

        {/* Menu */}
        <nav className="flex gap-10">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`font-bold transition-colors ${
                  isActive
                    ? "text-[#f6b82d]"
                    : "text-[#898989] hover:text-[#f6b82d]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ===== Mobile ===== */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            <img
              src={logo}
              alt="น้ำผึ้งทวีโชค"
              className="h-12 w-auto object-contain"
            />
            <span className="font-bold text-black font-['Inter','Noto_Sans_Thai',sans-serif]">
              น้ำผึ้งทวีโชค
            </span>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t bg-[#fbf8ef] px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left font-bold transition-colors ${
                    isActive
                      ? "bg-[#f6b82d] text-white"
                      : "text-[#898989] hover:bg-[#f6b82d]/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
