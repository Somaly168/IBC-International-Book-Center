
$(document).ready(function(){
    const iconLink = ["facebook","telegram","instagram","linkedin"]
    var txtIcon=" "
    iconLink.forEach((e)=>{
        
        txtIcon += `<a href=""><i class="fa-brands fa-${e}"></i></a>`
    })
    $(".link-icon").html(txtIcon)


    const menu = ["Home","Products","Brands","About Us","Branch","Contact Us"]
    var txtmenu=" "
    menu.forEach((e)=>{
        txtmenu +=` <a href="#${e}">${e}</a>`
    })
    $(".menu").html(txtmenu)

    
    $(".menu-display").html(txtmenu)
    $(".menuIcon-display").click(function(){
        $(".menuBar-display").slideDown()
    })
    $(".close").click(function(){
        $(".menuBar-display").slideUp()
    })  
    

    function Brand(){
        var txt=" "
        const listBrand="brand3.png brand2.png brand4.png brand1.jpg brand5.jpg brand6.webp brand7.png brand9.jfif brand10.jfif brand11.png brand12.jpg brand8.jpg"
        const newListBrand = listBrand.split(" ")
        newListBrand.forEach((e)=>{
            txt +=`
                <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 brand-wrapper">
                    <img src="img/${e}" alt="">
                </div>
            `
        })
        $(".brands").html(txt)
    }Brand();
    function Branch(){
        var txt=" "
        const listBranch = [
            {"img":"Monivong.JPG","branch-name":"IBC1-ព្រះមុនីវង្ស","phone":"010 777 768"},
            {"img":"DN.JPG","branch-name":"IBC2-កម្ពុជាក្រោម","phone":"010 386 238"},
            {"img":"Maosetong.jpg","branch-name":"IBC3-ម៉ៅសេទុង","phone":"023 223 223"},
            {"img":"SR.jpg","branch-name":"IBC4-សៀមរៀប","phone":"010 385 168"},
            {"img":"BKK.jpg","branch-name":"IBC5-បឹងកេងកង ","phone":"010 686 268"},
            {"img":"Aon1.jpg","branch-name":"IBC6-អុីអន១","phone":"010 771 188"},
            {"img":"Aon2.jpg","branch-name":"IBC7-អុីអន២","phone":"096 553 9000"},
            {"img":"TK.jpg","branch-name":"IBC8-ទួលគោក","phone":"010 361 777"},
            {"img":"StengMeanchey.jpg","branch-name":"IBC9-ស្ទឹងមានជ័យ","phone":"070 938 938"},
            {"img":"Aon3.jpg","branch-name":"IBC10-អុីអន៣","phone":"016 333 261"},
            {"img":"StengMeanchey.jpg","branch-name":"IBC9-ស្ទឹងមានជ័យ","phone":"070 938 938"},
            {"img":"Aon3.jpg","branch-name":"IBC10-អុីអន៣","phone":"016 333 261"}
        ]
        listBranch.forEach((e)=>{
            txt +=`
                <div class="col-xl-1 col-lg-2 col-md-2 col-ms-2 col-2 ">
                    <div class="branch-wrapper">
                        <div class="branch-img">
                            <img src="img/${e["img"]}" alt="">
                        </div>
                        <div class="branch-txt">
                            <h5>${e["branch-name"]}</h5>
                            <p>Tel: ${e["phone"]}</p>
                        </div>
                    </div>
                </div>
            `
        })
        $(".branch").html(txt)
    }Branch()
    $(".select-btn").click(function(){
        $(".options").toggle()
    })
    
})

function choose_branch() {
    const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");
        const timing = document.querySelector(".timing");
     
    options.forEach(option => {
      option.addEventListener("click",function(){
        let selectedOption = option.querySelector(".option-text").innerText
        sBtn_text.innerText = selectedOption
        if (option.querySelector(".option-text").id === "AEON-branch") {
            timing.innerText = "9:00am-10:00pm";
          } else {
            timing.innerText = "8:00am-8:00pm";
          }
      })
    });
}choose_branch();


// function_Swiper

    function banner(){
        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper.banner", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
        });
    }    banner();
    function product(){
        var swiper = new Swiper(".mySwiper.product", {
            slidesPerView: 1,
            spaceBetween: 30,
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }product();

