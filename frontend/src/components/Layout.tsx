import React from 'react';
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
  Mail 
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang Chủ', icon: Home },
    { path: '/quiz', label: 'Trắc Nghiệm Màu Sắc', icon: Brain },
    { path: '/community', label: 'Cộng Đồng', icon: Users },
    { path: '/map', label: 'Bản Đồ Ẩm Thực', icon: Map },
    { path: '/about', label: 'Giới Thiệu', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-green-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                COLOR BITES
              </span>
            </Link>

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
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <Link
              to="/auth"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <User size={18} />
              <span className="text-sm font-medium">Đăng Nhập</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-white border-t">
          <div className="flex justify-around py-2">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium mt-1">{item.label.split(' ')[0]}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CB</span>
                </div>
                <span className="text-2xl font-bold">COLOR BITES</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Khám phá thế giới ẩm thực qua lăng kính tâm lý học màu sắc. 
                Kết nối cảm xúc với hương vị tại Thủ Đức, TP.HCM.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Khám Phá</h3>
              <ul className="space-y-2">
                <li><Link to="/quiz" className="text-gray-300 hover:text-primary-400 transition-colors">Trắc nghiệm màu sắc</Link></li>
                <li><Link to="/community" className="text-gray-300 hover:text-primary-400 transition-colors">Cộng đồng</Link></li>
                <li><Link to="/map" className="text-gray-300 hover:text-primary-400 transition-colors">Bản đồ ẩm thực</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">Giới thiệu</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ Trợ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Liên hệ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">FAQ</a></li>
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
    </div>
  );
};

export default Layout;