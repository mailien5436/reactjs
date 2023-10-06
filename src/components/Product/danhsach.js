function DanhSach() {
    return (
        <>
            <div class="container bootdey">
                <div class="col-md-12">
                    <section class="panel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="pro-img-list">
                                                <a href="#">
                                                    <img src="./sách.png" alt="" width={90} />
                                                </a>
                                                <a href="#">
                                                    <img src="./sách.png" alt="" width={90} />
                                                </a>
                                                <a href="#">
                                                    <img src="./sách.png" alt="" width={90} />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="pro-img-details">
                                                <img src="./sách.png" width={270} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <h4 class="pro-d-title">
                                        Julius Caesar-Nhà Độc Tài Huyền Thoại Của La Mã
                                    </h4>

                                    <p>
                                        Julius Caesar thuộc hàng ngũ những nhà lãnh tụ quân sự và chính trị xuất sắc nhất của La Mã, là người đóng vai trò quan trọng trong
                                        các sự kiện dẫn đến sự sụp đổ của nhà nước Cộng hòa La Mã và sự trỗi dậy của Đế chế La Mã.
                                        Quan điểm chính trị của ông, tức chủ nghĩa Caesar, đã tạo ảnh hưởng đến nhiều chính trị gia sau này.
                                    </p>
                                    <div class="product_meta">
                                        <span class="posted_in"> <strong>Nhà cung cấp:</strong> Bách Việt </span>
                                        <span class="tagged_as"><strong>Tác giả:</strong> Philip Freeman</span>
                                    </div>
                                    <div class="m-bot15">
                                        <strong>Price: </strong> <span class="price">193.500 đ</span>
                                        <span class="pro-price"> 215.000 đ</span>
                                    </div>
                                    <strong>Quantity: </strong><br/>
                                    <div class="product-view-quantity-box">
                                        <div class="product-view-quantity-box-block">
                                            <a class="btn-subtract-qty" onclick="subtractQty();"><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png" /></a>
                                            <input type="text" name="qty" id="qty_mobile" maxvalue="999" minvalue="1" align="center" value="1" onkeypress="validateNumber(event)" onblur="validateQty();" title="SL" class="input-text qty" fdprocessedid="u86f6a" />
                                            <a class="btn-add-qty" onclick="addQty();"><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png" /></a>
                                        </div>
                                    </div>
                                    <br/>
                                    <p>
                                        <button class="btn btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</button>
                                        <button class="btn btn-secondary" type="button"><i class="fa fa-shopping-cart"></i> Mua ngay</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
export default DanhSach