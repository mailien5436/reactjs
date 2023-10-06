import GioHang from "../Product/giohang";
import Header from "../ProductTypes/header";
import Footer from "../ProductTypes/footer";
import DanhSach from "../Product/danhsach";
function MuaHang()
{
    return(
        <>
        <Header/>
        <h3 className="giohang">GIỎ HÀNG</h3>
        <GioHang/>
        <Footer/>
        </>
    )
}
export default MuaHang