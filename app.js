var flashObj = [
  {
    img: "assets/images/flash_img1.webp",
    content: "Surf Excel Washing Powder - 1KG",
    price: "Rs. 493",
    discount: "Rs. 549-10%",
  },
  {
    img: "assets/images/flash_img2.webp",
    content: "Dettol Soap Original 110gm - Pack of 12",
    price: "Rs. 1,307",
    discount: "Rs. 1,680-22%",
  },
  {
    img: "assets/images/flash_img3.webp",
    content: "Buy Now Techno Spark 3GB RAM",
    price: "Rs. 22,499",
    discount: "Rs. 1,680-22%",
  },
  {
    img: "assets/images/flash_img4.webp",
    content: "HWM 80-1269X-Haier-8 kg-Fully Automatic",
    price: "Rs. 22,499",
    discount: "Rs. 71,200-27%",
  },
  {
    img: "assets/images/flash_img5.webp",
    content: "GLUPATONE 50ml Cure Beauty Cream ",
    price: "Rs. 830",
    discount: "Rs. 1,280-35%",
  },
  {
    img: "assets/images/flash_img6.webp",
    content: "High Quality Weight Loss Machine",
    price: "Rs. 352",
    discount: "Rs. 699-50%",
  },
];

for (var i = 0; i < flashObj.length; i++) {
  var flashBottombar = document.getElementById("flashBottombar");
  flashBottombar.setAttribute("class", "flashBottombar");
  var flashCart = document.createElement("div");
  flashCart.setAttribute("class", "flashCart");
  flashBottombar.appendChild(flashCart);
  var flashCartBox1 = document.createElement("div");
  flashCartBox1.setAttribute("class", "flashCartBox1");
  var flashImg = document.createElement("img");
  flashImg.setAttribute("src", flashObj[i].img);
  flashImg.setAttribute("class", "flashImg");
  flashCartBox1.appendChild(flashImg);
  var flashCartBox2 = document.createElement("div");
  flashCartBox2.setAttribute("class", "flashCartBox2");
  flashHead = document.createElement("h3");
  flashHead.setAttribute("class", "flashHeadFont");
  flashHeadText = document.createTextNode(flashObj[i].content);
  flashHead.appendChild(flashHeadText);
  flashCartBox2.appendChild(flashHead);
  var flashCartBox3 = document.createElement("div");
  flashCartBox3.setAttribute("class", "flashCartBox3");
  flashPara = document.createElement("p");
  flashParaText = document.createTextNode(flashObj[i].price);
  flashPara.appendChild(flashParaText);
  flashCartBox3.appendChild(flashPara);
  var flashCartBox4 = document.createElement("div");
  flashCartBox4.setAttribute("class", "flashCartBox4");
  flashDiscount = document.createElement("p");
  flashDiscountText = document.createTextNode(flashObj[i].discount);
  flashDiscount.appendChild(flashDiscountText);
  flashCartBox4.appendChild(flashDiscount);
  flashCart.appendChild(flashCartBox1);
  flashCart.appendChild(flashCartBox2);
  flashCart.appendChild(flashCartBox3);
  flashCart.appendChild(flashCartBox4);
}

// Categories

var categoriesObj=[
    {
        img:'assets/images/categories_img1.jpg',
        head:'Sunglasses'
    },
    {
        img:'assets/images/categories_img2.png',
        head:'Mobiles'
    },
    {
        img:'assets/images/categories_img3.jpg',
        head:'Trash Bags'
    },
    {
        img:'assets/images/categories_img4.jpg',
        head:'Dogs & Cat Beds'
    },
    {
        img:'assets/images/categories_img5.jpg',
        head:'Tablets'
    },
    {
        img:'assets/images/categories_img6.jpg',
        head:'Ventilation Parts'
    },
    {
        img:'assets/images/categories_img7.jpg',
        head:'Starter Kits'
    },
    {
        img:'assets/images/categories_img8.jpg',
        head:'Toys'
    },
    {
        img:'assets/images/categories_img9.jpg',
        head:'Knife Sharpner'
    },
    {
        img:'assets/images/categories_img10.jpg',
        head:'Comfort, Quilts'
    },
    {
        img:'assets/images/categories_img11.jpg',
        head:'Microphones'
    },
    {
        img:'assets/images/categories_img12.jpg',
        head:'Zakat'
    },
    {
        img:'assets/images/categories_img13.jpg',
        head:'Stud Earrings'
    },
    {
        img:'assets/images/categories_img14.jpg',
        head:'Shower Hangers'
    },
    {
        img:'assets/images/categories_img15.jpg',
        head:'Stickers & Lables'
    },
    {
        img:'assets/images/categories_img16.jpg',
        head:'Dining Set'
    },
]

