import SanPham from "../Product/sanpham";
function LoaiSanPham(props){
    const listDsSP=props.data.ds_san_pham.map((item)=>{
        return (<SanPham data={item}/>);
    });
    return(
        <>
        <div className="product-type">
            <p><strong>{props.data.ten}</strong></p>
            
        </div>
        {listDsSP}
        </>
    );
}
export default LoaiSanPham;