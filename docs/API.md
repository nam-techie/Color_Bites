# API Documentation - Color Bites

## Base URL
```
http://localhost:8080
```

## Authentication
Hiện tại API chưa yêu cầu xác thực. Sẽ được cập nhật với Spring Security và JWT trong tương lai.

## Endpoints

### Colors

#### GET /api/colors
Lấy danh sách tất cả màu sắc và thông tin tâm lý học.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Đỏ",
      "hex": "#FF0000",
      "psychology": "Năng lượng, đam mê, sức mạnh",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Xanh dương", 
      "hex": "#0000FF",
      "psychology": "Tin cậy, ổn định, hòa bình",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "message": "Lấy danh sách màu sắc thành công"
}
```

#### GET /api/colors/{id}
Lấy thông tin chi tiết một màu sắc theo ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Đỏ",
    "hex": "#FF0000",
    "rgb": {
      "r": 255,
      "g": 0,
      "b": 0
    },
    "psychology": "Năng lượng, đam mê, sức mạnh",
    "categories": ["warm", "primary"],
    "createdAt": "2024-01-01T00:00:00Z"
  },
  "message": "Lấy thông tin màu sắc thành công"
}
```

### Quiz

#### GET /api/quiz/questions
Lấy danh sách câu hỏi quiz (sẽ được thêm sau)

#### POST /api/quiz/submit
Nộp kết quả quiz (sẽ được thêm sau)

### Community

#### GET /api/posts
Lấy danh sách bài viết cộng đồng (sẽ được thêm sau)

#### POST /api/posts
Tạo bài viết mới (sẽ được thêm sau)

## Error Responses

### 404 Not Found
```json
{
  "success": false,
  "error": "NOT_FOUND",
  "message": "Không tìm thấy tài nguyên",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### 400 Bad Request
```json
{
  "success": false,
  "error": "BAD_REQUEST",
  "message": "Dữ liệu đầu vào không hợp lệ",
  "errors": [
    {
      "field": "name",
      "message": "Tên màu sắc không được để trống"
    }
  ],
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "INTERNAL_SERVER_ERROR",
  "message": "Đã xảy ra lỗi nội bộ server",
  "timestamp": "2024-01-01T12:00:00Z"
}
``` 