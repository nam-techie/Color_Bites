import React, { useState } from 'react';
import { 
  Map, 
  MapPin, 
  Star, 
  Navigation, 
  Phone, 
  Clock,
  Filter,
  Search,
  Camera,
  Heart,
  ThumbsUp
} from 'lucide-react';
import { travelLocations } from '../data/mockData';
import { TravelLocation } from '../types';

const TravelMap: React.FC = () => {
  const [locations, setLocations] = useState<TravelLocation[]>(travelLocations);
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const locationTypes = [
    { value: 'all', label: 'Tất cả', icon: '🍽️' },
    { value: 'restaurant', label: 'Nhà hàng', icon: '🏪' },
    { value: 'cafe', label: 'Quán cà phê', icon: '☕' },
    { value: 'street_food', label: 'Ăn vặt', icon: '🥘' },
    { value: 'dessert', label: 'Tráng miệng', icon: '🍨' },
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesType = selectedType === 'all' || location.type === selectedType;
    return matchesSearch && matchesType;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const handleReviewLike = (locationId: number, reviewId: number) => {
    setLocations(prevLocations =>
      prevLocations.map(location =>
        location.id === locationId
          ? {
              ...location,
              reviews: location.reviews.map(review =>
                review.id === reviewId
                  ? { ...review, likes: review.likes + 1 }
                  : review
              )
            }
          : location
      )
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
            <Map size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bản Đồ Ẩm Thực Thủ Đức
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những địa điểm ẩm thực tuyệt vời tại Thủ Đức, TP.HCM. Chia sẻ trải nghiệm và tìm kiếm món ăn phù hợp với tâm trạng
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm địa điểm, món ăn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-600 flex-shrink-0" />
            {locationTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedType === type.value
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{type.icon}</span>
                <span>{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-96 lg:h-[700px] flex flex-col">
              <div className="text-center mb-6">
                <MapPin size={64} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bản Đồ Tương Tác</h3>
                <p className="text-gray-600 mb-4">
                  Hiển thị {filteredLocations.length} địa điểm tại Thủ Đức
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className="bg-white rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin size={16} className="text-primary-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900 truncate">
                            {location.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {location.address}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {renderStars(location.rating)}
                            <span className="text-xs text-gray-600">({location.rating})</span>
                          </div>
                          <span className="text-xs text-green-600 font-medium">
                            {location.priceRange.split(' - ')[0]}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {location.specialties.slice(0, 2).map((specialty, index) => (
                            <span
                              key={index}
                              className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">
              Địa điểm gợi ý ({filteredLocations.length})
            </h2>
            
            <div className="space-y-4 max-h-[700px] overflow-y-auto">
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className={`bg-white rounded-xl p-4 shadow-lg cursor-pointer transition-all hover:shadow-xl ${
                    selectedLocation?.id === location.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {location.address}
                      </p>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(location.rating)}
                          <span className="text-sm text-gray-600">({location.rating})</span>
                        </div>
                        <span className="text-sm text-green-600 font-medium">
                          {location.priceRange}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                        <Clock size={12} />
                        <span>{location.openHours}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {location.specialties.slice(0, 3).map((specialty, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Detail Modal */}
        {selectedLocation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedLocation.name}
                    </h2>
                    <p className="text-gray-600 flex items-center space-x-2 mb-2">
                      <MapPin size={16} />
                      <span>{selectedLocation.address}</span>
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        {renderStars(selectedLocation.rating)}
                        <span className="text-sm text-gray-600 ml-1">({selectedLocation.rating})</span>
                      </div>
                      <span className="text-green-600 font-medium">{selectedLocation.priceRange}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedLocation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">📍 Thông tin chi tiết</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-blue-500" />
                        <span className="font-medium">Giờ mở cửa:</span>
                        <span>{selectedLocation.openHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-green-500" />
                        <span className="font-medium">Điện thoại:</span>
                        <span>{selectedLocation.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600 font-medium">💰 Giá:</span>
                        <span>{selectedLocation.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">✨ Tiện ích</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🍽️ Món đặc sản</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-2 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">💬 Đánh giá từ cộng đồng</h3>
                  <div className="space-y-4">
                    {selectedLocation.reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3 mb-3">
                          <img
                            src={review.authorAvatar}
                            alt={review.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900">{review.author}</span>
                              <div className="flex items-center space-x-1">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.createdAt).toLocaleDateString('vi-VN')}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">{review.content}</p>
                        {review.images.length > 0 && (
                          <div className="flex space-x-2 mb-3">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt="Review"
                                className="w-20 h-20 rounded-lg object-cover"
                              />
                            ))}
                          </div>
                        )}
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleReviewLike(selectedLocation.id, review.id)}
                            className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary-500 transition-colors"
                          >
                            <ThumbsUp size={14} />
                            <span>{review.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => openGoogleMaps(selectedLocation.address)}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Navigation size={20} />
                    <span>Chỉ đường</span>
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                    <Camera size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelMap;