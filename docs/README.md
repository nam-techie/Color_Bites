# Color Bites - Tài liệu dự án

## Tổng quan
Color Bites là một ứng dụng web về tâm lý học màu sắc, giúp người dùng hiểu về ý nghĩa và tác động của các màu sắc khác nhau.

## Cấu trúc dự án
```
project/
├── frontend/          # Ứng dụng React/TypeScript
├── backend/           # API server Spring Boot Java
└── docs/             # Tài liệu dự án
```

## Cài đặt và chạy

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
# hoặc với Gradle:
./gradlew bootRun
```

## API Endpoints

### Colors
- `GET /api/colors` - Lấy danh sách màu sắc và tâm lý học

## Tính năng chính
- [ ] Quiz về tâm lý học màu sắc
- [ ] Cộng đồng thảo luận
- [ ] Bản đồ du lịch theo màu sắc
- [ ] Hệ thống xác thực người dùng

## Công nghệ sử dụng
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Spring Boot, Java 17+, MySQL/PostgreSQL
- **Deployment**: TBD 