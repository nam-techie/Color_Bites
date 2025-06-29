# Kiến trúc hệ thống - Color Bites

## Tổng quan kiến trúc

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Database      │
│   (React/TS)    │◄──►│  (Spring Boot)  │◄──►│ (MySQL/PostgreSQL) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Frontend Architecture

### Cấu trúc thư mục
```
frontend/
├── src/
│   ├── components/     # React components tái sử dụng
│   ├── pages/         # Các trang chính của ứng dụng
│   ├── data/          # Dữ liệu mock và constants
│   ├── types/         # TypeScript type definitions
│   ├── App.tsx        # Component gốc
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── package.json       # Dependencies và scripts
```

### Công nghệ sử dụng
- **Framework**: React 18 với TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context (có thể nâng cấp lên Redux/Zustand)
- **Routing**: React Router (sẽ được thêm)

## Backend Architecture

### Cấu trúc thư mục
```
backend/
├── src/main/java/com/colorbites/
│   ├── controller/    # REST Controllers
│   ├── service/       # Business logic
│   ├── repository/    # Data access layer
│   ├── entity/        # JPA Entities
│   ├── dto/           # Data Transfer Objects
│   ├── config/        # Configuration classes
│   ├── exception/     # Exception handling
│   └── ColorBitesApplication.java  # Main application
├── src/main/resources/
│   ├── application.yml       # Application config
│   └── data.sql             # Initial data
├── src/test/java/            # Unit & Integration tests
├── pom.xml                   # Maven dependencies (hoặc build.gradle)
└── README.md
```

### Công nghệ sử dụng
- **Language**: Java 17+
- **Framework**: Spring Boot 3.x
- **Database**: MySQL hoặc PostgreSQL với Spring Data JPA
- **Authentication**: Spring Security với JWT (sẽ được thêm)
- **Validation**: Spring Boot Validation (Bean Validation)
- **Documentation**: SpringDoc OpenAPI (Swagger)
- **Testing**: JUnit 5, Mockito, TestContainers

## Database Schema (Dự kiến)

### Users Table
```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Colors Table
```sql
CREATE TABLE colors (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    hex VARCHAR(7) NOT NULL,
    rgb_r INT NOT NULL,
    rgb_g INT NOT NULL,
    rgb_b INT NOT NULL,
    psychology TEXT,
    categories JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Quiz Results Table
```sql
CREATE TABLE quiz_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT,
    answers JSON,
    result VARCHAR(255),
    score INT,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## API Design Patterns

### RESTful Endpoints
- `GET /api/colors` - Lấy danh sách màu sắc
- `GET /api/colors/:id` - Lấy chi tiết màu sắc
- `POST /api/quiz/submit` - Nộp kết quả quiz
- `GET /api/users/profile` - Lấy thông tin user

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Entity Classes
```java
@Entity
@Table(name = "colors")
public class Color {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, length = 7)
    private String hex;
    
    @Embedded
    private RGB rgb;
    
    @Column(columnDefinition = "TEXT")
    private String psychology;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
}
```

## Security Considerations

### Frontend
- Input validation
- XSS prevention
- Secure HTTP headers

### Backend
- CORS configuration với Spring Security
- Input validation với Bean Validation
- Rate limiting với Spring Boot Actuator
- JWT authentication với Spring Security
- Password hashing với BCrypt
- SQL injection prevention với JPA/Hibernate

## Performance Optimization

### Frontend
- Code splitting
- Lazy loading
- Image optimization
- Caching strategies

### Backend
- Database indexing với JPA @Index
- Query optimization với Spring Data JPA
- Response caching với Spring Cache (@Cacheable)
- Connection pooling với HikariCP
- Load balancing (tương lai)

## Deployment Strategy

### Development
- Frontend: Vite dev server (port 5173)
- Backend: Spring Boot embedded Tomcat (port 8080)
- Database: MySQL/PostgreSQL local hoặc Docker

### Production (Tương lai)
- Frontend: Vercel/Netlify
- Backend: AWS EC2/ECS, Google Cloud Run, hoặc Heroku
- Database: AWS RDS, Google Cloud SQL, hoặc PlanetScale
- Monitoring: Spring Boot Actuator + Micrometer 