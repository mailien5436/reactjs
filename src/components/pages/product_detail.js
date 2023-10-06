import Header from "../ProductTypes/header";
import Banner from "../ProductTypes/banner";
import Footer from "../ProductTypes/footer";
import DanhSach from "../Product/danhsach";
import HomePage from "./homepage";
import LoaiSanPham from "../ProductTypes/loai_san_pham";

const dsLoaiSanPham = [
  {
    'ten': 'Giới thiệu sách',
    'ds_san_pham': [
      {
        'hinh_anh': './sách.png',
        'ten': 'Julius Caesar',
        'gia': 1000
      },
    ]
  },
]
function ProductDetail() {
  const listLoaiSanPhams = dsLoaiSanPham.map(function (item) {
    return (
      <>
        <LoaiSanPham data={item} />
      </>
    );
  });
  return (
    <>
      <Header />
      <DanhSach />
      <div>
        {listLoaiSanPhams}
      </div>     
      <Footer />
    </>
  );
}
export default ProductDetail;