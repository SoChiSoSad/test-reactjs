import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuth } from '../service/authService';


const Login = () => {
  const { user, setUser } = useAuth();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form (submit và reload trang)

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        const token = response.data.token;
        const role = response.data.role;
        const user_id = response.data.user_id;

        localStorage.setItem('user_token', token);
        localStorage.setItem('user_role', role);
        localStorage.setItem('user_id', user_id);

        setUser(token);
        setUser(role);
        setUser(user_id);

        navigate('/menu')
      } else {
        setUsernameError('Username không hợp lệ')
        setPasswordError('Password không hợp lệ')
        console.error('Đăng nhập không thành công');
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/menu')
    }
  }, [navigate, user]);


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

