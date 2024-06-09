import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/phong-to-chuc">Phòng tổ chức</Link>
      </li>
      <li>
        <Link to="/lanh-dao-don-vi">Lãnh đạo đơn vị</Link>
      </li>
      <li>
        <Link to="/lanh-dao-truong">Lãnh đạo trường</Link>
      </li>
      <li>
        <Link to="/cac-nhan-su">Các nhân sự</Link>
      </li>
      <li>
        <Link to="/tro-giup">Trợ giúp</Link>
      </li>
      <li>
        <Link to="/dang-xuat">Đăng xuất</Link>
      </li>
    </ul>
  );
};

export default Menu;
