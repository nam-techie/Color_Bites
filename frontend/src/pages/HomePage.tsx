import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Map, 
  Sparkles, 
  Heart, 
  Camera,
  MapPin,
  Utensils
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Trắc Nghiệm Tâm Lý Màu Sắc",
      description: "Khám phá tâm trạng của bạn qua màu sắc và nhận gợi ý cá nhân hóa về món ăn, đồ uống phù hợp",
      color: "from-primary-500 to-primary-600",
      link: "/quiz"
    },
    {
      icon: Users,
      title: "Cộng Đồng Ẩm Thực",
      description: "Chia sẻ công thức, ảnh món ăn và kết nối với những người yêu thích ẩm thực",
      color: "from-secondary-500 to-secondary-600",
      link: "/community"
    },
    {
      icon: Map,
      title: "Bản Đồ Khám Phá",
      description: "Tìm kiếm những địa điểm ẩm thực tuyệt vời tại Thủ Đức và chia sẻ trải nghiệm",
      color: "from-accent-500 to-accent-600",
      link: "/map"
    }
  ];

  const stats = [
    { number: "1,250+", label: "Thành viên", icon: Heart },
    { number: "3,400+", label: "Món ăn chia sẻ", icon: Camera },
    { number: "156", label: "Địa điểm", icon: MapPin },
    { number: "98%", label: "Hài lòng", icon: Sparkles }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-bounce-subtle">
            <Utensils size={80} className="mx-auto mb-8 text-primary-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              COLOR BITES
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
            Khám phá thế giới ẩm thực qua lăng kính tâm lý học màu sắc
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up">
            Tìm hiểu cảm xúc của bạn, khám phá món ăn phù hợp và kết nối với cộng đồng ẩm thực tại Thủ Đức, TP.HCM
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/quiz"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Bắt Đầu Trắc Nghiệm
            </Link>
            <Link
              to="/community"
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
            >
              Khám Phá Cộng Đồng
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trải Nghiệm Đặc Biệt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            COLOR BITES mang đến cho bạn những trải nghiệm độc đáo kết hợp giữa tâm lý học và ẩm thực
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <Icon size={48} className="mx-auto mb-4 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Sẵn Sàng Khám Phá?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Tham gia cùng chúng tôi để khám phá thế giới ẩm thực đầy màu sắc và cảm xúc
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <Sparkles size={24} />
          <span>Bắt Đầu Hành Trình</span>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;