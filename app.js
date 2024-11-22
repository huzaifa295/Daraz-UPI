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
        content:'Air Buds Pro || Wireless',
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

for(var i=0;i<CartsObj.length;i++){

    var main=document.getElementById('main')
    var carts=document.createElement('div')
    carts.setAttribute('class','carts')
    var cartBox1=document.createElement('div')
    cartBox1.setAttribute('class','cartBox1')
    
    var cartImg=document.createElement('img')
    cartImg.setAttribute('src',CartsObj[i].img)
    
    var cartBox2=document.createElement('div')
    cartBox2.setAttribute('class','cartBox2')
    
    var CartContent=document.createElement('h3')
    var CartContentText=document.createTextNode(CartsObj[i].content)
    
    var cartBox3=document.createElement('div')
    cartBox3.setAttribute('class','cartBox3')
    
    var cartPrice=document.createElement('p')
    var cartPriceText=document.createTextNode(CartsObj[i].price)
    
    var cartBox4=document.createElement('div')
    cartBox4.setAttribute('class','cartBox4')
    
    var cartRating=document.createElement('img')
    cartRating.setAttribute('src',CartsObj[i].rating)
    
    cartBox1.appendChild(cartImg)
    carts.appendChild(cartBox1)
    CartContent.appendChild(CartContentText)
    cartBox2.appendChild(CartContent)
    carts.appendChild(cartBox2)
    cartPrice.appendChild(cartPriceText)
    cartBox3.appendChild(cartPrice)
    carts.appendChild(cartBox3)
    cartBox4.appendChild(cartRating)
    carts.appendChild(cartBox4)
    main.appendChild(carts)
    
}

var moreCartsObj=[
    {
        img:'assets/images/main_img19.webp',
        content:'Printed Men Track Suit',
        price:'Rs.863',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img20.webp',
        content:"Wardrobe dino bag for multi purpose random",
        price:'Rs.119',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img21.webp',
        content:'LADIES GOLDEN CHAIN WATCH',
        price:'Rs.570',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img22.webp',
        content:'BINBOND Top Brand Luxury Man Wristwatch',
        price:'Rs.2,499',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img23.webp',
        content:'DECORA 3D Wooden Wall Hanging 3D Laser Cut',
        price:'Rs.165',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img24.webp',
        content:"Men's Hoodie High quality imported",
        price:'Rs.865',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img25.webp',
        content:'Stylish Pumps shoes for Ladies|Imported shoes',
        price:'Rs.739',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img26.webp',
        content:'Air 31 Air pro bluetooth handfree i7s TWS',
        price:'Rs.792',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img27.webp',
        content:'Face Value 5ml Perfume Automizer Spray Bottle ',
        price:'Rs.115',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img28.webp',
        content:'SHERICE Self Adhesive Black Marble Sheet',
        price:'Rs.358',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img29.webp',
        content:'Remote Controlled Fast Modern Car 3D Light',
        price:'Rs.863',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img30.webp',
        content:'100 Moringa Capsules | Best for weight Loss',
        price:'Rs.310',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img31.webp',
        content:"Cafe racer kit deal of 3 Item's Headlight",
        price:'Rs.860',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img32.webp',
        content:'100% Imported Branded Watch for Men and Boys',
        price:'Rs.331',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img33.webp',
        content:'Orignal TWS Airpods with Super Sound & High',
        price:'Rs.895',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img34.webp',
        content:'Miss Lara - Natural Cheek Tint Liquid Blush Soft',
        price:'Rs.359',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img35.webp',
        content:'Kitchen Trash Bag and Towel Rack Holder',
        price:'Rs.111',
        rating:'assets/images/rating_stars.png'
    },
    {
        img:'assets/images/main_img36.webp',
        content:'Pack Of 3 - Amazing Shoe Rack Shoe Shelf',
        price:'Rs.595',
        rating:'assets/images/rating_stars.png'
    },
]
 function loadMore(){

    for(var i=0;i<CartsObj.length;i++){

        var main=document.getElementById('main')
        var carts=document.createElement('div')
        carts.setAttribute('class','carts')
        var cartBox1=document.createElement('div')
        cartBox1.setAttribute('class','cartBox1')
        
        var cartImg=document.createElement('img')
        cartImg.setAttribute('src',moreCartsObj[i].img)
        
        var cartBox2=document.createElement('div')
        cartBox2.setAttribute('class','cartBox2')
        
        var CartContent=document.createElement('h3')
        var CartContentText=document.createTextNode(moreCartsObj[i].content)
        
        var cartBox3=document.createElement('div')
        cartBox3.setAttribute('class','cartBox3')
        
        var cartPrice=document.createElement('p')
        var cartPriceText=document.createTextNode(moreCartsObj[i].price)
        
        var cartBox4=document.createElement('div')
        cartBox4.setAttribute('class','cartBox4')
        
        var cartRating=document.createElement('img')
        cartRating.setAttribute('src',moreCartsObj[i].rating)
        
        cartBox1.appendChild(cartImg)
        carts.appendChild(cartBox1)
        CartContent.appendChild(CartContentText)
        cartBox2.appendChild(CartContent)
        carts.appendChild(cartBox2)
        cartPrice.appendChild(cartPriceText)
        cartBox3.appendChild(cartPrice)
        carts.appendChild(cartBox3)
        cartBox4.appendChild(cartRating)
        carts.appendChild(cartBox4)
        main.appendChild(carts)
        
    }

    for(var i=0;i<CartsObj.length;i++){

        var main=document.getElementById('main')
        var carts=document.createElement('div')
        carts.setAttribute('class','carts')
        var cartBox1=document.createElement('div')
        cartBox1.setAttribute('class','cartBox1')
        
        var cartImg=document.createElement('img')
        cartImg.setAttribute('src',CartsObj[i].img)
        
        var cartBox2=document.createElement('div')
        cartBox2.setAttribute('class','cartBox2')
        
        var CartContent=document.createElement('h3')
        var CartContentText=document.createTextNode(CartsObj[i].content)
        
        var cartBox3=document.createElement('div')
        cartBox3.setAttribute('class','cartBox3')
        
        var cartPrice=document.createElement('p')
        var cartPriceText=document.createTextNode(CartsObj[i].price)
        
        var cartBox4=document.createElement('div')
        cartBox4.setAttribute('class','cartBox4')
        
        var cartRating=document.createElement('img')
        cartRating.setAttribute('src',CartsObj[i].rating)
        
        cartBox1.appendChild(cartImg)
        carts.appendChild(cartBox1)
        CartContent.appendChild(CartContentText)
        cartBox2.appendChild(CartContent)
        carts.appendChild(cartBox2)
        cartPrice.appendChild(cartPriceText)
        cartBox3.appendChild(cartPrice)
        carts.appendChild(cartBox3)
        cartBox4.appendChild(cartRating)
        carts.appendChild(cartBox4)
        main.appendChild(carts)
        
    }
}

