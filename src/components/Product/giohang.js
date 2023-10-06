import { NavLink } from "react-router-dom"

function GioHang() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr class="table-macdinh">
                        <th scope="col-md-4">Sản Phẩm</th>
                        <th scope="col-md-6">Đơn Giá</th>
                        <th scope="col-md-8">Số Lượng</th>
                        <th scope="col-md-10">Thành Tiền</th>
                        <th scope="col-md-12"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Julius Caesar<img src="./sách.png" width={100} /></th>
                        <td>193.500 đ</td>
                        <td>10</td>
                        <td>1.930.000</td>
                        <td><button type="button" class="btn btn-info">Cập Nhật</button>|<button type="button" class="btn btn-danger">Xóa</button></td>
                    </tr>
                </tbody>
            </table>
           <NavLink to="/"><button type="button" class="btn btn-warning">Tiếp tục mua hàng</button></NavLink>
           <span class="thanhtoan"><NavLink to="/thanhtoan"><button type="button" class="btn btn-warning">Thanh toán</button></NavLink></span>
                        
        


        </>
    )
}
export default GioHang