import React, { useState } from 'react';
import { Brain, RefreshCw, Share2, ArrowRight, CheckCircle, MapPin, Navigation } from 'lucide-react';
import { quizQuestions, quizResults } from '../data/mockData';
import { QuizResult } from '../types';

const ColorPsychologyQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'food' | 'drink' | 'style'>('food');

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const averageValue = Math.round(newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length);
      const quizResult = quizResults[averageValue] || quizResults[1];
      setResult(quizResult);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const shareResult = () => {
    if (result) {
      const text = `Tôi vừa hoàn thành trắc nghiệm tâm lý màu sắc trên COLOR BITES! Kết quả: ${result.emotion} 🎨`;
      navigator.share?.({
        title: 'COLOR BITES - Kết quả trắc nghiệm',
        text,
        url: window.location.href,
      }).catch(() => {
        // Fallback for browsers that don't support native sharing
        navigator.clipboard.writeText(`${text} ${window.location.href}`);
      });
    }
  };

  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" 
                 style={{ backgroundColor: result.dominantColor }}>
              <CheckCircle size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kết Quả Trắc Nghiệm
            </h1>
            <p className="text-xl text-gray-600">
              Cảm xúc chủ đạo của bạn
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold shadow-lg"
                   style={{ backgroundColor: result.dominantColor }}>
                {result.emotion}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {result.description}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
                <button
                  onClick={() => setSelectedCategory('food')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    selectedCategory === 'food'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🍽️ Món Ăn
                </button>
                <button
                  onClick={() => setSelectedCategory('drink')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    selectedCategory === 'drink'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🥤 Đồ Uống
                </button>
                <button
                  onClick={() => setSelectedCategory('style')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    selectedCategory === 'style'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  👗 Thời Trang
                </button>
              </div>
            </div>

            {/* Content based on selected category */}
            <div className="space-y-8">
              {selectedCategory === 'food' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {result.foodSuggestions.map((food, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={food.image}
                          alt={food.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{food.name}</h3>
                          <p className="text-gray-700 text-sm">{food.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Nguyên liệu:</h4>
                        <div className="flex flex-wrap gap-2">
                          {food.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Cách làm:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          {food.recipe.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Quán ăn gần đây:</h4>
                        <div className="space-y-3">
                          {food.nearbyRestaurants.map((restaurant, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900">{restaurant.name}</h5>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <MapPin size={14} className="mr-1" />
                                  {restaurant.address}
                                </p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <span className="text-sm text-yellow-600">⭐ {restaurant.rating}</span>
                                  <span className="text-sm text-green-600">{restaurant.priceRange}</span>
                                  <span className="text-sm text-blue-600">{restaurant.distance}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => openGoogleMaps(restaurant.address)}
                                className="ml-3 p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                title="Chỉ đường"
                              >
                                <Navigation size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedCategory === 'drink' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {result.drinkSuggestions.map((drink, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{drink.name}</h3>
                          <p className="text-gray-700 text-sm">{drink.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Nguyên liệu:</h4>
                        <div className="flex flex-wrap gap-2">
                          {drink.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Cách pha:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          {drink.recipe.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Quán cà phê gần đây:</h4>
                        <div className="space-y-3">
                          {drink.nearbyCafes.map((cafe, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900">{cafe.name}</h5>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <MapPin size={14} className="mr-1" />
                                  {cafe.address}
                                </p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <span className="text-sm text-yellow-600">⭐ {cafe.rating}</span>
                                  <span className="text-sm text-green-600">{cafe.priceRange}</span>
                                  <span className="text-sm text-blue-600">{cafe.distance}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => openGoogleMaps(cafe.address)}
                                className="ml-3 p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                title="Chỉ đường"
                              >
                                <Navigation size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedCategory === 'style' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {result.styleSuggestions.map((style, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{style.name}</h3>
                          <p className="text-gray-700 text-sm">{style.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Trang phục gợi ý:</h4>
                        <div className="flex flex-wrap gap-2">
                          {style.items.map((item, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Cửa hàng gần đây:</h4>
                        <div className="space-y-3">
                          {style.nearbyStores.map((store, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900">{store.name}</h5>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <MapPin size={14} className="mr-1" />
                                  {store.address}
                                </p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <span className="text-sm text-yellow-600">⭐ {store.rating}</span>
                                  <span className="text-sm text-green-600">{store.priceRange}</span>
                                  <span className="text-sm text-blue-600">{store.distance}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => openGoogleMaps(store.address)}
                                className="ml-3 p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                title="Chỉ đường"
                              >
                                <Navigation size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              <RefreshCw size={20} />
              <span>Làm Lại</span>
            </button>
            <button
              onClick={shareResult}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <Share2 size={20} />
              <span>Chia Sẻ Kết Quả</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
            <Brain size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trắc Nghiệm Tâm Lý Màu Sắc
          </h1>
          <p className="text-xl text-gray-600">
            Khám phá cảm xúc của bạn qua màu sắc
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Câu hỏi {currentQuestion + 1} / {quizQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {question.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="group text-left p-6 rounded-xl border-2 border-gray-200 hover:border-opacity-0 hover:shadow-lg transition-all duration-200"
                style={{
                  '--hover-bg': option.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = option.color + '10';
                  e.currentTarget.style.borderColor = option.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-white"
                    style={{ backgroundColor: option.color }}
                  ></div>
                  <span className="text-gray-800 font-medium group-hover:text-gray-900 flex-1">
                    {option.text}
                  </span>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">
            Hãy chọn đáp án phù hợp nhất với cảm xúc hiện tại của bạn
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPsychologyQuiz;