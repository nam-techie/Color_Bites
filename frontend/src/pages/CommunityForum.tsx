import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Heart, 
  MessageCircle, 
  Share2, 
  Camera,
  Filter,
  Search,
  Send,
  ThumbsUp
} from 'lucide-react';
import { foodPosts } from '../data/mockData';
import { FoodPost, Comment } from '../types';

const CommunityForum: React.FC = () => {
  const [posts, setPosts] = useState<FoodPost[]>(foodPosts);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});
  const [replyingTo, setReplyingTo] = useState<{ postId: number; commentId: number } | null>(null);
  const [newReply, setNewReply] = useState('');

  const filters = [
    { value: 'all', label: 'Tất cả', color: 'gray' },
    { value: 'Đỏ', label: 'Đỏ', color: 'red' },
    { value: 'Xanh', label: 'Xanh', color: 'green' },
    { value: 'Vàng', label: 'Vàng', color: 'yellow' },
    { value: 'Nâu', label: 'Nâu', color: 'amber' },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || post.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentLike = (postId: number, commentId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map(comment =>
                comment.id === commentId
                  ? { ...comment, likes: comment.likes + 1 }
                  : comment
              )
            }
          : post
      )
    );
  };

  const handleReplyLike = (postId: number, commentId: number, replyId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map(comment =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: comment.replies.map(reply =>
                        reply.id === replyId
                          ? { ...reply, likes: reply.likes + 1 }
                          : reply
                      )
                    }
                  : comment
              )
            }
          : post
      )
    );
  };

  const toggleComments = (postId: number) => {
    setExpandedComments(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleAddComment = (postId: number) => {
    if (!newComment[postId]?.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: "Bạn",
      authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
      content: newComment[postId],
      likes: 0,
      replies: [],
      createdAt: new Date().toISOString()
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );

    setNewComment(prev => ({ ...prev, [postId]: '' }));
  };

  const handleAddReply = (postId: number, commentId: number) => {
    if (!newReply.trim()) return;

    const reply = {
      id: Date.now(),
      author: "Bạn",
      authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face",
      content: newReply,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map(comment =>
                comment.id === commentId
                  ? { ...comment, replies: [...comment.replies, reply] }
                  : comment
              )
            }
          : post
      )
    );

    setNewReply('');
    setReplyingTo(null);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
            <Users size={32} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cộng Đồng Ẩm Thực
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chia sẻ món ăn yêu thích, công thức nấu ăn và kết nối với những người cùng đam mê ẩm thực
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm món ăn, công thức..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedFilter === filter.value
                    ? `bg-${filter.color}-500 text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCreatePost(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <Plus size={20} />
            <span>Đăng Bài</span>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Post Header */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Post Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Post Actions */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <Heart size={20} />
                      <span className="font-medium">{post.likes}</span>
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors"
                    >
                      <MessageCircle size={20} />
                      <span className="font-medium">{post.comments.length}</span>
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Comments Section */}
                {expandedComments.includes(post.id) && (
                  <div className="border-t pt-4">
                    {/* Add Comment */}
                    <div className="flex space-x-3 mb-4">
                      <img
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100&h=100&fit=crop&crop=face"
                        alt="You"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 flex space-x-2">
                        <input
                          type="text"
                          placeholder="Viết bình luận..."
                          value={newComment[post.id] || ''}
                          onChange={(e) => setNewComment(prev => ({ ...prev, [post.id]: e.target.value }))}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                        >
                          <Send size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <img
                            src={comment.authorAvatar}
                            alt={comment.author}
                            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-gray-900">{comment.author}</span>
                                <span className="text-xs text-gray-500">
                                  {new Date(comment.createdAt).toLocaleDateString('vi-VN')}
                                </span>
                              </div>
                              <p className="text-gray-700">{comment.content}</p>
                            </div>
                            
                            <div className="flex items-center space-x-4 mt-2">
                              <button
                                onClick={() => handleCommentLike(post.id, comment.id)}
                                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary-500 transition-colors"
                              >
                                <ThumbsUp size={14} />
                                <span>{comment.likes}</span>
                              </button>
                              <button
                                onClick={() => setReplyingTo({ postId: post.id, commentId: comment.id })}
                                className="text-sm text-gray-500 hover:text-primary-500 transition-colors"
                              >
                                Trả lời
                              </button>
                            </div>

                            {/* Reply Input */}
                            {replyingTo?.postId === post.id && replyingTo?.commentId === comment.id && (
                              <div className="flex space-x-2 mt-3">
                                <input
                                  type="text"
                                  placeholder="Viết phản hồi..."
                                  value={newReply}
                                  onChange={(e) => setNewReply(e.target.value)}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                  onKeyPress={(e) => e.key === 'Enter' && handleAddReply(post.id, comment.id)}
                                />
                                <button
                                  onClick={() => handleAddReply(post.id, comment.id)}
                                  className="p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                                >
                                  <Send size={14} />
                                </button>
                              </div>
                            )}

                            {/* Replies */}
                            {comment.replies.length > 0 && (
                              <div className="mt-3 space-y-3">
                                {comment.replies.map((reply) => (
                                  <div key={reply.id} className="flex space-x-3">
                                    <img
                                      src={reply.authorAvatar}
                                      alt={reply.author}
                                      className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                      <div className="bg-gray-100 rounded-lg p-2">
                                        <div className="flex items-center space-x-2 mb-1">
                                          <span className="font-medium text-gray-900 text-sm">{reply.author}</span>
                                          <span className="text-xs text-gray-500">
                                            {new Date(reply.createdAt).toLocaleDateString('vi-VN')}
                                          </span>
                                        </div>
                                        <p className="text-gray-700 text-sm">{reply.content}</p>
                                      </div>
                                      <button
                                        onClick={() => handleReplyLike(post.id, comment.id, reply.id)}
                                        className="flex items-center space-x-1 text-xs text-gray-500 hover:text-primary-500 transition-colors mt-1"
                                      >
                                        <ThumbsUp size={12} />
                                        <span>{reply.likes}</span>
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy bài viết nào
            </h3>
            <p className="text-gray-600">
              Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
            </p>
          </div>
        )}

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Chia Sẻ Món Ăn</h2>
                <button
                  onClick={() => setShowCreatePost(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiêu đề món ăn
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập tên món ăn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hình ảnh món ăn
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-400 transition-colors">
                    <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Tải lên hình ảnh món ăn</p>
                    <button className="text-primary-500 font-medium">
                      Chọn file
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả món ăn
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Chia sẻ cảm xúc, hương vị, kỷ niệm gắn liền với món ăn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowCreatePost(false)}
                    className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Đăng Bài
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityForum;