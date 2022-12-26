let elmBody = document.getElementById("sale__prod");
let elmSale = document.getElementById("sale__product");
let elmDonate = document.getElementById("sale__donate");
let product = {
  if: 1,
  img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg",
  name: "iPhone XS Max 64GB | Chính hãng VN/A",
  size: "6.9 inches",
  ram: "12 GB",
  rom: "128 GB",
  price: "15.750.000&nbsp;₫",
};
let listProduct = [
  {
    if: 1,
    avatar: "./image/iphone-14pro-vang-cu.png.webp",
    name: "iPhone 14 Pro Max 256GB | Chính hãng VN/A",
    size: "6.7 inches",
    ram: "6 GB",
    rom: "256 GB",
    price: "34.750.000&nbsp;₫",
  },

  {
    if: 2,
    avatar: "./image/iphone-13-pro-max-cu-xanh.jpg.webp",
    name: "iPhone 13 Pro Max 256GB I Chính hãng VN/A",
    size: "6.7 inches",
    ram: "4 GB",
    rom: "256 GB",
    price: "26.750.000&nbsp;₫",
  },
  {
    if: 3,
    avatar: "./image/samsung_galaxy_z_fold_4-7.webp",
    name: "Samsung Galaxy Z Fold4 | Chính hãng VN/A",
    size: "7.6 inches",
    ram: "12 GB",
    rom: "1 TB",
    price: "49.750.000&nbsp;₫",
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
    avatar: "./image/sm-s908_galaxys22ultra_front_burgundy_211119.webp",
    name: "Samsung Galaxy S22 Ultra (8GB - 128GB)",
    size: "6.8 inches",
    ram: "8 GB",
    rom: "128 GB",
    price: "23.750.000&nbsp;₫",
    text: "[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ  ",
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
elmSale.innerHTML = resUI;
elmDonate.innerHTML = resUI;

// let elmframe = document.getElementById("frame");
// let sale = {
//   id: 1,
//   avatar: "./image/ongba.webp",
//   avatar_img: "./image/chame.webp",
//   avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//   name: " Samsung Galaxy S20 Ultra",
//   price: "15.750.000&nbsp;₫",
// };
// let listSale = [
//   {
//     id: 1,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 2,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 3,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 4,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 5,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 6,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 7,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 8,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 9,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
//   {
//     id: 10,
//     avatar: "./image/ongba.webp",
//     avatar_img: "./image/chame.webp",
//     avatar_phone: "./image/637170935875912528_ss-s20-ultra-den-1.webp",
//     name: " Samsung Galaxy S20 Ultra",
//     price: "15.750.000&nbsp;₫",
//   },
// ];

// function formatRowUser(sale) {
//   return `
//   <div class="sale__frame" id="frame">
//   <div class="sale__img">
//     <img src="./image/ongba.webp" alt="" />
//     <img src="./image/chame.webp" alt="" />
//   </div>
//   <div class="sale">
//     <ul class="product">
//       <li>
//         <div class="product__item">
//           <div class="product__top">
//             <a href="" class="product__img"
//               ><img
//                 src="./image/637170935875912528_ss-s20-ultra-den-1.webp"
//                 alt=""
//             /></a>
//             <a href="" class="buy__now">Mua Ngay</a>
//           </div>
//           <div class="product__info">
//             <a href="" class="product__cat">
//               Samsung Galaxy S20 Ultra
//             </a>
//             <a href="" class="product__name">
//               <div class="product__badge">
//                 <p class="product__info__item">6.9 inches</p>
//                 <p class="product__info__item">12 GB</p>
//                 <p class="product__info__item">128 GB</p>
//               </div>
//             </a>
//             <div class="product__money">15.750.000&nbsp;₫</div>
//           </div>
//         </div>
//       </li>
//     </ul>
//     <div></div>
//   </div>
// </div>
//       `;
// }

// let resSale = "";

// for (let a = 0; a < listSale.length; index++) {
//   resSale += formatRowUser(listSale[a]);
// }

// elmframe.innerHTML = resSale;
