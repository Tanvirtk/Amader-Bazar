/* =======================================================
   PRODUCT DATA
   img: গুগল থেকে নেওয়া ইমেজ লিংক বসান এভাবে।
   ভবিষ্যতে নতুন প্রোডাক্ট যোগ করতে চাইলে এই array-তে যত খুশি
   object যোগ করুন (যেকোনো category-র জন্য, যেমন "মুদি"-তে
   একসাথে অনেক প্রোডাক্ট রাখা যাবে) — পেজে অটোমেটিক দেখাবে।
======================================================= */
const products = [
  { img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80", name:"আপেল", category:"ফল", price:"৳250 / kg", market:"Fruit Market" },
  { img:"https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=400&q=80", name:"কলা", category:"ফল", price:"৳80 / dozen", market:"Fruit Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTIFz_c7ex3fCXpGg6V_e98y1mPbFNPS7Ha9qrj3MsQ&s=10", name:"কমলা", category:"ফল", price:"৳180 / kg", market:"Fruit Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuddGD0NAO1s1iH_O1lQf0Hl8t8KZNdI8QmZWvPbQ7brRugM6YikL2Vg&s=10", name:"আপেল", category:"ফল", price:"৳280 / kg", market:"Fruit Market" },


{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDGD3X31MAKbF5wTvZfa8O1x7-BlmzjFLwQc0PYnrYA&s=10", name:"আম", category:"ফল", price:"৳220 / kg", market:"Fruit Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRLLKG4SaoDBds5L3nt1agRVW09kFx5qyQgVhhtF5QA&s=10", name:"লিচু", category:"ফল", price:"৳180 / ১০০টি", market:"Fruit Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41Tdj0nvCu9_9jhFdJm2-TaSUvSpYFSKlb918x-qD5Q&s", name:"আনারস", category:"ফল", price:"৳90 / পিস", market:"Fruit Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQkjvsxjsmrPCNlQgFFKB2S_4aeXuGjH34w-yCZZl8g&s=10", name:"পেঁপে", category:"ফল", price:"৳70 / kg", market:"Fruit Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6M0iBcxXJUVwkoMsD7vwrT37T_KJ0du7F4uBe6hxpXA&s=10", name:"পেয়ারা", category:"ফল", price:"৳100 / kg", market:"Fruit Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-16WpA-yODo470ZXCR1bT0rW_DwZvcXoCCGA3HqZjMg&s=10", name:"ডালিম", category:"ফল", price:"৳350 / kg", market:"Fruit Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdxfuLzkv7E0bZfVHgONpcEiqxxNEANPyB-MtmAP59K7E0yQSflBv27Y6&s=10", name:"টমেটো", category:"সবজি", price:"৳60 / kg", market:"Kawran Bazar" },
  { img:"https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&q=80", name:"গাজর", category:"সবজি", price:"৳70 / kg", market:"Kawran Bazar" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eimdXE7eRvhw8tH6QNn_ykjCA6e9ge6OAHjufVdjVw&s=10", name:"বেগুন", category:"সবজি", price:"৳80 / kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpQXP24es_B4OLLEq3me7dVESOrUIcJoPpYSpCjRu7Q&s=10", name:"ফুলকপি", category:"সবজি", price:"৳60 / পিস", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_VkygTUvdL-wAvfauLHz_nsgdB7xdrWEqsiqN11Ztw&s=10", name:"বাঁধাকপি", category:"সবজি", price:"৳50 / পিস", market:"Kawran Bazar" },
{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwmcjVskZ9_REW-N4ulqj_8pmRpsZSHZ7fnT3RrLCuRa0vpWCjRMDxKk&s=10", name:"পেঁয়াজ", category:"সবজি", price:"৳65 / kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMopI3vMCVnlTQ_lyRE0n_FuoIpRbD_kWP6iczzRFr9A&s=10", name:"রসুন", category:"সবজি", price:"৳180 / kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2OEcCA6spPRDJim2HsoBH8MjYka-h25FjKC2QbUliQ&s=10", name:"আদা", category:"সবজি", price:"৳240 / 1/2 kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGHg5B1kDfWx0D2QUcRGxKQ-QGVY462h07hBXj1bOTb1jCDMZcAN85vgz&s=10", name:"করলা", category:"সবজি", price:"৳90 / kg", market:"Kawran Bazar" },

{ img:"https://m.media-amazon.com/images/I/51M3fy0bZAL._AC_UF1000,1000_QL80_.jpg", name:"শসা", category:"সবজি", price:"৳70 / kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHbQhfxcivvRh8TjUYVgFIBV7r8mWIzuHehKJHzUg-w&s=10", name:"ঢেঁড়স", category:"সবজি", price:"৳80 / kg", market:"Kawran Bazar" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKOR5uNGTd65ReyHnJz7LEAqQFQeE6wLuKhnMMy3cuw&s=10", name:"লাউ", category:"সবজি", price:"৳80 / পিস", market:"Kawran Bazar" },
  { img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80", name:"আলু", category:"সবজি", price:"৳35 / kg", market:"Local Bazar" },
  { img:"https://t3.ftcdn.net/jpg/20/77/92/94/360_F_2077929448_8UcQ64xbZJc57Q6CcBYymet0606Sy1ol.jpg", name:"রুই মাছ", category:"মাছ", price:"৳350 / kg", market:"Fish Market" },
  { img:"https://upload.wikimedia.org/wikipedia/commons/d/d3/BHilsa123.jpg", name:"ইলিশ মাছ", category:"মাছ", price:"৳1200 / kg", market:"Fish Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNa1mjR8-9XpWZCbO1D9OS7nxZgOjSOCcxBrhg2huCw&s=10", name:"কাতলা মাছ", category:"মাছ", price:"৳450 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbNmud_04D2qCRRdciErkKgaQxq1v16rPDTZjA_e3eg&s=10", name:"কালিবাউশ মাছ", category:"মাছ", price:"৳420 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCS8wU_-kDsoQbR4IwW4EFouF3baukTo7fzRiLi1atg&s=10", name:"কৈ মাছ", category:"মাছ", price:"৳650 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOHl9t8r-5gUSMD1UlfeTQwiYQluvf5hjCdx8YSKGBw&s=10", name:"মাগুর মাছ", category:"মাছ", price:"৳800 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiBd1hWi1IQuYgPP1NMHVFIagLk665a729N-cIk5U8Xh_H4Q_zZ4Rt2c&s=10", name:"শিং মাছ", category:"মাছ", price:"৳900 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi2rd6BJchnPZYakoSbkPcCfOfFA4gPLL4PnJhv696w&s=10", name:"তেলাপিয়া মাছ", category:"মাছ", price:"৳260 / kg", market:"Fish Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufiDWtm7uu-3NB-0KIrdBjJFSFpSRZQWnvNbjY0XERQ&s=10", name:"শোল মাছ", category:"মাছ", price:"৳700 / kg", market:"Fish Market" },
  { img:"https://www.dailyfoodshop.com/wp-content/uploads/2020/04/beef-gorur-mangso-meat.jpg", name:"গরুর মাংস", category:"মাংস", price:"৳750 / kg", market:"Meat Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWMDJ4mdX3zaPnmrluKlQ8m_FrODnTvuxaqwSovp2yg&s=10", name:"খাসির মাংস", category:"মাংস", price:"৳1100 / kg", market:"Meat Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz3sJCbvKt-hsyouyxORFtyTgRR-kQTFzL804LZrDz8VBYqfv4AEJCmkX&s=10", name:"দেশি মুরগি", category:"মাংস", price:"৳450 / পিস", market:"Meat Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalVHU5gP0uuWDcThLihsfrFO7hLy3k0c4bEx7TfYckA&s=10", name:"হাঁসের মাংস", category:"মাংস", price:"৳500 / পিস", market:"Meat Market" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZllBQ42kR4t2V4CRFOQTwWH98gkv7J_J4oaFBzXClA&s=10", name:"কবুতরের মাংস", category:"মাংস", price:"৳600 / জোড়া", market:"Meat Market" },
  { img:"https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&q=80", name:"মুরগির মাংস", category:"মাংস", price:"৳220 / kg", market:"Meat Market" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZEdYnhkdWm2fqSbK1Cx1ipnLHt4fhtZ4VACcwVXfkGmaI3shZiebBa7I&s=10", name:"হলুদ গুঁড়া", category:"মসলা", price:"৳150 / 250 g", market:"Spice Corner" },
 { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSziVSSBuxJw57mleHjLb0J6sAYmJ8MSKOD77gr3kAFA&s=10", name:"মরিচ গুঁড়া", category:"মসলা", price:"৳150 / 250 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiQe_MfHXvPOtBbwMqTLxw26JrI2uZ_nJ1cwEIMsloQ&s=10", name:"জিরা গুঁড়া", category:"মসলা", price:"৳350 / 250 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXEwjn78yMj9OjarXL1hPOr1ItRgN4Y7UvVWRbHt2VA&s=10", name:"ধনিয়া গুঁড়া", category:"মসলা", price:"৳150 / 250 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtOTV9qhu-vJ3mkZtjkeWNQG18sXFGTApC46c3V-bAg&s=10", name:"গরম মসলা", category:"মসলা", price:"৳200 / 250 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEfGLTtRF91R_5N7tX2evNLJRWst9YTejvgEHDS9jJA&s=10", name:"গোলমরিচ গুঁড়া", category:"মসলা", price:"৳180 / 250 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoyg7T40RfjCCdZewrSFHMteoGuIgxAeGcNqVAPSFW2Q&s=10", name:"দারুচিনি", category:"মসলা", price:"৳230 / 150 g", market:"Spice Corner" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRosP_YJzVvmW45YnUcifikWTzmrBPaOvQb3qdiSxjCKA&s=10", name:"এলাচ", category:"মসলা", price:"৳350 / 100 g", market:"Spice Corner" },
  { img:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80", name:"দুধ", category:"দুগ্ধজাত", price:"৳190 / 2 litre", market:"Dairy Shop" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieqBpi-xB4FT0gTPmfZav8aXfUByULMQ9iIaNsig3kdQgSyhF6JLeaA0&s=10", name:"পাঙ্গাশ ", category:"মাছ", price:"৳170 / kg", market:"Fish Market" },
 { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNKHVaGBAQ00jcfnsi1bUhZoL6yefEGYzUQXivoaLhQ&s", name:"সাদা ডিম", category:"ডিম", price:"৳130 / dozen", market:"Local Bazar" },

{ img:"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80", name:"লাল ডিম", category:"ডিম", price:"৳145 / dozen", market:"Local Bazar" },

// ===== মুদি (grocery) — এখানে যত খুশি প্রোডাক্ট যোগ করা যাবে =====
  { img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", name:"চাল (মিনিকেট)", category:"মুদি", price:"৳68 / kg", market:"Grocery Store" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUm9wvHdWIBOvpZvZT0EpBgGDTzsfVjvsUY2W0Au1MwA&s=10", name:"আটা", category:"মুদি", price:"৳55 / kg", market:"Grocery Store" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFamfGxLI99B7BDWOQBQjtBSmbhXKXiuqaiWlQ0nTb1VrNrCX-BhyM5-j1&s=10", name:"চিনি", category:"মুদি", price:"৳120 / kg", market:"Grocery Store" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEruxljaYnYLmsWYu8E-fJxg9b0e-Ai3GjggzcL3GOdcJwae6q0CryTkE&s=10", name:"লবণ", category:"মুদি", price:"৳40 / kg", market:"Grocery Store" },
  { img:"https://d2t8nl1y0ie1km.cloudfront.net/images/6681350df077212bd74ef338_Fresh-Soyabean-Oil-1L_1.webp", name:"সয়াবিন তেল", category:"মুদি", price:"৳185 / litre", market:"Grocery Store" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7pt9UTcEQ_NR_gBTKuccpL8vboblFnY47BQQa5lBAw&s=10", name:"সরিষার তেল", category:"মুদি", price:"৳320 / litre", market:"Grocery Store" },
  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8SahC-12Xa8xbvReQX8nKv4t_nMH-dzp1zahb789Ag&s=10", name:"মসুর ডাল", category:"মুদি", price:"৳140 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmDcF49zGgu__Ugy_ue8MqmULFy8uQxNb0e66N50EkA&s=10", name:"মুগ ডাল", category:"মুদি", price:"৳180 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUTxWfto-K4CzDiLOaYpGOX7wFx5sl9kat99bOQrPGQ&s=10", name:"ছোলা", category:"মুদি", price:"৳130 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjg8thOy1-r_F7UWyf1pxPnUMnLH1fTA0N_OHD6KILw&s=10", name:"বুটের ডাল", category:"মুদি", price:"৳125 / kg", market:"Grocery Store" },

{ img:"https://m.media-amazon.com/images/I/91049MAA4rL._AC_UF894,1000_QL80_.jpg", name:"সেমাই", category:"মুদি", price:"৳90 / প্যাকেট", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNa4G7eidhBU2e2mfdgq7N1j1McZBTBS0WCk7_v6KO5Q&s=10", name:"ময়দা", category:"মুদি", price:"৳65 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJ4dnctE5-rd5GJyLlNsHxiQejroHTIXh9lxu_qOGA75jHbLnFesrFdGy&s=10", name:"গুড়", category:"মুদি", price:"৳180 / kg", market:"Grocery Store" },
{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2vZSs7mQoYFgSSIkF9a_enDX6MNkXcU3v1pUQW9E6A&s=10", name:"পোলাও চাল", category:"মুদি", price:"৳125 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaC4v9YYB3jer99unX6qaIz8dmRF0H86qZJihLOyXzw&s=10https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&q=80", name:"কালাই ডাল", category:"মুদি", price:"৳170 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvzo0Q835a2yk2EgOwVeulo6HWeN28J6HoDWr4FmSMQ&s=10", name:"মটর ডাল", category:"মুদি", price:"৳120 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa41r-O-Ra0VCM8lqTYxfmxZrqdEBBUJf5bSXDyQnqcLsit1LZLsAbsC4L&s=10", name:"চিঁড়া", category:"মুদি", price:"৳95 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bJ-ZMjmR84fdsAMTOi2OkGyEJjOVDm9lNYJxLj0JBA&s=10", name:"মুড়ি", category:"মুদি", price:"৳110 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WJAot1L2eySc_ZBQrhhLnMv1ihl0opHwN_sQagr6dA&s", name:"সুজি", category:"মুদি", price:"৳75 / kg", market:"Grocery Store" },

{ img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwjGhzVa2HEHnnJ2u7ykX5SYzNFZP3zEOvK_oXFDX2HxdHKRHQAXlRAE&s=10", name:"গুঁড়া দুধ", category:"মুদি", price:"৳850 / kg", market:"Grocery Store" },


  // ===== এভাবে নতুন { } অবজেক্ট বসিয়ে যেকোনো category-তে আরও প্রোডাক্ট যোগ করুন =====
];
  // ===== এভাবে নতুন { } অবজেক্ট বসিয়ে যেকোনো category-তে আরও প্রোডাক্ট যোগ করুন =====



const categories = ["সব","ফল", "সবজি", "মাছ", "মাংস", "মসলা", "দুগ্ধজাত", "ডিম", "মুদি"];
 
let activeCategory = "সব";
let searchTerm = "";
 
/* ===== Render category chips ===== */
const categoryBar = document.getElementById('category-bar');
function renderCategories(){
  categoryBar.innerHTML = categories.map(cat => `
    <button class="chip ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
      <span class="dot"></span>${cat}
    </button>
  `).join('');
  categoryBar.querySelectorAll('.chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCategory = btn.dataset.cat;
      renderCategories();
      renderProducts();
    });
  });
}
 
/* ===== Render product grid ===== */
const grid = document.getElementById('product-grid');
const emptyState = document.getElementById('empty-state');
const resultCount = document.getElementById('result-count');
 
function renderProducts(){
  const filtered = products.filter(p=>{
    const matchesCategory = activeCategory === "সব" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
 
  resultCount.textContent = filtered.length;
 
  if(filtered.length === 0){
    grid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  grid.style.display = 'grid';
  emptyState.style.display = 'none';
 
  grid.innerHTML = filtered.map((p, i) => `
    <article class="card">
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/1F5D50/FBF3E4?text=${encodeURIComponent(p.name)}'">
        <span class="card-cat-tag">${p.category}</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="card-market">${p.market}</div>
        <div class="card-footer">
          <span class="card-price mono">${p.price}</span>
          <button class="card-btn" onclick='addToCart(${JSON.stringify(p)})'>কার্টে যোগ করুন</button>
        </div>
      </div>
    </article>
  `).join('');
}
 
/* ===== Search ===== */
document.getElementById('search-input').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderProducts();
});
 
/* ===== Logout (session-based, কোনো token লাগবে না, cookie নিজে থেকেই যাবে) ===== */
document.getElementById('logout-btn').addEventListener('click', async ()=>{
  if(!confirm('আপনি কি নিশ্চিতভাবে লগআউট করতে চান?')) return;
 
  try{
    const res = await fetch('/logout', { method: 'POST' });
    const data = await res.json();
 
    if(data.success){
      showToast('👋 লগআউট সফল হয়েছে');
      setTimeout(()=> window.location.replace('/index.html'), 500);
    } else {
      showToast('❌ লগআউট ব্যর্থ হয়েছে');
    }
  } catch(err){
    console.error('Logout error:', err);
    showToast('❌ সার্ভারে সংযোগ করা যায়নি');
  }
});
 
/* ===== Complaint modal open/close ===== */
const modalOverlay = document.getElementById('modal-overlay');
document.getElementById('open-complaint-btn').addEventListener('click', ()=>{
  modalOverlay.classList.add('open');
});
document.getElementById('modal-close-btn').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e)=>{
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});
function closeModal(){
  modalOverlay.classList.remove('open');
}
 
/* ===== Image upload (evidence) with preview + drag&drop ===== */
const uploadZone = document.getElementById('upload-zone');
const fileInput = document.getElementById('evidence-upload');
const previewWrap = document.getElementById('preview-wrap');
const previewImg = document.getElementById('preview-img');
let uploadedImageData = null;
 
fileInput.addEventListener('change', (e)=>{
  handleFile(e.target.files[0]);
});
uploadZone.addEventListener('dragover', (e)=>{
  e.preventDefault();
  uploadZone.classList.add('drag-over');
});
uploadZone.addEventListener('dragleave', ()=> uploadZone.classList.remove('drag-over'));
uploadZone.addEventListener('drop', (e)=>{
  e.preventDefault();
  uploadZone.classList.remove('drag-over');
  handleFile(e.dataTransfer.files[0]);
});
 
function handleFile(file){
  if(!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (e)=>{
    uploadedImageData = e.target.result;
    previewImg.src = uploadedImageData;
    previewWrap.style.display = 'flex';
  };
  reader.readAsDataURL(file);
}
 
document.getElementById('remove-img-btn').addEventListener('click', ()=>{
  uploadedImageData = null;
  fileInput.value = '';
  previewWrap.style.display = 'none';
});
 
/* ===== Complaint form submit (আসল API কল, FormData দিয়ে ছবিসহ) ===== */
document.getElementById('report-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
 
  const productName = document.getElementById('product-name').value.trim();
  const complaintType = document.getElementById('complaint-type').value;
  const desc = document.getElementById('complaint-desc').value.trim();
  const submitBtn = e.target.querySelector('.submit-btn');
  const originalBtnText = submitBtn.textContent;
 
  const formData = new FormData();
  formData.append('productName', productName);
  formData.append('complaintType', complaintType);
  formData.append('description', desc);
  if(fileInput.files[0]){
    formData.append('image', fileInput.files[0]);
  }
 
  submitBtn.textContent = 'জমা হচ্ছে...';
  submitBtn.disabled = true;
 
  try{
    const res = await fetch('/complaints', {
      method: 'POST',
      body: formData   // session cookie same-origin হওয়ায় নিজে থেকেই যাবে, Authorization লাগবে না
    });
    const data = await res.json();
 
    if(data.success){
      closeModal();
      e.target.reset();
      previewWrap.style.display = 'none';
      uploadedImageData = null;
      showToast('✅ আপনার অভিযোগ জমা হয়েছে। ধন্যবাদ।');
    } else {
      showToast('❌ ' + (data.message || 'অভিযোগ জমা দিতে সমস্যা হয়েছে'));
    }
  } catch(err){
    console.error('Complaint submit error:', err);
    showToast('❌ সার্ভারে সংযোগ করা যায়নি। আবার চেষ্টা করুন।');
  } finally{
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;
  }
});
 
/* =======================================================
   CART সিস্টেম — একসাথে অনেক প্রোডাক্ট অর্ডার করার জন্য
   localStorage এ সেভ থাকে, পেজ রিফ্রেশ/বন্ধ করলেও কার্ট থেকে যায়
======================================================= */
let cart = JSON.parse(localStorage.getItem('bazar_cart') || '[]');
 
function saveCart(){
  localStorage.setItem('bazar_cart', JSON.stringify(cart));
  updateCartBadge();
}
 
function updateCartBadge(){
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = totalQty;
  badge.style.display = totalQty > 0 ? 'inline-flex' : 'none';
}
 
function addToCart(product){
  const existing = cart.find(item => item.name === product.name && item.market === product.market);
  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  showToast(`🛒 ${product.name} কার্টে যোগ হয়েছে`);
}
 
function removeFromCart(index){
  cart.splice(index, 1);
  saveCart();
  renderCartModal();
}
 
function changeCartQty(index, delta){
  cart[index].quantity += delta;
  if(cart[index].quantity < 1) cart[index].quantity = 1;
  saveCart();
  renderCartModal();
}
 
/* ===== কার্ট মডাল খোলা/বন্ধ করা ===== */
const cartModalOverlay = document.getElementById('cart-modal-overlay');
document.getElementById('open-cart-btn').addEventListener('click', ()=>{
  renderCartModal();
  cartModalOverlay.classList.add('open');
});
document.getElementById('cart-modal-close-btn').addEventListener('click', ()=>{
  cartModalOverlay.classList.remove('open');
});
cartModalOverlay.addEventListener('click', (e)=>{
  if(e.target === cartModalOverlay) cartModalOverlay.classList.remove('open');
});
 
function renderCartModal(){
  const wrap = document.getElementById('cart-items-wrap');
  const emptyMsg = document.getElementById('cart-empty-msg');
  const checkoutBtn = document.getElementById('checkout-btn');
 
  if(cart.length === 0){
    wrap.innerHTML = '';
    emptyMsg.style.display = 'block';
    checkoutBtn.style.display = 'none';
    return;
  }
  emptyMsg.style.display = 'none';
  checkoutBtn.style.display = 'block';
 
  wrap.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/1F5D50/FBF3E4?text=+'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.price} • ${item.market}</div>
      </div>
      <div class="cart-item-qty">
        <button type="button" onclick="changeCartQty(${i}, -1)">−</button>
        <span>${item.quantity}</span>
        <button type="button" onclick="changeCartQty(${i}, 1)">+</button>
      </div>
      <button type="button" class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
    </div>
  `).join('');
}
 
/* ===== চেকআউট (কার্ট থেকে ডেলিভারি ফর্মে যাওয়া) ===== */
const orderModalOverlay = document.getElementById('order-modal-overlay');
const orderForm = document.getElementById('order-form');
 
document.getElementById('checkout-btn').addEventListener('click', ()=>{
  if(cart.length === 0) return;
  cartModalOverlay.classList.remove('open');
  orderForm.reset();
  orderModalOverlay.classList.add('open');
});
 
document.getElementById('order-modal-close-btn').addEventListener('click', closeOrderModal);
orderModalOverlay.addEventListener('click', (e)=>{
  if(e.target === orderModalOverlay) closeOrderModal();
});
function closeOrderModal(){
  orderModalOverlay.classList.remove('open');
}
 
/* ===== চূড়ান্ত অর্ডার সাবমিট (কার্টের সব প্রোডাক্ট একসাথে) ===== */
orderForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
 
  const deliveryAddress = document.getElementById('order-address').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const note = document.getElementById('order-note').value.trim();
  const submitBtn = e.target.querySelector('.submit-btn');
  const originalBtnText = submitBtn.textContent;
 
  submitBtn.textContent = 'অর্ডার হচ্ছে...';
  submitBtn.disabled = true;
 
  try{
    const res = await fetch('/orders/bulk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, deliveryAddress, phone, note })
    });
    const data = await res.json();
 
    if(data.success){
      closeOrderModal();
      cart = [];
      saveCart();
      showToast('✅ আপনার অর্ডার জমা হয়েছে। শীঘ্রই যোগাযোগ করা হবে।');
    } else {
      showToast('❌ ' + (data.message || 'অর্ডার জমা দিতে সমস্যা হয়েছে'));
    }
  } catch(err){
    console.error('Order submit error:', err);
    showToast('❌ সার্ভারে সংযোগ করা যায়নি। আবার চেষ্টা করুন।');
  } finally{
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;
  }
});
 
/* ===== Toast helper ===== */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 3000);
}
 
/* =======================================================
   FIXED HEADER + CATEGORY BAR — HEIGHT SYNC
   হেডার আর ক্যাটাগরি বার দুইটাই position:fixed, তাই তাদের আসল
   height মেপে CSS variable-এ বসিয়ে দিচ্ছি। এতে:
   - ক্যাটাগরি বার সবসময় হেডারের ঠিক নিচে, কোনো ফাঁকা জায়গা ছাড়াই বসবে
   - পেজের মূল কনটেন্ট এই দুইটার নিচে ঠিকভাবে শুরু হবে (spacer)
   - মোবাইলে হেডার wrap করলেও (একাধিক লাইন হলেও) লেআউট ভাঙবে না
======================================================= */
function syncFixedHeights(){
  const header = document.getElementById('site-header');
  const catBar = document.getElementById('category-bar-wrap');
  const headerH = header.offsetHeight;
  const catH = catBar.offsetHeight;
  document.documentElement.style.setProperty('--header-h', headerH + 'px');
  document.documentElement.style.setProperty('--fixed-h', (headerH + catH) + 'px');
}
 
window.addEventListener('load', syncFixedHeights);
window.addEventListener('resize', syncFixedHeights);
// ফন্ট লোড হওয়ার পর হেডারের height সামান্য বদলাতে পারে, তাই আবার মাপা হচ্ছে
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(syncFixedHeights);
}
 
/* ===== লগইন আছে কিনা চেক (logout এর পর back button দিয়ে এই পেজ যেন আর না দেখায়) ===== */
async function checkSessionOnLoad(){
  try{
    const res = await fetch('/check-session', { cache: 'no-store' });
    const data = await res.json();
    if(!data.loggedIn){
      window.location.replace('/index.html');
    }
  } catch(err){
    console.error('Session check error:', err);
  }
}
checkSessionOnLoad();
 
/* ===== Init ===== */
renderCategories();
renderProducts();
syncFixedHeights();
updateCartBadge();