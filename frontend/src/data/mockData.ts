import { QuizQuestion, QuizResult, FoodPost, TravelLocation, Comment, Review } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hôm nay bạn cảm thấy thế nào?",
    options: [
      { text: "Năng động và tràn đầy năng lượng", color: "#ef4444", emotion: "energetic", value: 1 },
      { text: "Bình yên và thư thái", color: "#22c55e", emotion: "calm", value: 2 },
      { text: "Vui vẻ và lạc quan", color: "#eab308", emotion: "happy", value: 3 },
      { text: "Tập trung và quyết đoán", color: "#64748b", emotion: "focused", value: 4 }
    ]
  },
  {
    id: 2,
    question: "Khi nhìn thấy bữa ăn, bạn chú ý đến điều gì đầu tiên?",
    options: [
      { text: "Màu sắc rực rỡ và bắt mắt", color: "#ef4444", emotion: "vibrant", value: 1 },
      { text: "Sự hài hòa và cân bằng", color: "#22c55e", emotion: "balanced", value: 2 },
      { text: "Sự sáng tạo trong cách trình bày", color: "#eab308", emotion: "creative", value: 3 },
      { text: "Tính thực tế và dinh dưỡng", color: "#64748b", emotion: "practical", value: 4 }
    ]
  },
  {
    id: 3,
    question: "Bạn thích ăn uống ở đâu nhất?",
    options: [
      { text: "Quán ăn sôi động, đông người", color: "#ef4444", emotion: "social", value: 1 },
      { text: "Không gian yên tĩnh, riêng tư", color: "#22c55e", emotion: "intimate", value: 2 },
      { text: "Nơi có view đẹp, Instagram-able", color: "#eab308", emotion: "aesthetic", value: 3 },
      { text: "Chỗ quen thuộc, tin cậy", color: "#64748b", emotion: "familiar", value: 4 }
    ]
  },
  {
    id: 4,
    question: "Màu sắc nào khiến bạn cảm thấy thèm ăn nhất?",
    options: [
      { text: "Đỏ cam - như cà chua, ớt", color: "#ef4444", emotion: "passionate", value: 1 },
      { text: "Xanh lá - như rau củ tươi", color: "#22c55e", emotion: "fresh", value: 2 },
      { text: "Vàng cam - như bánh mì, khoai", color: "#eab308", emotion: "warm", value: 3 },
      { text: "Nâu - như cà phê, chocolate", color: "#64748b", emotion: "comforting", value: 4 }
    ]
  },
  {
    id: 5,
    question: "Khi stress, bạn thường muốn ăn gì?",
    options: [
      { text: "Đồ cay nóng để giải tỏa", color: "#ef4444", emotion: "release", value: 1 },
      { text: "Đồ thanh mát để dịu lại", color: "#22c55e", emotion: "soothing", value: 2 },
      { text: "Đồ ngọt để cải thiện tâm trạng", color: "#eab308", emotion: "uplifting", value: 3 },
      { text: "Comfort food quen thuộc", color: "#64748b", emotion: "nostalgic", value: 4 }
    ]
  },
  {
    id: 6,
    question: "Phong cách ăn mặc nào phù hợp với tâm trạng hiện tại của bạn?",
    options: [
      { text: "Trang phục nổi bật, thu hút sự chú ý", color: "#ef4444", emotion: "bold", value: 1 },
      { text: "Outfit nhẹ nhàng, thoải mái", color: "#22c55e", emotion: "relaxed", value: 2 },
      { text: "Style sáng sủa, trẻ trung", color: "#eab308", emotion: "youthful", value: 3 },
      { text: "Trang phục lịch sự, chuyên nghiệp", color: "#64748b", emotion: "professional", value: 4 }
    ]
  }
];

