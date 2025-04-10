let cartCount = 0;

function addToCart() {
    cartCount += 1;  // Tăng giá trị đếm thêm 1
    document.getElementById("cart-count").textContent = cartCount;  // Cập nhật hiển thị
}
function spLoc(){
    
    const loaiLoc = document.getElementById('typeLoc').value;
    const loaiTkiem = document.getElementById('nhapTimkiem').value.toLowerCase();

    const sanPham = document.querySelectorAll('.san-pham-');

    sanPham.forEach(sanpham => {
        
        const loai = sanpham.getAttribute('data-type');
        const tieuDe = sanpham.querySelector("h4").innerText.toLowerCase();

        //kiểm tra điều kiện lọc
       
        const matchesType = loaiLoc === "all" || loai === loaiLoc;
        const matchesSearch = tieuDe.includes(loaiTkiem);

        //Hiển thị hoặc ẩn sản phẩm dựa trên điều kiện
        if ( matchesType && matchesSearch){
            sanpham.style.display = 'block';
        
        }
        else
            sanpham.style.display = 'none';
    }) 
}