var footPanel1=document.getElementById('footPanel1')
footPanel1.setAttribute('class','footPanel1')

var footPanel1Box1=document.createElement('div')
footPanel1Box1.setAttribute('class','footPanel1Box1')

var panelBox1Container1=document.createElement('div')
panelBox1Container1.setAttribute('class','panelBox1Container1')
var panelContainer1Head=document.createElement('h3')
var panelContainer1HeadText=document.createTextNode('Payment Methods')

panelContainer1Head.appendChild(panelContainer1HeadText)
panelBox1Container1.appendChild(panelContainer1Head)

var panelBox1Container2=document.createElement('div')
panelBox1Container2.setAttribute('class','panelBox1Container2')

Box1Container2Img1=document.createElement('img')
Box1Container2Img1.setAttribute('src','assets/images/pament_img1.png')

Box1Container2Img2=document.createElement('img')
Box1Container2Img2.setAttribute('src','assets/images/pament_img2.png')

Box1Container2Img3=document.createElement('img')
Box1Container2Img3.setAttribute('src','assets/images/pament_img3.png')

Box1Container2Img4=document.createElement('img')
Box1Container2Img4.setAttribute('src','assets/images/pament_img4.png')

Box1Container2Img5=document.createElement('img')
Box1Container2Img5.setAttribute('src','assets/images/pament_img5.png')

Box1Container2Img6=document.createElement('img')
Box1Container2Img6.setAttribute('src','assets/images/pament_img6.png')

Box1Container2Img7=document.createElement('img')
Box1Container2Img7.setAttribute('src','assets/images/pament_img7.png')

Box1Container2Img8=document.createElement('img')
Box1Container2Img8.setAttribute('src','assets/images/pament_img8.png')

Box1Container2Img9=document.createElement('img')
Box1Container2Img9.setAttribute('src','assets/images/pament_img9.png')

panelBox1Container2.appendChild(Box1Container2Img1)
panelBox1Container2.appendChild(Box1Container2Img2)
panelBox1Container2.appendChild(Box1Container2Img3)
panelBox1Container2.appendChild(Box1Container2Img4)
panelBox1Container2.appendChild(Box1Container2Img5)
panelBox1Container2.appendChild(Box1Container2Img6)
panelBox1Container2.appendChild(Box1Container2Img7)
panelBox1Container2.appendChild(Box1Container2Img8)
panelBox1Container2.appendChild(Box1Container2Img9)

var footPanel1Box2=document.createElement('div')
footPanel1Box2.setAttribute('class','footPanel1Box2')

var panelBox2Container1=document.createElement('div')
panelBox2Container1.setAttribute('class','panelBox2Container1')

