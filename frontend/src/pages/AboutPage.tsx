import React from 'react';
import { 
  Info, 
  Heart, 
  Users, 
  Target, 
  Lightbulb,
  Award,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Kết nối cảm xúc",
      description: "Chúng tôi tin rằng màu sắc có thể phản ánh cảm xúc và hướng dẫn lựa chọn ẩm thực của chúng ta."
    },
    {
      icon: Users,
      title: "Cộng đồng gắn kết",
      description: "Xây dựng một không gian để mọi người chia sẻ đam mê ẩm thực và kết nối với nhau."
    },
    {
      icon: Lightbulb,
      title: "Sáng tạo và khám phá",
      description: "Khuyến khích việc thử nghiệm và khám phá những hương vị mới dựa trên tâm trạng cá nhân."
    },
    {
      icon: MapPin,
      title: "Địa phương hóa",
      description: "Tập trung vào ẩm thực địa phương tại Thủ Đức, góp phần quảng bá văn hóa ẩm thực Việt Nam."
    }
  ];

  const milestones = [
    { year: "2024", title: "Ra mắt COLOR BITES", description: "Khởi động dự án với mục tiêu kết nối tâm lý màu sắc và ẩm thực" },
    { year: "Q1 2024", title: "Phát triển trắc nghiệm", description: "Hoàn thiện hệ thống trắc nghiệm tâm lý màu sắc đầu tiên" },
    { year: "Q2 2024", title: "Cộng đồng 1000+", description: "Đạt mốc 1000 thành viên tham gia chia sẻ món ăn" },
    { year: "Q3 2024", title: "Bản đồ ẩm thực", description: "Ra mắt tính năng bản đồ khám phá địa điểm ẩm thực Thủ Đức" }
  ];

  const team = [
    {
      name: "Nguyễn Minh An",
      role: "Founder & CEO",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face",
      bio: "Chuyên gia tâm lý học màu sắc với 5 năm kinh nghiệm nghiên cứu về mối liên hệ giữa màu sắc và cảm xúc"
    },
    {
      name: "Trần Thu Hà",
      role: "Head of Community",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=150&h=150&fit=crop&crop=face",
      bio: "Food blogger nổi tiếng với hơn 100K followers, am hiểu sâu về ẩm thực Sài Gòn"
    },
    {
      name: "Lê Hoàng Nam",
      role: "Tech Lead",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face",
      bio: "Kỹ sư phần mềm với đam mê phát triển những ứng dụng có ý nghĩa xã hội"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
            <Info size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Về COLOR BITES
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kết nối cảm xúc với hương vị, tạo nên những trải nghiệm ẩm thực độc đáo qua lăng kính tâm lý học màu sắc
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Target size={32} className="text-primary-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Sứ mệnh của chúng tôi</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  COLOR BITES ra đời với mong muốn tạo ra một cách tiếp cận mới mẻ đối với ẩm thực - 
                  nơi mà tâm lý học màu sắc gặp gỡ hương vị, giúp mỗi người tìm ra những món ăn 
                  phù hợp nhất với cảm xúc và tâm trạng của mình.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Chúng tôi tin rằng việc ăn uống không chỉ đơn thuần là nạp năng lượng, mà còn là 
                  cách để chăm sóc tinh thần và kết nối với cộng đồng xung quanh.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                  alt="Colorful food"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 text-lg">
              Những nguyên tắc định hướng mọi hoạt động của COLOR BITES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hành trình phát triển</h2>
            <p className="text-gray-600 text-lg">
              Những cột mốc quan trọng trong quá trình xây dựng COLOR BITES
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ sáng lập</h2>
            <p className="text-gray-600 text-lg">
              Những con người đam mê đứng sau COLOR BITES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition Section */}
        <section className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <Award size={48} className="text-accent-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Được công nhận bởi cộng đồng
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              COLOR BITES tự hào là nền tảng đầu tiên tại Việt Nam ứng dụng tâm lý học màu sắc 
              vào ẩm thực, được đánh giá cao bởi các chuyên gia và người dùng.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
                <div className="text-gray-700">Người dùng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-500 mb-2">4.8⭐</div>
                <div className="text-gray-700">Đánh giá trung bình</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500 mb-2">1,250+</div>
                <div className="text-gray-700">Thành viên tích cực</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;