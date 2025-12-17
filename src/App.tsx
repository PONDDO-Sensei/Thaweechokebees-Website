import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { NewsPage } from './components/NewsPage';
import { ContactPage } from './components/ContactPage';
import { FloatingSocialIcons } from './components/FloatingSocialIcons';
import { Footer } from './components/Footer';

type PageType = 'home' | 'products' | 'product-detail' | 'about' | 'news' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('1');

  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page as PageType);
    if (productId) {
      setSelectedProductId(productId);
    }
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetailPage productId={selectedProductId} onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8ef]">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <main className="pt-[90px]">
        {renderPage()}
      </main>

      {/* Floating Social Icons */}
      <FloatingSocialIcons />

      {/* Footer */}
      <Footer />
    </div>
  );
}
