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
  Utensils,
  Shield,
  Clock,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Trắc Nghiệm Màu Sắc AI",
      description: "Phân tích tâm trạng tiên tiến thông qua trắc nghiệm màu sắc được hỗ trợ bởi khoa học",
      color: "from-purple-500 to-purple-600",
      link: "/quiz"
    },
    {
      icon: Shield,
      title: "Bảo Mật Tuyệt Đối",
      description: "Không cần đăng nhập, không theo dõi, không lưu trữ lịch sử cá nhân",
      color: "from-blue-500 to-blue-600",
      link: "/about"
    },
    {
      icon: Clock,
      title: "Kết Quả Tức Thì",
      description: "Nhận gợi ý ẩm thực và thời trang được cá nhân hóa trong vòng dưới 30 giây",
      color: "from-green-500 to-green-600",
      link: "/quiz"
    }
  ];

  const stats = [
    { number: "17,000+", label: "Người dùng tin tưởng", icon: Heart },
    { number: "3,400+", label: "Món ăn chia sẻ", icon: Camera },
    { number: "156", label: "Địa điểm", icon: MapPin },
    { number: "98%", label: "Hài lòng", icon: Sparkles }
  ];

  const testimonials = [
    {
      name: "Minh Anh",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
      content: "COLOR BITES đã giúp tôi tìm ra những món ăn hoàn hảo cho tâm trạng của mình. Thật tuyệt vời!",
      rating: 5
    },
    {
      name: "Thu Hằng",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
      content: "Trắc nghiệm rất chính xác và gợi ý món ăn luôn phù hợp với cảm xúc của tôi.",
      rating: 5
    },
    {
      name: "Hoàng Long",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
      content: "Ứng dụng tuyệt vời để khám phá ẩm thực Thủ Đức. Rất hữu ích và thú vị!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
            <CheckCircle size={16} className="text-green-400" />
            <span className="text-white/90 text-sm">Được tin tưởng bởi 17,000+ người dùng trên toàn thế giới</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Khám Phá Ẩm Thực Qua
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Tâm Lý Học Màu Sắc
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Dừng việc lướt vô tận qua các ứng dụng đặt đồ ăn. AI của COLOR BITES phân tích tâm trạng của bạn 
            thông qua trắc nghiệm màu sắc sáng tạo để tìm ra món ăn, đồ uống và phong cách thời trang 
            mà bạn thực sự yêu thích.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/quiz"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Bắt Đầu Trắc Nghiệm AI Miễn Phí</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              Cách Thức Hoạt Động
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cách Thức Hoạt Động
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quy trình đơn giản 3 bước để khám phá món ăn hoàn hảo cho tâm trạng của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Trắc Nghiệm Màu Sắc</h3>
              <p className="text-gray-300">Trả lời các câu hỏi về màu sắc và cảm xúc trong vài phút</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phân Tích AI</h3>
              <p className="text-gray-300">AI phân tích tâm trạng và sở thích của bạn qua màu sắc</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nhận Gợi Ý</h3>
              <p className="text-gray-300">Khám phá món ăn, đồ uống và phong cách phù hợp với bạn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Người Dùng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-xl text-gray-300">
              Hàng nghìn người đã tìm thấy món ăn hoàn hảo cho tâm trạng của họ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-white font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <Icon size={48} className="mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn Sàng Khám Phá Món Ăn Hoàn Hảo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Tham gia cùng hàng nghìn người đã tìm thấy hương vị phù hợp với tâm trạng của họ
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={24} />
            <span>Bắt Đầu Trắc Nghiệm Miễn Phí</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;