for (var i = 0; i < categoriesObj.length; i++) {
    var categories=document.getElementById('categories')
  categories.setAttribute("class", "categories");
  var categoriesBox = document.createElement("div");
  categoriesBox.setAttribute("class", "categoriesBox");
  var categoriesBoxBox1 = document.createElement("div");
  categoriesBoxBox1.setAttribute("class", "categoriesBoxBox1");
  var categoriesImg=document.createElement('img')
  categoriesImg.setAttribute('src',categoriesObj[i].img)
  var categoriesBoxBox2 = document.createElement("div");
  categoriesBoxBox2.setAttribute("class", "categoriesBoxBox2");
  var categoriesHead=document.createElement('h2')
  var categoriesHeadText=document.createTextNode(categoriesObj[i].head)

  categoriesBoxBox1.appendChild(categoriesImg)
  categoriesBox.appendChild(categoriesBoxBox1);
  categoriesHead.appendChild(categoriesHeadText)
  categoriesBoxBox2.appendChild(categoriesHead)
  categoriesBox.appendChild(categoriesBoxBox2);
  categories.appendChild(categoriesBox);
}

// Main Carts

var CartsObj=[
    {
        img:'assets/images/main_img1.webp',
        content:'Pack 2 Large Storage Bags, Storage Bag',
        price:'Rs.163',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img2.webp',
        content:"Men's Winter Collection 2 piece track suit",
        price:'Rs.819',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img3.webp',
        content:'Black the boys Print Winter Track Suit Hoodie',
        price:'Rs.1270',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img4.webp',
        content:'Watch for Men and Boys- Imported Wrist Watch',
        price:'Rs.499',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img5.webp',
        content:'Pack Of 2 - Amazing Shoe Rack Shoe Shelf Shoe',
        price:'Rs.365',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img6.webp',
        content:'Beautious Pack of 6 & 12 Lipsticks Matte Nude',
        price:'Rs.465',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img7.webp',
        content:'Special Multani Sohan Halwa Winter',
        price:'Rs.439',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img8.webp',
        content:'Handbag for girls - crossbody Bags for girls ',
        price:'Rs.792',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img9.webp',
        content:'Air buds Air 31 Wireless Bluetooth-Compatible',
        price:'Rs.815',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img10.webp',
        content:'Official Silicon For iPhone 7/8 X/11/12/13/14/15/16',
        price:'Rs.458',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img11.webp',
        content:'',
        price:'Rs.763',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img12.webp',
        content:'Nails Box Artificial Nails Pack',
        price:'Rs.410',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img13.webp',
        content:'Magic Water Book, Water Drawing Book, Reusable',
        price:'Rs.160',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img14.webp',
        content:'Hanger - Plastic Hanger - Hangers Large Pack',
        price:'Rs.231',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img15.webp',
        content:'5 Layers Stock able Shoe Rack Shoe Shelf',
        price:'Rs.995',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img16.webp',
        content:'Acrylic Hexagon 3D Mirror Wall Decals |',
        price:'Rs.359',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img17.webp',
        content:'Amazing Smart and New Supra Car printed winter',
        price:'Rs.911',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img18.webp',
        content:'100% Waterproof Washing Machine Cover -',
        price:'Rs.495',
        rating:'assets/images/rating_stars.png'
    },
]

var main=document.getElementById('main')
var carts=document.createElement('div')