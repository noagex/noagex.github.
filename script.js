// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// =========================
// STICKY NAVBAR
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// =========================
// IMAGE SLIDER
// =========================

document.querySelectorAll(".slider").forEach(slider=>{

    const slides=slider.querySelectorAll(".slide");

    const prev=slider.querySelector(".prev");

    const next=slider.querySelector(".next");

    let current=0;

    function showSlide(index){

        slides.forEach(slide=>slide.classList.remove("active"));

        slides[index].classList.add("active");

    }

    if(prev && next){

        prev.onclick=()=>{

            current=(current-1+slides.length)%slides.length;

            showSlide(current);

        }

        next.onclick=()=>{

            current=(current+1)%slides.length;

            showSlide(current);

        }

        setInterval(()=>{

            current=(current+1)%slides.length;

            showSlide(current);

        },3500);

    }

});

// =========================
// WISHLIST
// =========================

document.querySelectorAll(".wishlist").forEach(item=>{

    item.addEventListener("click",()=>{

        const icon=item.querySelector("i");

        icon.classList.toggle("fa-regular");

        icon.classList.toggle("fa-solid");

        icon.style.color="#ff3d3d";

    });

});

// =========================
// QUICK VIEW
// =========================

const popup=document.getElementById("popup");

const popupImage=document.getElementById("popupImage");

const close=document.querySelector(".close");

document.querySelectorAll(".view").forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        popup.style.display="flex";

        if(index===0){

            popupImage.src="images/ad.png";

        }else{

            popupImage.src="images/ad4.png";

        }

    });

});

close.onclick=()=>{

    popup.style.display="none";

}

window.onclick=(e)=>{

    if(e.target==popup){

        popup.style.display="none";

    }

}

// =========================
// BUY BUTTON
// =========================

document.querySelectorAll(".buy").forEach(button=>{

button.addEventListener("click",()=>{

alert("Thank you for choosing NO AGEx ❤️");

});

});

// =========================
// COLOR SELECTOR
// =========================

document.querySelectorAll(".card").forEach(card=>{

const colors=card.querySelectorAll(".color");

const slides=card.querySelectorAll(".slide");

colors.forEach((color,index)=>{

color.addEventListener("click",()=>{

colors.forEach(c=>c.style.border="3px solid white");

color.style.border="3px solid gold";

if(slides[index]){

slides.forEach(s=>s.classList.remove("active"));

slides[index].classList.add("active");

}

});

});

});

// =========================
// SCROLL ANIMATION
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.review-card,.about,.newsletter,.instagram").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// =========================
// CART
// =========================

let cart=0;

const cartButton=document.querySelector(".sticky-cart button");

document.querySelectorAll(".buy").forEach(btn=>{

btn.addEventListener("click",()=>{

cart++;

cartButton.innerHTML=`<i class="fa-solid fa-bag-shopping"></i> Cart (${cart})`;

});

});

// =========================
// NEWSLETTER
// =========================

const form=document.querySelector(".newsletter form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=form.querySelector("input").value;

if(email==""){

alert("Please enter your email.");

return;

}

alert("Welcome to NO AGEx ❤️");

form.reset();

});

// =========================
// SMOOTH LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("NO AGEx Premium Website Loaded Successfully 🚀");