import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form (submit và reload trang)

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.status === 'success') {
        // Lưu trữ hoặc xử lý token
        console.log('Đăng nhập thành công:', data.user);
        const { role, token, user_id } = data.user; // Assuming user data structure
        localStorage.setItem('user_role', role);
        localStorage.setItem('user_token', token);
        localStorage.setItem('user_id', user_id);
        // Chuyển hướng đến trang menu
        navigate('/menu');
      } else {
        console.error('Đăng nhập thất bại:', data.message);
      }
    } catch (error) {
      console.error('Lỗi:', error);
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Tên đăng nhập:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;

