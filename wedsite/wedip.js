let elmBody = document.getElementById("div__prod");
let product = {
  if: 1,
  img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
  name: "iPhone XS Max 64GB | Chính hãng VN/A",
  size: "6.9 inches",
  ram: "12 GB",
  rom: "128 GB",
  price: "15.750.000&nbsp;₫",
  text: "Tặng gói bảo hành mở rộng Samsung Care+ 1 năm trị giá đến ",
};

let listProduct = [
  {
    if: 1,
    avatar: "./image/iphone-xs-vang.jpg (1).webp",
    name: "iPhone XS Max 64GB | Chính hãng VN/A",
    size: "6.9 inches",
    ram: "12 GB",
    rom: "128 GB",
    price: "5.750.000&nbsp;₫",
    text: "Tặng gói bảo hành mở rộng Samsung Care+ 1 năm trị giá đến ",
  },
  {
    if: 2,
    avatar: "./image/iphone-14pro-vang-cu.png.webp",
    name: "iPhone 14 Pro Max 256GB | Chính hãng VN/A",
    size: "6.7 inches",
    ram: "6 GB",
    rom: "256 GB",
    price: "34.750.000&nbsp;₫",
    text: "Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng MSB, Moca, VNPAY,... và ",
  },
  {
    if: 3,
    avatar: "./image/iphone-14pro-vang-cu.png.webp",
    name: "iPhone 14 Pro 128GB | Chính hãng VN/A",
    size: "6.1 inches",
    ram: "6 GB",
    rom: "128 GB",
    price: "29.750.000&nbsp;₫",
    text: "Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng MSB, Moca, VNPAY,... và  ",
  },
  {
    if: 4,
    avatar: "./image/iphone-14-plus-cu-2.jpg.webp",
    name: "iPhone 14 Plus 128GB | Chính hãng VN/A",
    size: "6.7 inches",
    ram: "6 GB",
    rom: "128 GB",
    price: "23.750.000&nbsp;₫",
    text: "[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ  ",
  },
  {
    if: 5,
    avatar: "./image/iphone-14-cu.jpg.webp",
    name: "iPhone 14 256GB | Chính hãng VN/A",
    size: "6.1 inches",
    ram: "6 GB",
    rom: "128 GB",
    price: "22.750.000&nbsp;₫",
    text: "Giảm thêm đến 2 triệu khi thanh toán qua ví/ngân hàng MSB, Moca, VNPAY,...  ",
  },
  {
    if: 6,
    avatar: "./image/iphone-13-pro-max-cu-xanh.jpg.webp",
    name: "iPhone 13 Pro Max 256GB I Chính hãng VN/A",
    size: "6.7 inches",
    ram: "4 GB",
    rom: "256 GB",
    price: "26.750.000&nbsp;₫",
    text: "Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và  ",
  },
  {
    if: 7,
    avatar: "./image/iphone-13-xanh-la-cu-png.jpg.webp",
    name: "iPhone 13 128GB | Chính hãng VN/A",
    size: "6.1 inches",
    ram: "4 GB",
    rom: "128 GB",
    price: "17.750.000&nbsp;₫",
    text: "Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và ",
  },
  {
    if: 8,
    avatar: "./image/iphone-12-pro-vang.jpg.webp",
    name: "iPhone 12 Pro Max 128GB I Chính hãng VN/A ",
    size: "6.7 inches",
    ram: "6 GB",
    rom: "128 GB",
    price: "25.750.000&nbsp;₫",
    text: "[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và  ",
  },
  {
    if: 9,
    avatar: "./image/iphone-11-pro-max-trang.jpg.webp",
    name: "iPhone 11 Pro Max 128GB I Chính hãng VN/A ",
    size: "6.5 inches",
    ram: "4 GB",
    rom: "128 GB",
    price: "11.750.000&nbsp;₫",
    text: "[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và  ",
  },
  {
    if: 10,
    avatar: "./image/iphone-11-pro-xanh.jpg.webp",
    name: "iPhone 11 Pro  128GB I Chính hãng VN/A",
    size: "5.8 inches",
    ram: "4 GB",
    rom: "128 GB",
    price: "10.750.000&nbsp;₫",
    text: "Nhập mã CPSONL500 khi thanh toán VNPAY qua website hoặc CPS500 qua QR Offline tại cửa hàng để giảm thêm 500k khi mua sản phẩm Apple từ 17 triệu và ",
  },
];

function formatRowUser(product) {
  return `
    <li>
      <div class="product__item">
        <div class="product__top">
          <a href="" class="product__img"
            ><img
              src="${product.avatar}"
              alt=""
          /></a>
          <a href="" class="buy__now">Mua Ngay</a>
        </div>
        <div class="product__info">
          <a href="" class="product__cat"> ${product.name} </a>
          <a href="" class="product__name">
            <div class="product__badge">
              <p class="product__info__item"> ${product.size}</p>
              <p class="product__info__item"> ${product.ram}</p>
              <p class="product__info__item"> ${product.rom}</p>
            </div>
          </a>
          <div class="product__money"> ${product.price}</div>
          <div class="product__promotions">
            <div class="promotions">
              <p class="coupon-price">
              ${product.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
    `;
}
let resUI = "";

for (let index = 0; index < listProduct.length; index++) {
  resUI += formatRowUser(listProduct[index]);
}

elmBody.innerHTML = resUI;
