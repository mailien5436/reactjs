import Header from "../ProductTypes/header";
import LoaiSanPham from "../ProductTypes/loai_san_pham";
import Banner from "../ProductTypes/banner";
import Footer from "../ProductTypes/footer";

const dsLoaiSanPham = [
  {
    'ten': 'Sách Khoa Học',
    'ds_san_pham': [
      {
        'hinh_anh': './sách.png',
        'ten': 'Julius Caesar',
        'gia': 1000
      },
    ]
  },
  {
    'ten': 'Truyện Tranh',
    'ds_san_pham': [
      {
        'hinh_anh': './sách.png',
        'ten': 'Julius Caesar',
        'gia': 1000
      },
    ]
  }
]
function HomePage() {
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
      <Banner />
      <div>
        {listLoaiSanPhams}
      </div>
      <Footer />
    </>);

}
export default HomePage;