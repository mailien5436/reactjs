import './App.css';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import LoaiSanPham from './components/ProductTypes/loai_san_pham';
import HomePage from './components/pages/homepage';
import ProductDetail from './components/pages/product_detail';
import {Routes, Route} from "react-router-dom";
import React from 'react';
import './fontawesome/css/all.min.css';
import MuaHang from './components/pages/muahang';
import ThanhToan from './components/pages/thanhtoan';

function App() {


  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/muahang" element={<MuaHang/>}/>
        <Route path="/thanhtoan" element={<ThanhToan/>}/>
      </Routes>

  );
}
export default App;