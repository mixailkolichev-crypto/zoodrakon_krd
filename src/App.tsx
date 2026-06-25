import React, { useState } from 'react';
import { TabType, Product, CartItem } from './types';
import { STORE_CONTACTS, PRODUCTS, REVIEWS, NEWS_ITEMS, PHOTOS_GALLERY, FEATURES_LIST } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { OverviewTab } from './components/tabs/OverviewTab';
import { CatalogTab } from './components/tabs/CatalogTab';
import { NewsTab } from './components/tabs/NewsTab';
import { PhotosTab } from './components/tabs/PhotosTab';
import { ReviewsTab } from './components/tabs/ReviewsTab';
import { FeaturesTab } from './components/tabs/FeaturesTab';
import { HotelModal } from './components/modals/HotelModal';
import { ExcursionModal } from './components/modals/ExcursionModal';
import { CartModal } from './components/modals/CartModal';
import { ProductModal } from './components/modals/ProductModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Modals state
  const [hotelModalOpen, setHotelModalOpen] = useState(false);
  const [excursionModalOpen, setExcursionModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#070f0a] text-[#e1ede6] font-sans selection:bg-emerald-500 selection:text-black flex flex-col">
      
      {/* Шапка с навигацией */}
      <Header
        contacts={STORE_CONTACTS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        cartCount={cartCount}
        onOpenCart={() => setCartModalOpen(true)}
        onOpenHotel={() => setHotelModalOpen(true)}
        onOpenExcursion={() => setExcursionModalOpen(true)}
      />

      {/* Основной контент */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6">
        {activeTab === 'overview' && (
          <OverviewTab
            contacts={STORE_CONTACTS}
            products={PRODUCTS}
            onOpenHotel={() => setHotelModalOpen(true)}
            onOpenExcursion={() => setExcursionModalOpen(true)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onGoToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'catalog' && (
          <CatalogTab
            products={PRODUCTS}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'news' && (
          <NewsTab news={NEWS_ITEMS} />
        )}

        {activeTab === 'photos' && (
          <PhotosTab photos={PHOTOS_GALLERY} />
        )}

        {activeTab === 'reviews' && (
          <ReviewsTab reviews={REVIEWS} contacts={STORE_CONTACTS} />
        )}

        {activeTab === 'features' && (
          <FeaturesTab
            features={FEATURES_LIST}
            onOpenHotel={() => setHotelModalOpen(true)}
            onOpenExcursion={() => setExcursionModalOpen(true)}
            onGoToTab={(tab) => setActiveTab(tab)}
          />
        )}
      </main>

      {/* Подвал */}
      <Footer
        contacts={STORE_CONTACTS}
        onTabChange={setActiveTab}
        onOpenHotel={() => setHotelModalOpen(true)}
        onOpenExcursion={() => setExcursionModalOpen(true)}
      />

      {/* Модальные окна */}
      <HotelModal
        isOpen={hotelModalOpen}
        onClose={() => setHotelModalOpen(false)}
      />

      <ExcursionModal
        isOpen={excursionModalOpen}
        onClose={() => setExcursionModalOpen(false)}
      />

      <CartModal
        isOpen={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
