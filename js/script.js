// header cousomize 
let prom = new Promise((resolve, reject) => {
    addEventListener('load', () => {
        let hdr_blur = document.getElementsByTagName('header')[0]
        let main_blur = document.getElementsByTagName('main')[0]
        let loader = document.querySelector('.loding')
        document.body.style.overflow = 'auto';
        document.body.classList.add("finish_blur_loding")
        let landing_text_h1 = document.querySelector(".landing .container .text h1")
        let landing_text_p = document.querySelector(".landing .container .text p")
        main_blur.classList.add('finish_blur_loding')
        hdr_blur.classList.add('finish_blur_loding')
        loader.classList.add('finish_loding')
        landing_text_h1.classList.add('transform-and-opactie-return')
        landing_text_p.classList.add('transform-and-opactie-return')
        document.querySelector('nav').classList.add('transform-and-opactie-return')
        document.querySelector('header .logo').classList.add('transform-and-opactie-return')
        document.querySelector('header .logo').classList.contains("transform-and-opactie-return") && resolve()
    })
}).then(_ => {

    const typedTextSpan = document.querySelector(".typed-text");
    typedTextSpan.innerHTML = ""
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["للتركيبات الصحية الحديثة", "لكل ما هو جديد في عالم السباكة "];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    return setTimeout(type, newTextDelay + 2200)

})
let hdr = document.querySelector('header')
let hdr_logo = document.querySelector('#logo-h2')
let nav_links = document.querySelectorAll('nav a')
let fill_to_end = document.querySelector('.fill-to-end')
let triangle = document.querySelector('.triangle')
function ahmed() {
    addEventListener("scroll", () => {
        for (let i = 0; i < nav_links.length; i++) {

            if (scrollY >= 1) {
                hdr.classList.add("hdr_scroll")
                nav_links[i].classList.add("nav_i_style_scroll")
                hdr_logo.classList.add('logo_h2_scroll')
                hdr_logo.previousElementSibling.style.width = "40px"

            }
            else {
                hdr.classList.remove("hdr_scroll")
                nav_links[i].classList.remove("nav_i_style_scroll")
                hdr_logo.classList.remove('logo_h2_scroll')
                hdr_logo.previousElementSibling.style.width = ""
            }
        }
    })
}
ahmed()
addEventListener("scroll", () => {
    let scroll_Value_now = document.documentElement.scrollTop, height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let result = parseInt((scroll_Value_now / height) * 100)
    if (result <= 15) {
        triangle.style.width = parseInt(result * 7) + "%"
        if (result == 15) {
            result = 15
            triangle.style.width = 100 + "%"
        }
    }
    // console.log(nav_links);

})


const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach(entrie => {
        if (entrie.isIntersecting) {

            nav_links.forEach(e => {
                e.classList.remove("nav_a_active_have")
                if (e.dataset.ls == entrie.target.id) {
                    e.classList.add("nav_a_active_have")

                }
            })

        }

    })
}, {
    root: null,            // مراقبة منطقة الرؤية بأكملها
    rootMargin: '0px',     // لا هامش
    threshold: 0.1          // إطلاق الحدث عند تقاطع 50% من العنصر مع منطقة الرؤية
}
)
document.querySelectorAll("section").forEach(section => {
    observer.observe(section)
})


let go_top = document.querySelector('.go_top')
// scrolly >=50 ? go_top.style.opacity = "1":go_top.style.opacity = "0"
scrollY >= 50 ? go_top.style.opacity = "1" : go_top.style.opacity = "0"
addEventListener("scroll", () => {
    scrollY >= 50 ? go_top.style.opacity = "1" : go_top.style.opacity = "0"
})
go_top.addEventListener("click", () => { scroll(0, 0) })
// end cousomize bo_top icoe 

// start customize card 

// end customize card 





// to-filll-start 


function to_Top() {
    let scroll_Value_now = document.documentElement.scrollTop, height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let result = (scroll_Value_now / height) * 100
    document.querySelector(".fill-to-end").style.width = result + "%"
}
(function () { onscroll = function () { to_Top() } })()
// to-filll-end






// ************************* landing background ****************

let bc = _ => {
    let bcLan = document.querySelector(".landing")
    let background = ["imgs/landin-1.jpg", "imgs/landin-2.jpg", "imgs/landin-3.jpg"]
    background.reverse()
    let i = 0
    setInterval(_ => {
        // bcLan.classList.add("blur_loding")
        if (i === background.length) {
            i = 0
        }
        bcLan.style.cssText = `
        background-image: url(${background[i]});
        background-position: 100% 100%;
        `
        i++
        // bcLan.classList.add("blur_loding")
    }, 8000)
}
// bc()

// ************************* work ****************
let slide = document.querySelector('.slide')
let slide_img = document.querySelector('.slide img')
let slide_close = document.querySelector('.slide i ')
slide_close.onclick = () => {
    slide.classList.remove("slide-active")
}
let imgWork = document.querySelectorAll(".work .container .img-cont img")
imgWork.forEach(img => {
    img.onclick = (e) => {
        slide.classList.add("slide-active")
        slide_img.src = e.target.src
    }

})



// serv 
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
document.querySelector(".swiper-wrapper").addEventListener("mouseleave",_=>{
})
setInterval(_ => {
    document.getElementById("arr-r").click()
}, 5000)



let li_act
document.querySelectorAll(".taps li").forEach(e=>{
    e.addEventListener("click",_=>{
        document.querySelectorAll(".taps li").forEach(ele=>{
            ele.classList.remove("active__tab")
        })
        e.classList.add("active__tab")
        li_act=e
        fillter__tab(e.innerHTML)
    })
})
function fillter__tab (target="تشطيبات"){
    let all__img__serv = document.querySelectorAll(".work .container .img-cont img")
    all__img__serv.forEach(img=>{
        img.parentElement.classList.remove("scale-animation")

        if (img.dataset.type == target) {
            img.parentElement.classList.add("scale-animation")
        }
    })
}
fillter__tab()