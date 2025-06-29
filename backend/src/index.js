const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes cơ bản
app.get('/', (req, res) => {
  res.json({ message: 'Color Bites Backend API đang hoạt động!' });
});

// API routes cho color psychology
app.get('/api/colors', (req, res) => {
  res.json([
    { id: 1, name: 'Đỏ', hex: '#FF0000', psychology: 'Năng lượng, đam mê, sức mạnh' },
    { id: 2, name: 'Xanh dương', hex: '#0000FF', psychology: 'Tin cậy, ổn định, hòa bình' },
    { id: 3, name: 'Vàng', hex: '#FFFF00', psychology: 'Lạc quan, sáng tạo, trí tuệ' }
  ]);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
}); 