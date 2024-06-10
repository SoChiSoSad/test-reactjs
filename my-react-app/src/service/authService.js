import axiosInstance from '../utils/axiosInstance'

const AuthService = {
    login: async (username, password) => {
        try {
            const response = await axiosInstance.post('/login', {
                username,
                password
            });
            // Xử lý kết quả đăng nhập ở đây, ví dụ lưu token vào Local Storage.
            const { token, role, user_id } = response.data;
            localStorage.setItem('user_token', token);
            localStorage.setItem('user_role', role);
            localStorage.setItem('user_id', user_id);
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error.message);
            throw error;
        }
    },

    logout: () => {
        // Xử lý đăng xuất, ví dụ xóa token khỏi Local Storage
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_role');
        localStorage.removeItem('user_id');
        // Có thể thực hiện các bước khác khi đăng xuất
    },

    isLoggedIn: () => {
        // Kiểm tra xem người dùng có đăng nhập hay không
        return !!localStorage.getItem('user_token');
    },
    // Các phương thức khác như kiểm tra quyền, lấy thông tin người dùng, v.v.
};

export default AuthService;