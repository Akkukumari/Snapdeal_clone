


let sliders = document.querySelectorAll(".slides");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

sliders.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
    counter++;
    carousel()
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel()
});

function carousel() {

    if (counter === sliders.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = sliders.length - 1;
    }

    sliders.forEach(function (slides) {
        slides.style.transform = `translateX(-${counter * 100}%)`;
    });
};


// ---card sliders--

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};




// -----card2---

// ---card sliders--
var products = JSON.parse(localStorage.getItem("snapdeal")) || [
    {
        "name": "N95 White Face Mask Reusable SDL636079837",
        "mrp": "159",
        "price": "129",
        "discount": "10",
        "img": "https://n1h2.sdlcdn.com/imgs/j/l/3/large/N95-White-Face-Mask-Reusable-SDL636079837-1-efb91.webp"
    },
    {
        "name": "Vighnraj Jewels Circular Blue Colored SDL992834142",
        "mrp": "259",
        "price": "159",
        "discount": "61",
        "img": "https://n1h2.sdlcdn.com/imgs/j/x/9/large/Vighnraj-Jewels-Circular-Blue-Colored-SDL992834142-1-29260.webp"
    },
    {
        "name": "Scotlon Krishna with Cute Calf SDL923415679",
        "mrp": "199",
        "price": "123",
        "discount": "81",
        "img": "https://n1h2.sdlcdn.com/imgs/f/4/5/large/Scotlon-Krishna-with-Cute-Calf-SDL923415679-3-06886.webp"
    },
    {
        "name": "HVBK Cotton Blend Grey Self Design T-Shirt",
        "mrp": "799",
        "price": "289",
        "discount": "64",
        "img": "https://n1h2.sdlcdn.com/imgs/j/r/3/large/HVBK-Cotton-Blend-Grey-Self-SDL663200475-1-65025.webp"
    },
    {
        "name": "Shiv Shakti Kavach 5 Mala With Shiv Trishul & Damru Wood Shiv Shakti Kavach Mukhi Rudraksha Wood Locket",
        "mrp": "699",
        "price": "130",
        "discount": "81",
        "img": "https://n1h2.sdlcdn.com/imgs/j/a/8/large/Shiv-Shakti-Kavach-5-Mala-SDL443330653-1-a0955.webp"
    },
    {
        "name": "Sambhav Deals PU Tan Formal Regular Wallet",
        "mrp": "1299",
        "price": "143",
        "discount": "89",
        "img": "https://n1h2.sdlcdn.com/imgs/j/m/d/large/Sambhav-Deals-PU-Tan-Formal-SDL622747316-1-0fc45.webp"
    },
    {
        "name": "Vastu Laughing buddha",
        "mrp": "499",
        "price": "223",
        "discount": "38",
        "img": "https://n1h2.sdlcdn.com/imgs/b/2/y/large/Vastu-Laughing-buddha-SDL982981024-1-34a94.webp"
    },
    {
        "name": "HELLCAT Black and Green Full Sleeve Tshirt Pack of 2",
        "mrp": "1599",
        "price": "423",
        "discount": "71",
        "img": "https://n1h2.sdlcdn.com/imgs/j/v/1/large/HELLCAT-Black-and-Green-Full-SDL984712037-1-dc7ba.webp"
    },
    {
        "name": "MEDI-SECURE N95 / 5 Layer Reusable multi color Anti - Pollution , Anti - Virus Breathable Face Mask N95 Washable (pack of 40pcs)",
        "mrp": "1899",
        "price": "223",
        "discount": "88",
        "img": "https://n1h2.sdlcdn.com/imgs/j/u/t/large/MEDI-SECURE-N95-5-Layer-SDL570663569-1-b256b.webp"
    },
    {
        "name": "Leotude Cotton Blend Navy Striper T-Shirt",
        "mrp": "1099",
        "price": "349",
        "discount": "68",
        "img": "https://n1h2.sdlcdn.com/imgs/j/y/e/large/Leotude-Cotton-Blend-Navy-Striper-SDL664245887-1-42164.webp"
    },
    {
        "name": "Aadi Outdoor Black Casual Shoes",
        "mrp": "999",
        "price": "423",
        "discount": "56",
        "img": "https://n1h2.sdlcdn.com/imgs/j/a/n/large/Aadi-Outdoor-Black-Casual-Shoes-SDL717045025-1-67d59.webp"
    },
    {
        "name": "Queue Safety tool 8 cm",
        "mrp": "999",
        "price": "223",
        "discount": "73",
        "img": "https://n1h2.sdlcdn.com/imgs/j/k/l/large/Queue-Pocket-Knife-8-cm-SDL819711574-1-09cd2.webp"
    },
    {
        "name": "7 in 1 tools hardware Soldering Iron Kit For DIY/Craft Work (Soldering Iron Heating Time 10 to 15 mins.)",
        "mrp": "599",
        "price": "223",
        "discount": "63",
        "img": "https://n1h2.sdlcdn.com/imgs/j/f/1/large/7-in-1-Soldering-kit-SDL965910093-1-15927.webp"
    },
    {
        "name": "Aadi Black Daily Slippers",
        "mrp": "499",
        "price": "229",
        "discount": "51",
        "img": "https://n1h2.sdlcdn.com/imgs/j/g/e/large/Aadi-Black-Daily-Slippers-SDL240235789-1-57d0d.webp"
    },
    {
        "name": "Scotlon Krishna with Cute Calf SDL923415679",
        "mrp": "199",
        "price": "123",
        "discount": "81",
        "img": "https://n1h2.sdlcdn.com/imgs/f/4/5/large/Scotlon-Krishna-with-Cute-Calf-SDL923415679-3-06886.webp"
    }
]

productLists(products);

function productLists(products) {
    document.querySelector(".trending").textContent = "";

    products.map(function (elem) {
        var div = document.createElement("div");
        div.setAttribute("class", "trenditems");
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);

        var p = document.createElement("p");
        p.textContent = elem.name;
        var span = document.createElement("span");
        span.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';

        var div2 = document.createElement("div")
        div2.setAttribute("class", "pricetag");


        var mrp = document.createElement("h5");
        mrp.textContent = "RS " + elem.mrp;
        var price = document.createElement("h4");
        price.textContent = "Rs " + elem.price;
        var dis = document.createElement("p");
        dis.textContent = elem.discount + "% Off";

        div2.append(mrp, price, dis)
        div.append(img, p, span, div2);
        div.addEventListener("click",()=>{
            window.location.href="product.html";
        })
        document.querySelector(".trending").append(div);
    });
}



// =======signup===


var item = JSON.parse(localStorage.getItem("userdata"))
//   document.querySelector("#user_name").value = item.name
var login_boolean = JSON.parse(localStorage.getItem("login_boolean"))
if (login_boolean) {
    document.getElementById("user_name").textContent = item.name
} else {
    // <a href="" id="user_name">Sign In <i class="fas fa-user-circle"></i></a>
}

    //   function namesignin(element){
    //   element.preventDefault();

    //   }


