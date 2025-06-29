import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Brain, 
  Users, 
  Map, 
  Info, 
  User, 
  Instagram, 
  Facebook, 
  Mail,
  Menu,
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Trang Chủ', icon: Home },
    { path: '/quiz', label: 'Trắc Nghiệm', icon: Brain },
    { path: '/community', label: 'Cộng Đồng', icon: Users },
    { path: '/map', label: 'Bản Đồ', icon: Map },
    { path: '/about', label: 'Giới Thiệu', icon: Info },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`${isHomePage ? 'absolute' : 'relative'} w-full top-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <span className={`text-2xl font-bold ${isHomePage ? 'text-white' : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'}`}>
                COLOR BITES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? isHomePage 
                          ? 'bg-white/20 text-white backdrop-blur-md' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : isHomePage
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Auth Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/auth"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isHomePage
                    ? 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105'
                }`}
              >
                <User size={18} />
                <span className="text-sm">Đăng Nhập</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isHomePage ? 'text-white' : 'text-gray-700'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden ${isHomePage ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white'} border-t ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? isHomePage
                          ? 'bg-white/20 text-white'
                          : 'bg-purple-500 text-white'
                        : isHomePage
                          ? 'text-white/80 hover:bg-white/10'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <Link
                to="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isHomePage
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                <User size={20} />
                <span>Đăng Nhập</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={isHomePage ? '' : 'pt-16'}>
        {children}
      </main>

      {/* Footer */}
      {!isHomePage && (
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CB</span>
                  </div>
                  <span className="text-2xl font-bold">COLOR BITES</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Khám phá thế giới ẩm thực qua lăng kính tâm lý học màu sắc. 
                  Kết nối cảm xúc với hương vị tại Thủ Đức, TP.HCM.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Khám Phá</h3>
                <ul className="space-y-2">
                  <li><Link to="/quiz" className="text-gray-300 hover:text-purple-400 transition-colors">Trắc nghiệm màu sắc</Link></li>
                  <li><Link to="/community" className="text-gray-300 hover:text-purple-400 transition-colors">Cộng đồng</Link></li>
                  <li><Link to="/map" className="text-gray-300 hover:text-purple-400 transition-colors">Bản đồ ẩm thực</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">Giới thiệu</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Liên hệ</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Chính sách bảo mật</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Điều khoản sử dụng</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 COLOR BITES. Tất cả quyền được bảo lưu. Made with ❤️ in Thủ Đức, TP.HCM
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;