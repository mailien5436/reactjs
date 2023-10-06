import Header from "../ProductTypes/header"
import Footer from "../ProductTypes/footer"
function ThanhToan() {
    return (
        <>
            <Header />
            <strong>Danh sách sản phẩm</strong>
            <table class="table">
                <thead>
                    <tr class="thanhtoan-mdinh">
                        <th scope="col-md-4">Sản Phẩm</th>
                        <th scope="col-md-6">Đơn Giá</th>
                        <th scope="col-md-8">Số Lượng</th>
                        <th scope="col-md-10">Thành Tiền</th>
                        <th scope="col-md-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Julius Caesar</th>
                        <td>193.500 đ</td>
                        <td>10</td>
                        <td>1.930.000</td>
                        <td><button type="button" class="btn btn-info">Cập Nhật</button>|<button type="button" class="btn btn-danger">Xóa</button></td>
                    </tr>
                </tbody>
            </table>
          
                    <strong>Thông tin người nhận hàng</strong>
                    <p>Họ Tên: Trần Thị Mai Liên</p>
                    <p>Điện Thoại: 0975789619</p>
                    <p>Địa chỉ: Tây Ninh</p>
                  
                <strong>Hình thức thanh toán</strong>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Thanh toán khi nhận hàng
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Thanh toán bằng ngân hàng
                        </label>
                    </div>
                    
                <Footer/>
            </>
            )
}
export default ThanhToan