export const quizResults: Record<number, QuizResult> = {
  1: {
    dominantColor: "#ef4444",
    emotion: "Năng động & Nhiệt huyết",
    foodSuggestions: [
      {
        name: "Bún bò Huế cay nồng",
        description: "Món ăn đậm đà với màu đỏ rực từ ớt và tôm chua, phù hợp với tâm trạng năng động",
        recipe: [
          "Niêu xương heo, bò trong 2-3 tiếng",
          "Phi thơm sả, hành tím với dầu annatto",
          "Nêm nếm với mắm ruốc, muối, đường",
          "Trụng bánh bún qua nước sôi",
          "Bày bún, thịt, chả cua vào tô"
        ],
        ingredients: ["Bún bò", "Xương heo", "Thịt bò", "Chả cua", "Sả", "Ớt", "Mắm ruốc"],
        nearbyRestaurants: [
          { name: "Bún Bò Huế Cô Ba", address: "123 Võ Văn Ngân, Thủ Đức", rating: 4.5, priceRange: "30-50k", distance: "0.5km" },
          { name: "Quán Bún Bò Miền Trung", address: "456 Phạm Văn Đồng, Thủ Đức", rating: 4.3, priceRange: "25-45k", distance: "1.2km" }
        ],
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg"
      },
      {
        name: "Bánh tráng nướng",
        description: "Món ăn vặt với màu đỏ cam từ tôm khô và mắm ruốc, mang lại cảm giác hứng khởi",
        recipe: [
          "Nướng bánh tráng trên than hồng",
          "Phết đều mắm ruốc lên mặt bánh",
          "Rắc tôm khô băm nhuyễn",
          "Đập trứng cút lên trên",
          "Cuộn lại và chấm tương ớt"
        ],
        ingredients: ["Bánh tráng", "Mắm ruốc", "Tôm khô", "Trứng cút", "Hành lá", "Tương ớt"],
        nearbyRestaurants: [
          { name: "Bánh Tráng Nướng Đại Học", address: "789 Kha Vạn Cân, Thủ Đức", rating: 4.7, priceRange: "15-25k", distance: "0.8km" },
          { name: "Cô Tư Bánh Tráng", address: "321 Hoàng Diệu 2, Thủ Đức", rating: 4.4, priceRange: "12-20k", distance: "1.5km" }
        ],
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
      }
    ],
    drinkSuggestions: [
      {
        name: "Trà đào cam sả",
        description: "Thức uống màu đỏ cam tươi mát, giúp cân bằng cảm xúc mạnh mẽ",
        recipe: [
          "Pha trà đen đậm đà",
          "Thêm đào ngâm và cam tươi",
          "Cho sả đập dập",
          "Thêm đá và mật ong"
        ],
        ingredients: ["Trà đen", "Đào ngâm", "Cam tươi", "Sả", "Mật ong", "Đá"],
        nearbyCafes: [
          { name: "Gong Cha Thủ Đức", address: "Vincom Thủ Đức, Võ Văn Ngân", rating: 4.2, priceRange: "35-55k", distance: "0.3km" },
          { name: "Phúc Long Coffee", address: "ĐHQG TP.HCM, Linh Trung", rating: 4.1, priceRange: "30-50k", distance: "1.0km" }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
      }
    ],
    styleSuggestions: [
      {
        name: "Trang phục năng động",
        description: "Phong cách thể thao với điểm nhấn màu đỏ cam, thể hiện sự tự tin",
        items: ["Áo thun đỏ coral", "Quần jogger", "Giày thể thao trắng", "Phụ kiện vàng"],
        nearbyStores: [
          { name: "Adidas Store", address: "Gigamall Thủ Đức", rating: 4.3, priceRange: "500k-2tr", distance: "2.0km" },
          { name: "Uniqlo", address: "Vincom Thủ Đức", rating: 4.4, priceRange: "200k-800k", distance: "0.3km" }
        ],
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
      }
    ],
    description: "Bạn đang tràn đầy năng lượng! Hãy thử những món ăn cay nồng và trang phục nổi bật để thể hiện cá tính mạnh mẽ của mình."
  },
  2: {
    dominantColor: "#22c55e",
    emotion: "Bình yên & Thư thái",
    foodSuggestions: [
      {
        name: "Salad rau củ tươi",
        description: "Món ăn với màu xanh tự nhiên, mang lại cảm giác thanh tịnh và cân bằng",
        recipe: [
          "Rửa sạch các loại rau xanh",
          "Thái nhỏ cà chua, dưa leo",
          "Trộn đều với dầu olive",
          "Rắc hạt óc chó và phô mai",
          "Nêm nếm với muối, tiêu"
        ],
        ingredients: ["Xà lách", "Cà chua cherry", "Dưa leo", "Bơ", "Hạt óc chó", "Phô mai feta"],
        nearbyRestaurants: [
          { name: "Salad Box", address: "234 Phạm Văn Đồng, Thủ Đức", rating: 4.6, priceRange: "45-75k", distance: "0.7km" },
          { name: "Green Garden", address: "567 Kha Vạn Cân, Thủ Đức", rating: 4.4, priceRange: "40-70k", distance: "1.1km" }
        ],
        image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
      },
      {
        name: "Chè xanh mát lạnh",
        description: "Món tráng miệng với màu xanh dịu mát, giúp thư giãn tinh thần",
        recipe: [
          "Nấu đậu xanh với lá dứa",
          "Nấu sữa dừa với muối",
          "Pha bột năng với nước lạnh",
          "Trộn tất cả nguyên liệu",
          "Cho đá và thưởng thức"
        ],
        ingredients: ["Đậu xanh", "Sữa dừa", "Bột năng", "Lá dứa", "Đường phèn"],
        nearbyRestaurants: [
          { name: "Chè Cung Đình", address: "890 Võ Văn Ngân, Thủ Đức", rating: 4.5, priceRange: "15-30k", distance: "0.9km" },
          { name: "Chè Bà Ba", address: "345 Hoàng Diệu 2, Thủ Đức", rating: 4.3, priceRange: "12-25k", distance: "1.3km" }
        ],
        image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
      }
    ],
    drinkSuggestions: [
      {
        name: "Trà xanh matcha",
        description: "Thức uống màu xanh thanh khiết, mang lại sự tĩnh lặng và tập trung",
        recipe: [
          "Đun nước đến 80°C",
          "Cho bột matcha vào chén",
          "Rót nước và đánh đều",
          "Thêm sữa tươi nếu muốn",
          "Trang trí với bọt sữa"
        ],
        ingredients: ["Bột matcha", "Nước nóng", "Sữa tươi", "Đường"],
        nearbyCafes: [
          { name: "Starbucks Thủ Đức", address: "Vincom Thủ Đức", rating: 4.2, priceRange: "55-85k", distance: "0.3km" },
          { name: "Matcha House", address: "678 Kha Vạn Cân, Thủ Đức", rating: 4.5, priceRange: "40-65k", distance: "0.8km" }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
      }
    ],
    styleSuggestions: [
      {
        name: "Phong cách tối giản",
        description: "Trang phục nhẹ nhàng với tông màu xanh pastel, tạo cảm giác thư thái",
        items: ["Áo thun xanh mint", "Quần jeans nhạt", "Giày sneaker trắng", "Túi canvas"],
        nearbyStores: [
          { name: "Muji", address: "Vincom Thủ Đức", rating: 4.5, priceRange: "300k-1tr", distance: "0.3km" },
          { name: "H&M", address: "Gigamall Thủ Đức", rating: 4.2, priceRange: "200k-600k", distance: "2.0km" }
        ],
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
      }
    ],
    description: "Tâm trạng của bạn đang rất thanh thản. Hãy chọn những món ăn thanh đạm và trang phục thoải mái để duy trì sự cân bằng này."
  },
  3: {
    dominantColor: "#eab308",
    emotion: "Vui vẻ & Lạc quan",
    foodSuggestions: [
      {
        name: "Bánh mì thập cẩm",
        description: "Món ăn với màu vàng từ bánh mì giòn, mang lại niềm vui và năng lượng tích cực",
        recipe: [
          "Nướng bánh mì đến vàng giòn",
          "Phết bơ và pate",
          "Thêm chả lụa, jambon",
          "Cho rau thơm, dưa chua",
          "Rưới tương ớt và mayonnaise"
        ],
        ingredients: ["Bánh mì", "Pate", "Chả lụa", "Jambon", "Rau thơm", "Dưa chua"],
        nearbyRestaurants: [
          { name: "Bánh Mì Huỳnh Hoa", address: "123 Phạm Văn Đồng, Thủ Đức", rating: 4.8, priceRange: "20-35k", distance: "0.6km" },
          { name: "Bánh Mì Cô Giang", address: "456 Võ Văn Ngân, Thủ Đức", rating: 4.6, priceRange: "18-30k", distance: "0.9km" }
        ],
        image: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg"
      }
    ],
    drinkSuggestions: [
      {
        name: "Smoothie xoài",
        description: "Thức uống màu vàng rực rỡ, tươi mát và đầy vitamin",
        recipe: [
          "Gọt vỏ và cắt xoài chín",
          "Cho vào máy xay với đá",
          "Thêm sữa chua và mật ong",
          "Xay đều trong 2 phút",
          "Rót ra ly và trang trí"
        ],
        ingredients: ["Xoài chín", "Sữa chua", "Mật ong", "Đá"],
        nearbyCafes: [
          { name: "Juice Station", address: "789 Kha Vạn Cân, Thủ Đức", rating: 4.4, priceRange: "25-45k", distance: "0.5km" },
          { name: "Fresh Garden", address: "321 Hoàng Diệu 2, Thủ Đức", rating: 4.3, priceRange: "30-50k", distance: "1.2km" }
        ],
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg"
      }
    ],
    styleSuggestions: [
      {
        name: "Phong cách trẻ trung",
        description: "Trang phục với điểm nhấn màu vàng, thể hiện sự vui tươi và năng động",
        items: ["Áo sơ mi vàng", "Chân váy jean", "Giày canvas", "Phụ kiện màu sắc"],
        nearbyStores: [
          { name: "Zara", address: "Vincom Thủ Đức", rating: 4.3, priceRange: "400k-1.5tr", distance: "0.3km" },
          { name: "Cotton On", address: "Gigamall Thủ Đức", rating: 4.1, priceRange: "200k-700k", distance: "2.0km" }
        ],
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
      }
    ],
    description: "Bạn đang rất vui vẻ và tích cực! Hãy thưởng thức những món ăn đầy màu sắc và mặc trang phục tươi sáng để lan tỏa năng lượng tích cực."
  },
  4: {
    dominantColor: "#64748b",
    emotion: "Tập trung & Ổn định",
    foodSuggestions: [
      {
        name: "Cơm tấm sườn nướng",
        description: "Món ăn truyền thống với màu nâu ấm áp, mang lại cảm giác quen thuộc và ổn định",
        recipe: [
          "Ướp sườn với nước mắm, đường",
          "Nướng sườn trên than hồng",
          "Nấu cơm tấm dẻo thơm",
          "Chiên trứng ốp la",
          "Bày cơm, sườn, trứng ra đĩa"
        ],
        ingredients: ["Cơm tấm", "Sườn heo", "Trứng", "Nước mắm", "Đường", "Tỏi"],
        nearbyRestaurants: [
          { name: "Cơm Tấm Sài Gòn", address: "567 Võ Văn Ngân, Thủ Đức", rating: 4.7, priceRange: "35-55k", distance: "0.4km" },
          { name: "Quán Cơm Tấm Ba Ghiền", address: "890 Phạm Văn Đồng, Thủ Đức", rating: 4.5, priceRange: "30-50k", distance: "1.0km" }
        ],
        image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg"
      }
    ],
    drinkSuggestions: [
      {
        name: "Cà phê sữa đá",
        description: "Thức uống màu nâu đậm đà, giúp tăng cường sự tập trung và tỉnh táo",
        recipe: [
          "Pha cà phê phin đậm đà",
          "Cho sữa đặc vào ly",
          "Rót cà phê từ từ",
          "Thêm đá viên",
          "Khuấy đều và thưởng thức"
        ],
        ingredients: ["Cà phê phin", "Sữa đặc", "Đá"],
        nearbyCafes: [
          { name: "Trung Nguyên Coffee", address: "234 Kha Vạn Cân, Thủ Đức", rating: 4.4, priceRange: "20-40k", distance: "0.7km" },
          { name: "Highlands Coffee", address: "ĐHQG TP.HCM", rating: 4.2, priceRange: "25-45k", distance: "1.1km" }
        ],
        image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
      }
    ],
    styleSuggestions: [
      {
        name: "Phong cách công sở",
        description: "Trang phục lịch sự với tông màu trung tính, thể hiện sự chuyên nghiệp",
        items: ["Áo sơ mi trắng", "Quần âu xám", "Giày da đen", "Cà vạt"],
        nearbyStores: [
          { name: "The Men", address: "Vincom Thủ Đức", rating: 4.3, priceRange: "500k-2tr", distance: "0.3km" },
          { name: "Owen", address: "Gigamall Thủ Đức", rating: 4.2, priceRange: "400k-1.5tr", distance: "2.0km" }
        ],
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
      }
    ],
    description: "Bạn đang trong trạng thái tập trung và ổn định. Hãy chọn những món ăn quen thuộc và trang phục lịch sự để duy trì sự chuyên nghiệp."
  }
};

export const foodPosts: FoodPost[] = [
  {
    id: 1,
    title: "Bánh Tráng Nướng Đỏ Rực - Món Ăn Vặt Kinh Điển Sài Gòn",
    description: "Với màu đỏ cam rực rỡ từ tôm khô và mắm ruốc, bánh tráng nướng không chỉ ngon mà còn mang đến cảm giác hạnh phúc tức thì! Mình đã thử làm tại nhà và kết quả vượt ngoài mong đợi. Bí quyết là phải nướng bánh tráng trên lửa than thật nhỏ để bánh giòn đều, không bị cháy.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    author: "Mai Anh",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
    ingredients: [
      "Bánh tráng mỏng",
      "Tôm khô",
      "Mắm ruốc",
      "Trứng cút",
      "Hành lá",
      "Mayonnaise",
      "Tương ớt"
    ],
    recipe: [
      "Nướng bánh tráng trên than hồng đến khi giòn",
      "Phết mắm ruốc đều trên mặt bánh",
      "Rắc tôm khô băm nhuyễn",
      "Đập trứng cút lên trên",
      "Cuộn bánh và chấm với tương ớt"
    ],
    likes: 156,
    comments: [
      {
        id: 1,
        author: "Hoàng Minh",
        authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Nhìn màu đỏ này đã thấy thèm rồi! Phải thử ngay thôi 🔥 Cho mình hỏi mắm ruốc mua ở đâu ngon nhất vậy?",
        likes: 12,
        replies: [
          {
            id: 1,
            author: "Mai Anh",
            authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
            content: "Mình mua ở chợ Thủ Đức nha, quầy chị Năm có mắm ruốc rất thơm!",
            likes: 5,
            createdAt: "2024-01-15T10:35:00Z"
          }
        ],
        createdAt: "2024-01-15T10:30:00Z"
      },
      {
        id: 2,
        author: "Thanh Tú",
        authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Mình cũng hay làm món này! Tip nhỏ là nên để bánh tráng khô ráo trước khi nướng, sẽ giòn hơn nhiều đó 😊",
        likes: 8,
        replies: [],
        createdAt: "2024-01-15T11:15:00Z"
      },
      {
        id: 3,
        author: "Đức Anh",
        authorAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Quá ngon! Vừa làm theo công thức này và cả nhà đều khen. Cảm ơn bạn đã chia sẻ ❤️",
        likes: 15,
        replies: [
          {
            id: 2,
            author: "Mai Anh",
            authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
            content: "Vui quá! Mình sẽ chia sẻ thêm nhiều công thức hay ho khác nữa nhé!",
            likes: 3,
            createdAt: "2024-01-15T14:20:00Z"
          }
        ],
        createdAt: "2024-01-15T14:00:00Z"
      }
    ],
    tags: ["Đỏ", "Cay", "Ăn vặt", "Sài Gòn"],
    createdAt: "2024-01-15T08:00:00Z"
  },
  {
    id: 2,
    title: "Salad Xanh Mát Lạnh - Thanh Lọc Cơ Thể",
    description: "Khi cần một chút bình yên cho tâm hồn, salad xanh mát với đủ loại rau củ tươi ngon chính là lựa chọn hoàn hảo! Màu xanh của rau củ không chỉ đẹp mắt mà còn giúp tinh thần thư thái. Mình thường làm món này vào những ngày nóng nực hoặc khi cảm thấy cần detox.",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    author: "Thanh Tú",
    authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
    ingredients: [
      "Xà lách tươi",
      "Cà chua cherry",
      "Dưa leo",
      "Bơ",
      "Hạt óc chó",
      "Phô mai feta",
      "Dầu olive",
      "Chanh tươi"
    ],
    recipe: [
      "Rửa sạch và thái nhỏ tất cả rau củ",
      "Xếp rau vào đĩa một cách nghệ thuật",
      "Rắc phô mai feta và hạt óc chó",
      "Pha nước sốt từ dầu olive và chanh",
      "Rưới đều và thưởng thức"
    ],
    likes: 89,
    comments: [
      {
        id: 4,
        author: "Linh Chi",
        authorAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Màu xanh này nhìn mát mắt quá! Chắc ăn xong sẽ thấy thư thái ngay 🌿 Cho mình hỏi phô mai feta có thể thay bằng gì khác không?",
        likes: 6,
        replies: [
          {
            id: 3,
            author: "Thanh Tú",
            authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
            content: "Có thể thay bằng phô mai mozzarella hoặc cottage cheese đều được nha!",
            likes: 4,
            createdAt: "2024-01-14T15:25:00Z"
          }
        ],
        createdAt: "2024-01-14T15:20:00Z"
      },
      {
        id: 5,
        author: "Minh Tuấn",
        authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Salad này perfect cho những ai đang ăn kiêng! Vừa ngon vừa healthy 💚",
        likes: 11,
        replies: [],
        createdAt: "2024-01-14T16:30:00Z"
      }
    ],
    tags: ["Xanh", "Khỏe mạnh", "Thanh lọc", "Vegetarian"],
    createdAt: "2024-01-14T12:00:00Z"
  },
  {
    id: 3,
    title: "Bánh Flan Vàng Óng - Ngọt Ngào Từng Muỗng",
    description: "Màu vàng rực rỡ của bánh flan như mang đến niềm vui tức thì. Mềm mại, ngọt ngào - hoàn hảo cho những ngày cần một chút ngọt ngào! Bí quyết để có bánh flan mịn màng là phải lọc hỗn hợp trứng sữa thật kỹ và hấp bằng lửa nhỏ.",
    image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg",
    author: "Phương Linh",
    authorAvatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=100&h=100&fit=crop&crop=face",
    ingredients: [
      "Trứng gà",
      "Sữa tươi",
      "Đường trắng",
      "Vanilla",
      "Caramel",
      "Một chút muối"
    ],
    recipe: [
      "Đánh đều trứng với sữa và đường",
      "Thêm vanilla và lọc qua rây",
      "Nấu caramel vàng óng cho đáy khuôn",
      "Đổ hỗn hợp trứng vào khuôn",
      "Hấp 30 phút và để nguội"
    ],
    likes: 124,
    comments: [
      {
        id: 6,
        author: "Đức Anh",
        authorAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Màu vàng này đẹp quá! Nhìn thôi đã thấy ngọt ngào rồi 💛 Mình hay bị bánh flan bị lỗ, có cách nào khắc phục không?",
        likes: 9,
        replies: [
          {
            id: 4,
            author: "Phương Linh",
            authorAvatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=100&h=100&fit=crop&crop=face",
            content: "Bí quyết là đánh trứng nhẹ tay, không tạo bọt và hấp lửa nhỏ thôi nha!",
            likes: 7,
            createdAt: "2024-01-13T20:20:00Z"
          }
        ],
        createdAt: "2024-01-13T20:15:00Z"
      },
      {
        id: 7,
        author: "Thu Hằng",
        authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Bánh flan tự làm ngon hơn mua ngoài nhiều! Cảm ơn công thức chi tiết 🥰",
        likes: 13,
        replies: [],
        createdAt: "2024-01-13T21:00:00Z"
      }
    ],
    tags: ["Vàng", "Ngọt", "Dessert", "Homemade"],
    createdAt: "2024-01-13T18:00:00Z"
  },
  {
    id: 4,
    title: "Phở Bò Truyền Thống - Hương Vị Quê Nhà",
    description: "Tô phở với nước dùng trong vắt, thịt bò mềm ngọt và bánh phở dai dai. Màu nâu ấm áp của nước dùng mang lại cảm giác bình yên như về nhà. Mình đã mất 3 tiếng để niêu nước dùng này, nhưng kết quả thật xứng đáng!",
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
    author: "Hoàng Long",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
    ingredients: [
      "Xương bò",
      "Thịt bò",
      "Bánh phở",
      "Hành tây",
      "Gừng",
      "Quế",
      "Hồi",
      "Rau thơm"
    ],
    recipe: [
      "Niêu xương bò trong 3-4 tiếng",
      "Nướng hành tây, gừng thơm",
      "Cho gia vị vào nước dùng",
      "Trụng bánh phở qua nước sôi",
      "Bày thịt bò, rau thơm lên tô"
    ],
    likes: 203,
    comments: [
      {
        id: 8,
        author: "Bảo Ngọc",
        authorAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Phở nhà làm ngon nhất! Nước dùng trong vắt thế này chắc phải niêu lâu lắm 🍜",
        likes: 18,
        replies: [
          {
            id: 5,
            author: "Hoàng Long",
            authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
            content: "Đúng rồi, mình niêu từ 5h sáng luôn! Nhưng ngon thì xứng đáng 😄",
            likes: 12,
            createdAt: "2024-01-12T09:15:00Z"
          }
        ],
        createdAt: "2024-01-12T09:00:00Z"
      }
    ],
    tags: ["Nâu", "Truyền thống", "Phở", "Comfort food"],
    createdAt: "2024-01-12T08:00:00Z"
  },
  {
    id: 5,
    title: "Smoothie Bowl Cầu Vồng - Năng Lượng Tích Cực",
    description: "Khi muốn bắt đầu ngày mới với năng lượng tích cực, smoothie bowl đầy màu sắc này chính là lựa chọn hoàn hảo! Mỗi màu sắc đại diện cho một loại trái cây khác nhau, vừa ngon vừa bổ dưỡng.",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    author: "Kim Ngân",
    authorAvatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=100&h=100&fit=crop&crop=face",
    ingredients: [
      "Chuối",
      "Dâu tây",
      "Xoài",
      "Việt quất",
      "Granola",
      "Hạt chia",
      "Dừa nạo",
      "Mật ong"
    ],
    recipe: [
      "Xay chuối với một ít sữa dừa",
      "Đổ vào bowl làm base",
      "Sắp xếp trái cây theo màu sắc",
      "Rắc granola và hạt chia",
      "Trang trí với dừa nạo"
    ],
    likes: 167,
    comments: [
      {
        id: 9,
        author: "Minh Anh",
        authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
        content: "Đẹp như tranh vậy! Ăn sáng thế này chắc cả ngày đều vui 🌈",
        likes: 14,
        replies: [],
        createdAt: "2024-01-11T07:30:00Z"
      }
    ],
    tags: ["Nhiều màu", "Healthy", "Breakfast", "Smoothie"],
    createdAt: "2024-01-11T07:00:00Z"
  }
];

export const travelLocations: TravelLocation[] = [
  {
    id: 1,
    name: "Quán Cơm Tấm Sài Gòn",
    address: "123 Đường Võ Văn Ngân, Thủ Đức, TP.HCM",
    type: "restaurant",
    rating: 4.5,
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
    description: "Quán cơm tấm truyền thống với hương vị đậm đà, phục vụ từ 1985. Đặc biệt nổi tiếng với sườn nướng thơm lừng và chả trứng béo ngậy. Không gian quán rộng rãi, thoáng mát với phong cách bình dân gần gũi.",
    coordinates: [106.7617, 10.8505],
    priceRange: "50,000 - 100,000 VNĐ",
    specialties: ["Cơm tấm sườn nướng", "Chả trứng", "Tôm nướng", "Bì chả"],
    openHours: "6:00 - 22:00",
    phone: "0283 123 4567",
    features: ["Wifi miễn phí", "Điều hòa", "Bãi đỗ xe", "Thanh toán thẻ"],
    reviews: [
      {
        id: 1,
        author: "Minh Tuấn",
        authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Cơm tấm ở đây ngon nhất Thủ Đức! Sườn nướng thơm phức, nước mắm chua ngọt vừa miệng. Phục vụ nhanh, giá cả hợp lý. Sẽ quay lại nhiều lần!",
        images: ["https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg"],
        likes: 23,
        createdAt: "2024-01-10T12:00:00Z"
      },
      {
        id: 2,
        author: "Thu Hằng",
        authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        content: "Quán ăn gia đình, không gian thoải mái. Cơm tấm ngon, chả trứng đặc biệt thơm. Chỉ có điều đôi khi hơi đông nên phải chờ một chút.",
        images: [],
        likes: 15,
        createdAt: "2024-01-08T19:30:00Z"
      }
    ]
  },
  {
    id: 2,
    name: "Highlands Coffee - ĐHQG",
    address: "Khu phố 6, Phường Linh Trung, Thủ Đức, TP.HCM",
    type: "cafe",
    rating: 4.2,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    description: "Không gian thoáng mát, view đẹp nhìn ra đại học. Thích hợp để học bài, làm việc nhóm hoặc hẹn hò. WiFi mạnh, điều hòa mát mẻ. Menu đa dạng từ cà phê truyền thống đến các loại thức uống hiện đại.",
    coordinates: [106.8017, 10.8700],
    priceRange: "30,000 - 80,000 VNĐ",
    specialties: ["Cà phê phin", "Freeze trà xanh", "Bánh mì", "Smoothie"],
    openHours: "6:30 - 23:00",
    phone: "0283 234 5678",
    features: ["Wifi miễn phí", "Điều hòa", "Không gian học tập", "Ổ cắm điện"],
    reviews: [
      {
        id: 3,
        author: "Thu Hằng",
        authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        content: "Chỗ này học bài rất ổn, không gian yên tĩnh và WiFi nhanh. Trà xanh freeze ngon lắm! Nhân viên phục vụ nhiệt tình.",
        images: [],
        likes: 18,
        createdAt: "2024-01-09T15:30:00Z"
      },
      {
        id: 4,
        author: "Đức Anh",
        authorAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Cà phê phin ở đây đậm đà, thơm ngon. Không gian rộng rãi, view nhìn ra trường đại học rất đẹp. Giá cả hợp lý cho sinh viên.",
        images: ["https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"],
        likes: 12,
        createdAt: "2024-01-07T10:15:00Z"
      }
    ]
  },
  {
    id: 3,
    name: "Chợ Đêm Thủ Đức",
    address: "Đường Kha Vạn Cân, Phường Linh Chiểu, Thủ Đức, TP.HCM",
    type: "street_food",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "Thiên đường ẩm thực đường phố với hàng trăm món ăn vặt. Sôi động từ 18h đến 23h hàng ngày. Giá cả phải chăng, hương vị đa dạng. Không gian mở, thoáng mát với nhiều bàn ghế nhựa truyền thống.",
    coordinates: [106.7800, 10.8400],
    priceRange: "10,000 - 50,000 VNĐ",
    specialties: ["Bánh tráng nướng", "Chè thập cẩm", "Bánh xèo mini", "Nem nướng", "Ốc luộc"],
    openHours: "18:00 - 23:00",
    phone: "Không có",
    features: ["Không gian mở", "Đa dạng món ăn", "Giá rẻ", "Sôi động"],
    reviews: [
      {
        id: 5,
        author: "Hoàng Long",
        authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Chợ đêm này có quá nhiều món ngon! Bánh tráng nướng ở gốc cây bàng ngon nhất nha. Giá cả sinh viên, không gian sôi động.",
        images: ["https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"],
        likes: 31,
        createdAt: "2024-01-08T21:00:00Z"
      },
      {
        id: 6,
        author: "Linh Chi",
        authorAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Mê chè thập cẩm ở đây! Ngọt vừa phải, topping đầy đủ. Chợ đêm rất đông vui, thích hợp đi với bạn bè.",
        images: [],
        likes: 19,
        createdAt: "2024-01-06T20:45:00Z"
      }
    ]
  },
  {
    id: 4,
    name: "Kem Tràng Tiền - Chi Nhánh Thủ Đức",
    address: "456 Đường Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, TP.HCM",
    type: "dessert",
    rating: 4.3,
    image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg",
    description: "Thương hiệu kem nổi tiếng từ Hà Nội với hơn 20 vị khác nhau. Đặc biệt có kem sầu riêng và kem dừa dầm rất được yêu thích. Không gian quán nhỏ xinh, trang trí theo phong cách vintage.",
    coordinates: [106.7200, 10.8600],
    priceRange: "15,000 - 40,000 VNĐ",
    specialties: ["Kem sầu riêng", "Kem dừa dầm", "Kem chocolate", "Kem vani"],
    openHours: "10:00 - 22:30",
    phone: "0283 345 6789",
    features: ["Nhiều vị kem", "Giá hợp lý", "Không gian vintage", "Take away"],
    reviews: [
      {
        id: 7,
        author: "Bảo Ngọc",
        authorAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        content: "Kem ở đây ngon và giá hợp lý. Kem sầu riêng thơm đậm đà, không quá ngọt. Nhân viên phục vụ dễ thương.",
        images: [],
        likes: 16,
        createdAt: "2024-01-07T16:45:00Z"
      },
      {
        id: 8,
        author: "Kim Ngân",
        authorAvatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Kem dừa dầm ở đây là số 1! Vị dừa thơm ngon, dầm mềm mịn. Quán nhỏ nhưng rất cozy.",
        images: ["https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg"],
        likes: 22,
        createdAt: "2024-01-05T14:20:00Z"
      }
    ]
  },
  {
    id: 5,
    name: "Bún Bò Huế Cô Ba",
    address: "789 Đường Hoàng Diệu 2, Thủ Đức, TP.HCM",
    type: "restaurant",
    rating: 4.6,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
    description: "Quán bún bò Huế authentic với công thức truyền thống từ cố đô Huế. Nước dùng đậm đà, cay nồng vừa phải. Thịt bò tươi ngon, chả cua thơm béo. Không gian quán bình dân, phục vụ nhanh chóng.",
    coordinates: [106.7500, 10.8300],
    priceRange: "35,000 - 60,000 VNĐ",
    specialties: ["Bún bò Huế", "Bún bò giò heo", "Chả cua", "Nem chua"],
    openHours: "6:00 - 21:00",
    phone: "0283 456 7890",
    features: ["Vị authentic", "Cay nồng", "Phục vụ nhanh", "Giá hợp lý"],
    reviews: [
      {
        id: 9,
        author: "Minh Tuấn",
        authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Bún bò Huế ngon nhất Thủ Đức! Nước dùng đậm đà, cay vừa miệng. Chả cua thơm béo, thịt bò mềm ngon.",
        images: [],
        likes: 28,
        createdAt: "2024-01-04T12:30:00Z"
      }
    ]
  },
  {
    id: 6,
    name: "Trà Sữa Gong Cha",
    address: "Vincom Plaza Thủ Đức, Võ Văn Ngân, Thủ Đức",
    type: "cafe",
    rating: 4.1,
    image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg",
    description: "Thương hiệu trà sữa nổi tiếng với nhiều loại topping đa dạng. Không gian hiện đại, thoáng mát trong trung tâm thương mại. Menu phong phú từ trà sữa truyền thống đến các loại thức uống sáng tạo.",
    coordinates: [106.7617, 10.8505],
    priceRange: "35,000 - 75,000 VNĐ",
    specialties: ["Trà sữa trân châu", "Trà đào", "Smoothie", "Trà xanh matcha"],
    openHours: "9:00 - 22:00",
    phone: "0283 567 8901",
    features: ["Thương hiệu nổi tiếng", "Topping đa dạng", "Không gian hiện đại", "Take away"],
    reviews: [
      {
        id: 10,
        author: "Thu Hằng",
        authorAvatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        content: "Trà sữa ngon, topping tươi. Không gian trong Vincom mát mẻ, thích hợp ngồi chill với bạn bè.",
        images: [],
        likes: 14,
        createdAt: "2024-01-03T15:20:00Z"
      }
    ]
  },
  {
    id: 7,
    name: "Bánh Xèo Miền Tây",
    address: "234 Đường Kha Vạn Cân, Thủ Đức, TP.HCM",
    type: "restaurant",
    rating: 4.4,
    image: "https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg",
    description: "Quán bánh xèo phong cách miền Tây với bánh giòn rụm, nhân đầy đặn. Rau sống tươi ngon, nước chấm đậm đà. Không gian mở, thoáng mát với phong cách dân dã.",
    coordinates: [106.7800, 10.8400],
    priceRange: "25,000 - 45,000 VNĐ",
    specialties: ["Bánh xèo", "Bánh khọt", "Gỏi cuốn", "Nem nướng"],
    openHours: "10:00 - 22:00",
    phone: "0283 678 9012",
    features: ["Bánh giòn rụm", "Rau sống tươi", "Nước chấm ngon", "Phong cách miền Tây"],
    reviews: [
      {
        id: 11,
        author: "Hoàng Long",
        authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        content: "Bánh xèo giòn tan, nhân tôm thịt đầy đặn. Rau sống tươi ngon, nước chấm chua ngọt vừa miệng. Highly recommended!",
        images: ["https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg"],
        likes: 25,
        createdAt: "2024-01-02T18:45:00Z"
      }
    ]
  },
  {
    id: 8,
    name: "Phở Gà Hà Nội",
    address: "567 Đường Phạm Văn Đồng, Thủ Đức, TP.HCM",
    type: "restaurant",
    rating: 4.3,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg",
    description: "Quán phở gà phong cách Hà Nội với nước dùng trong vắt, thơm ngon. Thịt gà tươi, bánh phở mềm dai. Không gian quán nhỏ nhưng ấm cúng, phục vụ chu đáo.",
    coordinates: [106.7200, 10.8600],
    priceRange: "30,000 - 50,000 VNĐ",
    specialties: ["Phở gà", "Phở gà tái", "Chả cá", "Nem chua rán"],
    openHours: "6:00 - 14:00, 17:00 - 21:00",
    phone: "0283 789 0123",
    features: ["Nước dùng trong", "Thịt gà tươi", "Phong cách Hà Nội", "Ấm cúng"],
    reviews: [
      {
        id: 12,
        author: "Linh Chi",
        authorAvatar: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        content: "Phở gà ngon, nước dùng ngọt thanh. Thịt gà mềm, không bị khô. Giá cả hợp lý, phục vụ nhanh.",
        images: [],
        likes: 17,
        createdAt: "2024-01-01T08:30:00Z"
      }
    ]
  }
];