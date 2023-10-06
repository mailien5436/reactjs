import { Link } from "react-router-dom";
import Image from "./image";
import Name from "./name";
import Price from "./price";
import { NavLink } from "react-router-dom";

function SanPham(props) {
    return (
        <>

            {/* <Image url={props.card.Image}/>
            <Name name={props.card.Name}/>
            <Price price={props.card.Price}/> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="card col-md-3">
                               <div className="card-body">
                               <NavLink to="/productdetail"><img src={props.data.hinh_anh} width={230}/> </NavLink>
                                    <span><strong>{props.data.ten}</strong></span>
                                    <p>Giá: <strong className="gia">{props.data.gia}</strong></p>
                                    <div className="button">
                                        <button type="button" className="btn btn-danger">Mua Ngay</button>
                                    </div>
                                </div>
                               
                            </div>
                        <div className="card col-md-3">
                            <div className="card-body">
                            <NavLink to="/productdetail"><img src={props.data.hinh_anh} width={230}/> </NavLink>
                                <span><strong>{props.data.ten}</strong></span>
                                <p>Giá: <strong className="gia">{props.data.gia}</strong></p>
                                <div className="button">
                                    <button type="button" className="btn btn-danger">Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                        <div className="card col-md-3">
                            <div className="card-body">
                            <NavLink to="/productdetail"><img src={props.data.hinh_anh} width={230}/> </NavLink>s
                                <span><strong>{props.data.ten}</strong></span>
                                <p>Giá: <strong className="gia">{props.data.gia}</strong></p>
                                <div className="button">
                                    <button type="button" className="btn btn-danger">Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}
export default SanPham;