var panelContainer2Head=document.createElement('h3')
var panelContainer2HeadText=document.createTextNode('Verified by')

panelContainer2Head.appendChild(panelContainer2HeadText)
panelBox2Container1.appendChild(panelContainer2Head)

var panelBox2Container2=document.createElement('div')
panelBox2Container2.setAttribute('class','panelBox2Container2')

var panelBox2Container2Img=document.createElement('img')
panelBox2Container2Img.setAttribute('src','assets/images/verified_img1.png')

panelBox2Container2.appendChild(panelBox2Container2Img)

footPanel1Box1.appendChild(panelBox1Container1)
footPanel1Box1.appendChild(panelBox1Container2)
footPanel1.appendChild(footPanel1Box1)

footPanel1Box2.appendChild(panelBox2Container1)
footPanel1Box2.appendChild(panelBox2Container2)
footPanel1.appendChild(footPanel1Box2)














var footPanel2=document.getElementById('footPanel2')
footPanel2.setAttribute('class','footPanel1')

var footPanel2Box1=document.createElement('div')
footPanel2Box1.setAttribute('class','footPanel1Box1')

var panel2Box1Container1=document.createElement('div')
panel2Box1Container1.setAttribute('class','panelBox1Container1')
var panel2Container1Head=document.createElement('h3')
var panel2Container1HeadText=document.createTextNode('Daraz International')

panel2Container1Head.appendChild(panel2Container1HeadText)
panel2Box1Container1.appendChild(panel2Container1Head)

var panel2Box1Container2=document.createElement('div')
panel2Box1Container2.setAttribute('class','panelBox1Container2')

Panel2Box1Container2Img1=document.createElement('img')
Panel2Box1Container2Img1.setAttribute('src','assets/images/flag1.png')

Panel2Box1Container2Img2=document.createElement('img')
Panel2Box1Container2Img2.setAttribute('src','assets/images/flag2.png')

Panel2Box1Container2Img3=document.createElement('img')
Panel2Box1Container2Img3.setAttribute('src','assets/images/flag3.png')

Panel2Box1Container2Img4=document.createElement('img')
Panel2Box1Container2Img4.setAttribute('src','assets/images/flag4.png')

Panel2Box1Container2Img5=document.createElement('img')
Panel2Box1Container2Img5.setAttribute('src','assets/images/flag5.png')


panel2Box1Container2.appendChild(Panel2Box1Container2Img1)
panel2Box1Container2.appendChild(Panel2Box1Container2Img2)
panel2Box1Container2.appendChild(Panel2Box1Container2Img3)
panel2Box1Container2.appendChild(Panel2Box1Container2Img4)
panel2Box1Container2.appendChild(Panel2Box1Container2Img5)


var footPanel2Box2=document.createElement('div')
footPanel2Box2.setAttribute('class','footPanel1Box2')

var panel2Box2Container1=document.createElement('div')
panel2Box2Container1.setAttribute('class','panelBox2Container1')

var panel2Container2Head=document.createElement('h3')
var panel2Container2HeadText=document.createTextNode('Follow Us')

panel2Container2Head.appendChild(panel2Container2HeadText)
panel2Box2Container1.appendChild(panel2Container2Head)

var panel2Box2Container2=document.createElement('div')
panel2Box2Container2.setAttribute('class','panelBox2Container2')

var panel2Box2Container2Img1=document.createElement('img')
panel2Box2Container2Img1.setAttribute('src','assets/images/follow_img1.png')

var panel2Box2Container2Img2=document.createElement('img')
panel2Box2Container2Img2.setAttribute('src','assets/images/follow_img2.png')

var panel2Box2Container2Img3=document.createElement('img')
panel2Box2Container2Img3.setAttribute('src','assets/images/follow_img3.png')

var panel2Box2Container2Img4=document.createElement('img')
panel2Box2Container2Img4.setAttribute('src','assets/images/follow_img4.png')

var panel2Box2Container2Img5=document.createElement('img')
panel2Box2Container2Img5.setAttribute('src','assets/images/follow_img5.png')

panel2Box2Container2.appendChild(panel2Box2Container2Img1)
panel2Box2Container2.appendChild(panel2Box2Container2Img2)
panel2Box2Container2.appendChild(panel2Box2Container2Img3)
panel2Box2Container2.appendChild(panel2Box2Container2Img4)
panel2Box2Container2.appendChild(panel2Box2Container2Img5)

footPanel2Box1.appendChild(panel2Box1Container1)
footPanel2Box1.appendChild(panel2Box1Container2)
footPanel2.appendChild(footPanel2Box1)

footPanel2Box2.appendChild(panel2Box2Container1)
footPanel2Box2.appendChild(panel2Box2Container2)
footPanel2.appendChild(footPanel2Box2)
